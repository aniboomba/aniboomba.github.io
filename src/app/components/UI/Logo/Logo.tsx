import React from 'react';
import Link from "next/link";
import './Logo.scss'
interface ILogo {
    className?:string
}
const Logo = ({className}:ILogo) => {
    return (
        <Link href={'/'} className={`logo ${className}`}>
            gorogoro
        </Link>
    );
};

export default Logo;