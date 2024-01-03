import {makeAutoObservable} from 'mobx'


interface IAuthStateStore {
    stateTabs: boolean
    btnPassActive:boolean
    login:string
    password:string
}

class AuthStateStore implements IAuthStateStore {
    stateTabs = true
    btnPassActive = true
    login = ''
    password = ''

    constructor() {
        makeAutoObservable(this)
    }

    setStateTabs(val: boolean) {
        this.stateTabs = val
    }
    setBtnPassActive(val: boolean) {
        this.btnPassActive = val
    }
    setLogin(val: string) {
        this.login = val
    }
    setPassword(val: string) {
        this.password = val
    }

}

export default new AuthStateStore()
