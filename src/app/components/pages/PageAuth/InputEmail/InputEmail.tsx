"use client"
import React from 'react';
import CustomInput from "@/app/components/UI/CustomInput/CustomInput";
import authStateStore from "@/app/lib/store/auth-state-store";
import {Button} from "@/app/components/UI/Button/Button";
import icons from "@/app/generic/Icons/Icons";
import {observer} from "mobx-react-lite";
import './InputEmail.scss'

const InputEmail = () => {

    const stateBtn = authStateStore.login.length !== 0 &&
        <Button onClick={() => authStateStore.setLogin('')}>{icons.x_mark}</Button>

    return (
        <CustomInput className='input-login'
                     type="email"
                     name='email'
                     placeholder={'Почта'}
                     value={authStateStore.login}
                     onChange={(event) => authStateStore.setLogin(event.target.value)}
        >
            <div className='input-login__btn'>
                {stateBtn}
            </div>
        </CustomInput>
    );
};

export default observer(InputEmail);