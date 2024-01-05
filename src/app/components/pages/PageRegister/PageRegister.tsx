"use client"
import React from 'react';
import FormLogAndRegister from "@/app/components/UI/FormLogAndRegister/FormLogAndRegister";
import {Button} from "@/app/components/UI/Button/Button";
import authStateStore from "@/app/lib/store/auth-state-store";
import Regex from "@/app/core/lib/Regex/Regex";
import Toaster from "@/app/core/lib/Toaster/Toaster";
import {toast} from "react-toastify";
import {observer} from "mobx-react-lite";

const PageRegister = () => {
    const onClickEntry = () => {

        const isValidEmail = authStateStore.stateTabs && Regex.regexEmail(authStateStore.login);
        const isValidPhone = !authStateStore.stateTabs && Regex.regexPhone(authStateStore.phone);

        return isValidEmail || isValidPhone ? null : new Toaster({msg: 'Неправильно', type: toast.TYPE.WARNING});
    };

    return (
        <FormLogAndRegister backHref={'/page/auth'} key={'dasdadasd'}>
            <Button onClick={onClickEntry} className='auth__entry'>
                Зарегистрироваться
            </Button>

        </FormLogAndRegister>
    );
};

export default observer(PageRegister);