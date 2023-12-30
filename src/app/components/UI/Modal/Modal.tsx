import React, {ReactNode} from 'react';
import './Modal.scss'
import {observer} from "mobx-react-lite";
import appStateStore from "@/app/lib/store/app-state-store";

interface IModal {
    title: any
    children: ReactNode
    className?: string
}

const Modal = ({title, children, className}: IModal) => {
    return (
        <>
            <button className={`btn btn-ghost ${className}`} onClick={()=>document.getElementById('my_modal_1').showModal()}>{title}</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    {
                        children
                    }
                </div>
            </dialog>
        </>
    );
};

export default observer(Modal);