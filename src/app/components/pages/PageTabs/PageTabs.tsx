"use client"
import React from 'react';
import {observer} from "mobx-react-lite";
import icons from "@/app/generic/Icons/Icons";
import Link from "next/link";

const PageTabs = () => {
    const data = [
        {
            title: "Закладки",
            icon: icons.bookmark,
            href: '/page/save'
        }
    ]
    return (
        data.map((item) => (
            <Link className='p-8 rounded-box  max-w-84 shadow-md flex item-center' href={item.href}>
                <span className='mr-4'>
                    {item.icon}
                </span> {item.title}
            </Link>
        ))
    );
};

export default observer(PageTabs);