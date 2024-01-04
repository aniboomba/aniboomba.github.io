"use client"
import React from 'react';
import './PageAuth.scss'
import Link from "next/link";
import icons from "@/app/generic/Icons/Icons";
import Logo from "@/app/components/UI/Logo/Logo";
import {observer} from "mobx-react-lite";
import {Button} from "@/app/components/UI/Button/Button";
import authStateStore from "@/app/lib/store/auth-state-store";
import InputLogin from "@/app/components/pages/PageAuth/InputEmail/InputEmail";
import InputPhone from "@/app/components/pages/PageAuth/InputPhone/InputPhone";
import Toaster from "@/app/generic/Toaster/Toaster";
import {toast} from "react-toastify";

const PageAuth = () => {
    const changeStateTabs = (val: boolean) => authStateStore.setStateTabs(val)

    const stateInput = {
        true: <InputLogin/>,
        false: <InputPhone/>
    }

    const onClickEntry = () => {
        const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

        if (authStateStore.stateTabs) {
            if (!regexEmail.test(authStateStore.login)) {
                return new Toaster({msg: 'Неправильно', type: toast.TYPE.WARNING})
            }
            console.log(1)
        } else {
            if (!regexPhone.test(authStateStore.phone)) {
                return new Toaster({msg: 'Неправильно', type: toast.TYPE.WARNING})
            }
            console.log(2)
        }
    }

    return (
        <div className='auth'>
            <div className="auth__card">
                <div className='card-body'>
                    <Link href={'/'} className='left-8 absolute'>
                        {icons.arrow_left}
                    </Link>

                    <Logo className='auth__logo'/>

                    <div className='auth__body'>
                        <div role="tablist" className="tabs auth__tabs tabs-boxed">
                            <a role="tab" onClick={() => changeStateTabs(true)}
                               className={`tab ${authStateStore.stateTabs && "tab-active"}`}>Почта</a>
                            <a role="tab" onClick={() => changeStateTabs(false)}
                               className={`tab ${!authStateStore.stateTabs && "tab-active"}`}>Телефон</a>
                        </div>

                        {stateInput[authStateStore.stateTabs]}

                        <Button onClick={onClickEntry} className='auth__entry'>
                            Вход
                        </Button>
                        <Button className='auth__register'>
                            Зарегистрироваться
                        </Button>

                        <div className='w-full text-center text-sm'>
                            Войти с помощью
                        </div>
                        <div className='auth__footer'>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                    <span>SY</span>
                                </div>
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                    <span>SY</span>
                                </div>
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                    <span>SY</span>
                                </div>
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                    <span>SY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(PageAuth);