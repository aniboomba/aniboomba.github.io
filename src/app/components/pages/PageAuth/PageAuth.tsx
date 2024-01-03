"use client"
import React from 'react';
import './PageAuth.scss'
import Link from "next/link";
import icons from "@/app/generic/Icons/Icons";
import Logo from "@/app/components/UI/Logo/Logo";
import {observer} from "mobx-react-lite";
import {Button} from "@/app/components/UI/Button/Button";
import authStateStore from "@/app/lib/store/auth-state-store";

const PageAuth = () => {
    const changeStateTabs = (val: boolean) => authStateStore.setStateTabs(val)
    return (
        <div className='auth'>
            <div className="auth__card">
                <div className='card-body'>
                    <Link href={'/'} className='left-8 absolute'>
                        {icons.arrow_left}
                    </Link>

                    <Logo className={'auth__logo'}/>

                    <div className='auth__body'>
                        <div role="tablist" className="tabs auth__tabs tabs-boxed">
                            <a role="tab" onClick={() => changeStateTabs(true)}
                               className={`tab ${authStateStore.stateTabs && "tab-active"}`}>Почта</a>
                            <a role="tab" onClick={() => changeStateTabs(false)}
                               className={`tab ${!authStateStore.stateTabs && "tab-active"}`}>Телефон</a>
                        </div>

                        <input className='auth__input' type="email" name='email' placeholder={'Логин или email'}/>
                        <Button className={'auth__entry w-full'}> Вход</Button>
                        <Button className={'auth__register w-full'}> Зарегистрироваться</Button>
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