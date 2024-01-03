import {makeAutoObservable} from 'mobx'


interface IAuthStateStore {
    stateTabs: boolean
}

class AuthStateStore implements IAuthStateStore {
    stateTabs = true

    constructor() {
        makeAutoObservable(this)
    }

    setStateTabs(val: boolean) {
        this.stateTabs = val
    }

}

export default new AuthStateStore()
