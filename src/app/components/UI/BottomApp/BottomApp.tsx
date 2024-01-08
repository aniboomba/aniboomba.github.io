"use client"
import React from 'react';
import {observer} from "mobx-react-lite";
import './BottomApp.scss'
import Link from "next/link";
import icons from "@/app/generic/Icons/Icons";
import {usePathname} from "next/navigation";

const BottomApp = () => {

    const data = [
        {
            title: "Главная",
            icon: icons.search,
            link: '/'
        },
        {
            title: "Другое",
            icon: icons.squares_2x2,
            link: '/page/tabs'
        },
        {
            title: "Закладки",
            icon: icons.bookmark,
            link: '/page/bookmarks'
        },
        {
            title: "Профиль",
            icon: icons.user_circle,
            link: '/page/auth'
        },
    ]


    return (
        <div className='bottom-app'>
            <div className="btm-nav">
                {
                    data.map((itemData, index) => (
                        <Link key={`bottom-${index}`} href={itemData.link}
                              className={usePathname() === itemData.link ? 'active' : ''}>
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