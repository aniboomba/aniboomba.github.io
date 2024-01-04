import React from 'react';
import {observer} from "mobx-react-lite";
import CustomInput from "@/app/components/UI/CustomInput/CustomInput";
import authStateStore from "@/app/lib/store/auth-state-store";
import {Button} from "@/app/components/UI/Button/Button";
import icons from "@/app/generic/Icons/Icons";
import './InputPhone.scss'

const InputPhone = () => {
    // const stateEye = authStateStore.btnPassActive ? icons.eye_slash : icons.eye

    const stateBtn = authStateStore.phone.length !== 0 &&
        <Button onClick={() => authStateStore.setPhone('')}>{icons.x_mark}</Button>

    return (
        <CustomInput
            placeholder={'Номер телефона'}
            className='input-phone'
            name={'phone'}
            type={'text'}
            value={authStateStore.phone}
            onChange={(event) =>  authStateStore.setPhone(event.target.value)}
        >
            <div className='input-login__btn'>
                {stateBtn}
            </div>

        </CustomInput>
    );
};

export default observer(InputPhone);