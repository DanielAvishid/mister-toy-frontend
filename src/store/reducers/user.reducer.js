import { userService } from "../../services/user.service.js";

export const SET_USER = 'SET_USER'
export const SET_LOGIN_IS_SHOWN = 'SET_LOGIN_IS_SHOWN'

const initialState = {
    isLoginShown: false,
    loggedinUser: userService.getLoggedinUser()
}

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {

        // User
        case SET_USER:
            return { ...state, loggedinUser: action.user }

        //LOGIN
        case SET_LOGIN_IS_SHOWN:
            return { ...state, isLoginShown: action.isLoginShown }

        default:
            return state;
    }
}