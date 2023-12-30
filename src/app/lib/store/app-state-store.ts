import {makeAutoObservable} from 'mobx'


interface IAppStateStore {
    inputValue: string
    stateModal:boolean
}

class AppStateStore implements IAppStateStore {
    inputValue = ''
    stateModal = false

    constructor() {
        makeAutoObservable(this)
    }

    setInputValue(val: string) {
        this.inputValue = val
    }
    setStateModal(val: boolean) {
        this.stateModal = val
    }
}

export default new AppStateStore()
