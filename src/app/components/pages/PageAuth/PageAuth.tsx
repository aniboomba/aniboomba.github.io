"use client"
import React from 'react';
import './PageAuth.scss'
import Link from "next/link";
import {observer} from "mobx-react-lite";
import {Button} from "@/app/components/UI/Button/Button";
import authStateStore from "@/app/lib/store/auth-state-store";
import Toaster from "@/app/core/lib/Toaster/Toaster";
import {toast} from "react-toastify";
import Regex from "@/app/core/lib/Regex/Regex";
import FormLogAndRegister from "@/app/components/UI/FormLogAndRegister/FormLogAndRegister";

const PageAuth = () => {


    const onClickEntry = () => {

        const isValidEmail = authStateStore.stateTabs && Regex.regexEmail(authStateStore.login);
        const isValidPhone = !authStateStore.stateTabs && Regex.regexPhone(authStateStore.phone);

        return isValidEmail || isValidPhone ? null : new Toaster({msg: 'Неправильно', type: toast.TYPE.WARNING});
    };


    return (
        <FormLogAndRegister key={'dasdadasd'}>
            <Button onClick={onClickEntry} className='auth__entry'>
                Вход
            </Button>
            <Link href={'/page/register'} className='btn btn-ghost no-animation auth__register'>
                Зарегистрироваться
            </Link>

            <div className='w-full text-center text-sm'>
                Войти с помощью
            </div>
            <div className='auth__footer'>
                {
                    Array.from({length: 4}).map((_, index) => (
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-12">
                                <span>{index}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

        </FormLogAndRegister>
    );
};

export default observer(PageAuth);