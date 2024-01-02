"use client"
import React from 'react';
import {observer} from "mobx-react-lite";
import './BottomApp.scss'
import Link from "next/link";
import icons from "@/app/generic/Icons/Icons";
import {usePathname} from "next/navigation";

const BottomApp = () => {
    const pathname = usePathname()
    const data = [
        {
            title: "Главная",
            icon: icons.search,
            link:'/'
        },
        {
            title: "Другое",
            icon: icons.squares_2x2,
            link:'/page/tabs'
        },
        {
            title: "Настройки",
            icon: icons.cog_6_tooth,
            link:'/page/setting'
        },
        {
            title: "Профиль",
            icon: icons.x_mark,
            link:'/page/profile'
        },
    ]
    return (
        <div className='bottom-app'>
            <div className="btm-nav">
                {
                    data.map((itemData) => (
                        <Link href={itemData.link} className={usePathname()===itemData.link?'active':''}>
                            {itemData.icon}
                            <span className='text-xs'>{itemData.title}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default observer(BottomApp);