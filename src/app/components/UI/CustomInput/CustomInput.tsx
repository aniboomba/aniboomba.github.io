import React, {ChangeEventHandler, MouseEventHandler} from 'react';
import './CustomInput.scss'
import Icons from "@/app/generic/Icons/Icons";
import {observer} from "mobx-react-lite";


interface ICustomInput {
    placeholder: string
    type: string
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
    onClickDelete: MouseEventHandler<HTMLButtonElement> | undefined
    value: string | readonly string[] | number | undefined
    className: string
}

const CustomInput = ({
                         placeholder,
                         type,
                         onChange,
                         value,
                         onClickDelete,
                         className
                     }: ICustomInput) => (
    <div className={`custom-input input-bordered w-full ${className}`}>
        <input type={type} placeholder={placeholder ? placeholder : "Ввод текста"} onChange={onChange} value={value}
               className="input"/>
        <div className='custom-input__btns'>
            {
                value.toString().length > 0
                &&
                <>
                    <button onClick={onClickDelete} className='custom-input__btn'>
                        {Icons.x_mark}
                    </button>
                    <div className="custom-input__line"/>
                </>
            }
            <button onClick={onClickDelete} className='custom-input__btn'>
                {Icons.search}
            </button>
        </div>
    </div>
)

export default observer(CustomInput)