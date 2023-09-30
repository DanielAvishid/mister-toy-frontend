import { toyService } from "../../services/toy.service";
import { ADD_TOY, TOY_UNDO, REMOVE_TOY, SET_TOYS, SET_IS_LOADING, UPDATE_TOY, SET_FILTER_BY } from "../reducers/toy.reducer";
import { store } from "../store"

export async function loadToys() {
    try {
        const { filterBy } = store.getState().toyModule
        store.dispatch({ type: SET_IS_LOADING, isLoading: true })
        const toys = await toyService.query(filterBy)
        store.dispatch({ type: SET_TOYS, toys })
    } catch (err) {
        console.log('toy action -> Cannot load toys', err)
        throw err
    } finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}

export async function removeToyOptimistic(toyId) {
    try {
        store.dispatch({ type: REMOVE_TOY, toyId })
        await toyService.remove(toyId)
    } catch (err) {
        store.dispatch({ type: TOY_UNDO })
        console.log('toy action -> Cannot remove toy', err)
        throw err
    }
}

export async function saveToy(toy) {
    try {
        const type = toy._id ? UPDATE_TOY : ADD_TOY
        const toyToSave = await toyService.save(toy)
        store.dispatch({ type, toy: toyToSave })
        return toyToSave
    } catch (error) {
        console.log('toy action -> Cannot save toy', err)
        throw err
    }
}

export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}