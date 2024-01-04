import React, {ChangeEventHandler, ReactNode} from 'react';
import './CustomInput.scss'
import {observer} from "mobx-react-lite";


interface ICustomInput {
    placeholder?: string
    type?: string
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
    value?: string
    className?: string
    children?: ReactNode,
    name?: string
    frontChildren?: ReactNode
}

const CustomInput = ({
                         placeholder,
                         type,
                         onChange,
                         value,
                         className,
                         children,
                         name,
                         frontChildren
                     }: ICustomInput) => (
    <div className={`custom-input  w-full ${className}`}>
        {frontChildren}
        <input name={name} type={type} placeholder={placeholder ? placeholder : "Ввод текста"} onChange={onChange}
               value={value}
               className="input"/>
        {children}
    </div>
)

export default observer(CustomInput)