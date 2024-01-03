import {Rubik} from 'next/font/google'
import './globals.scss'
import './_variables.scss'
import './_color.scss'
import {ReactNode} from "react";
import HeaderApp from "@/app/components/UI/HeaderApp/HeaderApp";
import BottomApp from "@/app/components/UI/BottomApp/BottomApp";

const rubik = Rubik({subsets: ['latin']})


interface ILayout {
    children: ReactNode
}

export default function RootLayout({children}: ILayout) {
    return (
        <html lang="ru" data-lt-installed={true} data-theme="light">
        <body className={rubik.className}>
        <HeaderApp/>
            {children}
        <BottomApp/>
        </body>
        </html>
    )
}
