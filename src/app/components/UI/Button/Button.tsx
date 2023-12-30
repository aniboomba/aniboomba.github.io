import React, {ClassAttributes, ReactNode} from 'react';

interface IButton {
    children: ReactNode
}

export const Button = ({
                           children,
                           onChange,
                           onClick,
                           className,

                       }: ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & IButton) => {
    return (
        <button onChange={onChange} onClick={onClick} className={`${className} btn no-animation `}>{children}</button>
    );
};