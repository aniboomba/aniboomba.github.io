"use client"
import React, {useEffect} from 'react';
import './HeaderApp.scss'
import Search from "@/app/components/Search/Search";
import Link from "next/link";
import icons from "@/app/generic/Icons/Icons";
import {Button} from "@/app/components/UI/Button/Button";
import {usePathname} from "next/navigation";
import {Rubik} from "next/font/google";
import {className} from "postcss-selector-parser";

const rubik = Rubik({weight: ['900']})
const HeaderApp = () => {
    const pathname = usePathname()
    const activeSearch = ['/']
    useEffect(() => {

    }, [])

    return (
        <div className='header-app'>
            <div className='header-app__web'>
                <div className='header-app__part-search'>
                    <Link href={'/'} className={`header-app__logo ${rubik.className}`}>
                        Zaeboomba
                    </Link>
                    {
                        activeSearch.includes(pathname) && <Search/>
                    }

                </div>
                <div className='header-app__part-control'>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button"
                             className="btn no-animation btn-ghost m-1">{icons.squares_2x2}</div>
                        <ul tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <Link href={'/page/setting'} className='btn no-animation btn-ghost'>
                        {icons.cog_6_tooth}
                    </Link>
                    <Button className=' header-app__btn'>
                        Войти
                    </Button>
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