"use client"
import React, {ReactNode} from 'react';
import Link from "next/link";
import icons from "@/app/generic/Icons/Icons";
import Logo from "@/app/components/UI/Logo/Logo";
import './FormLogAndRegister.scss'
import authStateStore from "@/app/lib/store/auth-state-store";
import InputLogin from "@/app/components/pages/PageAuth/InputEmail/InputEmail";
import InputPhone from "@/app/components/pages/PageAuth/InputPhone/InputPhone";
import {observer} from "mobx-react-lite";

interface IFormLogAndRegister {
    children: ReactNode
    backHref?: string
}

const FormLogAndRegister = ({children, backHref}: IFormLogAndRegister) => {

    return (
        <div className='auth'>
            <div className="auth__card">
                <div className='card-body'>
                    <Link href={backHref !== undefined ? backHref : '/'} className='btn btn-ghost left-4 top-7 absolute'>
                        {icons.arrow_left}
                    </Link>

                    <Logo className='auth__logo'/>
                    <div role="tablist" className="tabs auth__tabs tabs-boxed">
                        <a role="tab" onClick={() => authStateStore.setStateTabs(true)}
                           className={`tab ${authStateStore.stateTabs && "tab-active"}`}>Почта</a>
                        <a role="tab" onClick={() => authStateStore.setStateTabs(false)}
                           className={`tab ${!authStateStore.stateTabs && "tab-active"}`}>Телефон</a>
                    </div>

                    {
                        authStateStore.stateTabs ?
                            <InputLogin/>
                            :
                            <InputPhone/>
                    }
                    {children}
                </div>
            </div>
        </div>
    );
};

export default observer(FormLogAndRegister);