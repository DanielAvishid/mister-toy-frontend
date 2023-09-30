import { httpService } from './http.service.js'

const USER_URL = 'user/'
const AUTH_URL = 'auth/'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getById,
    getLoggedinUser
}

async function login({ username, password }) {
    try {
        const user = await httpService.post(AUTH_URL + 'login', { username, password })
        if (user) return _setLoggedinUser(user)
    } catch (err) {
        throw err
    }
}

async function signup({ username, password, fullname }) {
    try {
        const userToSign = { username, password, fullname }
        const user = await httpService.post(AUTH_URL + 'signup', userToSign)
        if (user) return _setLoggedinUser(user)
    } catch (err) {
        throw err
    }
}

function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
    return Promise.resolve()
}

async function getById(userId) {
    try {
        const user = await httpService.get(USER_URL + userId)
        return user
    } catch (err) {
        throw err
    }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN)) || ''
}

function _setLoggedinUser(user) {
    const userToSave = { _id: user._id, fullname: user.fullname, isAdmin: user.isAdmin }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(userToSave))
    return userToSave
}