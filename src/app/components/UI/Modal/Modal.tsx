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
            <label htmlFor="my_modal_7" onClick={()=>appStateStore.setStateModal(true)} className={`btn btn-ghost ${className}`}>{title}</label>
            <input value="coding" type="checkbox" onChange={()=>appStateStore.stateModal} checked={appStateStore.stateModal} className="modal-toggle"/>
            <div className="modal " role="dialog">
                <div className="modal-box">

                    {
                        children
                    }
                </div>
            </div>
        </>
    );
};

export default observer(Modal);