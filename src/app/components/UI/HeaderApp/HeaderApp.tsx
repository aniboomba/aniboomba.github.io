"use client"
import React from 'react';
import './HeaderApp.scss'
import Search from "@/app/components/Search/Search";
import Link from "next/link";
import icons from "@/app/generic/Icons/Icons";
import {usePathname} from "next/navigation";
import Logo from "@/app/components/UI/Logo/Logo";


const HeaderApp = () => {
    const pathname = usePathname()
    const activeSearch = ['/']
    const activeHeader = ['auth', 'register']

    return (

        !activeHeader.includes(pathname.split('/')[2]) &&
        <div className='header-app animate'>
            <div className='header-app__web'>
                <div className='header-app__part-search'>
                    <Logo/>
                    {
                        activeSearch.includes(pathname) && <Search/>
                    }

                </div>
                <div className='header-app__part-control'>
                    <Link href={'/page/tabs'} className='btn no-animation btn-ghost'>
                        {icons.squares_2x2}
                    </Link>
                    <Link href={'/page/setting'} className='btn no-animation btn-ghost'>
                        {icons.cog_6_tooth}
                    </Link>
                    <Link href={'/page/auth'} className=' custom__btn btn no-animation header-app__btn'>
                        Войти
                    </Link>
                </div>
            </div>
            <div className='header-app__mob'>
                {
                    activeSearch.includes(pathname) && <Search/>
                }
            </div>
        </div>
    );
};

export default HeaderApp;