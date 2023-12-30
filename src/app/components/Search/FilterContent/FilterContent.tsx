import React from 'react';
import {observer} from "mobx-react-lite";
import './FilterContent.scss'
import CustomInput from "@/app/components/UI/CustomInput/CustomInput";
import {Button} from "@/app/components/UI/Button/Button";
import appStateStore from "@/app/lib/store/app-state-store";

const FilterContent = () => {
    const onchangeCloseBtn = () => {
        appStateStore.setStateModal(false)
    }
    return (
        <div className='filter-content'>
            <div className='filter-content__body'>
                <CustomInput className=' filter-content__input' value={'dsdsd'}/>
                <CustomInput className=' filter-content__input' value={'dsdsd'}/>
                <CustomInput className=' filter-content__input' value={'dsdsd'}/>
                <CustomInput className=' filter-content__input' value={'dsdsd'}/>
                <CustomInput className=' filter-content__input' value={'dsdsd'}/>
                <CustomInput className=' filter-content__input' value={'dsdsd'}/>
            </div>
            <div className='filter-content__footer'>
                <Button onClick={onchangeCloseBtn} className='mr-4'>
                    Закрыть
                </Button>
                <Button onClick={onchangeCloseBtn} className='filter-content__btn'>
                    Сохранить
                </Button>
            </div>
        </div>
    );
};

export default observer(FilterContent);