import React from 'react';
import {Metadata} from "next";
import PageSetting from "@/app/components/pages/PageSetting/PageSetting";

export const metadata: Metadata = {
    title: 'Zaeboomba',
    description: 'Сайт с аниме',
    icons: 'logo_gorogoro.svg'
}

const Setting = () => {
    return (
        <div className='animate layout__container'>
            <PageSetting/>
        </div>
    );
};

export default Setting;