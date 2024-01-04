import React, {ClassAttributes, ReactNode} from 'react';

interface IButton {
    children: ReactNode
}

export const Button = ({
                           children,
                           onChange,
                           onClick,
                           className,
                           style
                       }: ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & IButton) => {
    return (
        <button style={style} onChange={onChange} onClick={onClick}
                className={`${className} btn btn-ghost no-animation `}>{children}</button>
    );
};