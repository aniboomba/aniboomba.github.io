"use client"
import React from 'react';
import './Search.scss'
import CustomInput from "@/app/components/UI/CustomInput/CustomInput";
import icons from "@/app/generic/Icons/Icons";
import Modal from "@/app/components/UI/Modal/Modal";
import appStateStore from "@/app/lib/store/app-state-store";
import {observer} from "mobx-react-lite";
import FilterContent from "@/app/components/Search/FilterContent/FilterContent";

const Search = () => (
    <div className='search'>
        <CustomInput
            value={appStateStore.inputValue}
            onClickDelete={() => appStateStore.setInputValue('')}
            onChange={(event) => appStateStore.setInputValue(event.target.value)}
        />
        <Modal
            className='ml-4'
            title={icons.filter}
        >
            <FilterContent/>
        </Modal>
    </div>
)

export default observer(Search);