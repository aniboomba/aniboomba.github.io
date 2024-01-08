"use client"
import React from 'react';
import './Search.scss'
import CustomInput from "@/app/components/UI/CustomInput/CustomInput";
import icons from "@/app/generic/Icons/Icons";
import Modal from "@/app/components/UI/Modal/Modal";
import appStateStore from "@/app/lib/store/app-state-store";
import {observer} from "mobx-react-lite";
import FilterContent from "@/app/components/UI/Search/FilterContent/FilterContent";
import Icons from "@/app/generic/Icons/Icons";

const Search = () => (
    <div className='search'>
        <CustomInput
            className='search__input'
            value={appStateStore.inputValue}
            onChange={(event) => appStateStore.setInputValue(event.target.value)}
        >
            <div className='flex item-center'>
                {
                    appStateStore.inputValue !== ''
                    &&
                    <>
                        <button onClick={() => appStateStore.setInputValue('')} className='custom-input__btn'>
                            {Icons.x_mark}
                        </button>
                        <div className="custom-input__line"/>
                    </>
                }
                <button onClick={() => appStateStore.setInputValue('')} className='custom-input__btn'>
                    {Icons.search}
                </button>
            </div>
        </CustomInput>
        <Modal
            className='ml-4'
            title={icons.filter}
        >
            <FilterContent/>
        </Modal>
    </div>
)

export default observer(Search);