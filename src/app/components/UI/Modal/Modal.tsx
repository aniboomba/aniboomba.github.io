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
            <button className={`btn ${className}`} onClick={() => appStateStore.setStateModal(true)}>{title}</button>

            <input type="checkbox" className="modal-toggle" defaultChecked={appStateStore.stateModal}/>
            <div className="modal" role="dialog">
                <div className="modal-box max-w-5xl">
                    {children}
                </div>
            </div>
        </>
    );
};

export default observer(Modal);