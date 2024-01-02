import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Zaeboomba',
    description: 'Сайт с аниме',
    icons: './zaeboomba_logo_min.svg'
}

const Setting = () => {
    return (
        <div>
            Вкладка "настройки" в разработке
        </div>
    );
};

export default Setting;