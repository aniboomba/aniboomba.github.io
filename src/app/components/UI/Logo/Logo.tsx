import React from 'react';
import Link from "next/link";
import './Logo.scss'
import Image from "next/image";

interface ILogo {
    className?: string
}

const Logo = ({className}: ILogo) => {
    return (
        <Link href={'/'} className={`logo ${className}`}>
            <Image src={'/logo_gorogoro.svg'} width={100} height={100} alt={'gorogoro'} property={"true"} quality={95}/>
        </Link>
    );
};

export default Logo;