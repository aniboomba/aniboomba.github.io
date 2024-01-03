"use client"
import React from 'react';
import './PageAuth.scss'
import Link from "next/link";
import icons from "@/app/generic/Icons/Icons";
import Logo from "@/app/components/UI/Logo/Logo";
import {observer} from "mobx-react-lite";
import {Button} from "@/app/components/UI/Button/Button";
import authStateStore from "@/app/lib/store/auth-state-store";
import CustomInput from "@/app/components/UI/CustomInput/CustomInput";

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
                        {
                            authStateStore.stateTabs ?
                                <CustomInput className='auth__login' type="email" name='email'
                                             placeholder={'Логин или email'}
                                             value={authStateStore.login}
                                             onChange={(event) => authStateStore.setLogin(event.target.value)}
                                             btn={<Button
                                                 style={{width: '58px'}}
                                                 onClick={() => authStateStore.setLogin('')}>{authStateStore.login.length !== 0 && icons.x_mark}</Button>}
                                />
                                :
                                <CustomInput
                                    placeholder={'Пароль'}
                                    className='auth__phone'
                                    type={authStateStore.btnPassActive ? "password" : "text"}
                                    value={authStateStore.password}
                                    onChange={(event) => authStateStore.setPassword(event.target.value)}
                                    btn={<Button
                                        style={{width: '58px'}}
                                        onClick={() => authStateStore.setBtnPassActive(!authStateStore.btnPassActive)}>{authStateStore.btnPassActive ? icons.eye : icons.eye_slash}</Button>}/>
                        }

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