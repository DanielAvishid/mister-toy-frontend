import { toyService } from "../../services/toy.service";

export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'
export const TOY_UNDO = 'TOY_UNDO'

export const ADD_TOY_TO_CART = 'ADD_TOY_TO_CART'
export const REMOVE_TOY_FROM_CART = 'REMOVE_TOY_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'

export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_FILTER_BY = 'SET_FILTER_BY'

const initialState = {
    toys: [],
    lastToys: [],
    shoppingCart: [],
    filterBy: toyService.getDefaultFilter(),
    isLoading: false
}

export function toyReducer(state = initialState, action = {}) {
    let toys
    let shoppingCart
    let lastToys
    switch (action.type) {
        // TOYS
        case SET_TOYS:
            lastToys = [...action.toys]
            return { ...state, toys: action.toys, lastToys }

        case REMOVE_TOY:
            lastToys = [...state.toys]
            toys = state.toys.filter(toy => toy._id !== action.toyId)
            return { ...state, toys, lastToys }

        case ADD_TOY:
            toys = [...state.toys, action.toy]
            return { ...state, toys }

        case UPDATE_TOY:
            toys = state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy)
            return { ...state, toys }

        case TOY_UNDO:
            toys = [...state.lastToys]
            return { ...state, toys }

        //CART
        case ADD_TOY_TO_CART:
            shoppingCart = [...state.shoppingCart, action.toy]
            return { ...state, shoppingCart }

        case REMOVE_TOY_FROM_CART:
            shoppingCart = state.shoppingCart.filter(toy => toy._id !== action.toyId)
            return { ...state, shoppingCart }

        case CLEAR_CART:
            return { ...state, shoppingCart: [] }

        //LOADING
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }

        //FILTERBY
        case SET_FILTER_BY:
            return { ...state, filterBy: { ...action.filterBy } }

        default:
            return state;
    }
}