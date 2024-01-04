import {Rubik} from 'next/font/google'
import './globals.scss'
import './_variables.scss'
import './_color.scss'
import {ReactNode} from "react";
import HeaderApp from "@/app/components/UI/HeaderApp/HeaderApp";
import BottomApp from "@/app/components/UI/BottomApp/BottomApp";
import {Metadata} from "next";
import {ToastContainer} from "react-toastify";

const rubik = Rubik({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'GOROGORO',
    description: 'Сайт с аниме',
    icons: './Frame.svg'
}


interface ILayout {
    children: ReactNode
}

export default function RootLayout({children}: ILayout) {
    return (
        <html lang="ru" data-lt-installed={true} data-theme="light">
        <body className={rubik.className}>
        <ToastContainer/>
        <HeaderApp/>
            {children}
        <BottomApp/>
        </body>
        </html>
    )
}
