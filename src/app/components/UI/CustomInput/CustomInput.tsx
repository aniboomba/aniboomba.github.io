import React, {ChangeEventHandler, MouseEventHandler} from 'react';
import './CustomInput.scss'
import Icons from "@/app/generic/Icons/Icons";
import {observer} from "mobx-react-lite";


interface ICustomInput {
    placeholder?: string
    type?: string
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
    value?: string
    className?: string
    btn?: any,
    name?:string
}

const CustomInput = ({
                         placeholder,
                         type,
                         onChange,
                         value,
                         className,
                         btn,
    name
                     }: ICustomInput) => (
    <div className={`custom-input  w-full ${className}`}>
        <input name={name} type={type} placeholder={placeholder ? placeholder : "Ввод текста"} onChange={onChange} value={value}
               className="input"/>
        <div className='custom-input__btns'>
            {btn}
        </div>
    </div>
)

export default observer(CustomInput)
