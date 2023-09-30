import { httpService } from './http.service.js'

const BASE_URL = 'toy/'
const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Battery Powered"]

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter,
    getLabels
}

async function query(filterBy = {}) {
    try {
        const toys = await httpService.get(BASE_URL, { ...filterBy })
        return toys
    } catch (err) {
        throw err
    }
}

async function getById(toyId) {
    try {
        const toy = await httpService.get(BASE_URL + toyId)
        return toy
    } catch (err) {
        throw err
    }
}

async function remove(toyId) {
    try {
        await httpService.delete(BASE_URL + toyId)
    } catch (err) {
        throw err
    }
}

async function save(toy) {
    if (toy._id) {
        try {
            const updatedToy = await httpService.put(BASE_URL + toy._id, toy)
            return updatedToy
        } catch (err) {
            throw err
        }
    } else {
        try {
            const addedToy = await httpService.post(BASE_URL, toy)
            return addedToy
        } catch (err) {
            throw err
        }
    }
}

function getDefaultFilter() {
    return {
        txt: '',
        maxPrice: Infinity,
        minPrice: -Infinity,
        labels: [],
        inStock: 'all',
        pageIdx: 0,
        sortBy: 'name',
        asc: 1
    }
}

function getEmptyToy() {
    return {
        name: '',
        price: -Infinity,
        labels: [],
        inStock: true
    }
}

function getLabels() {
    return [...labels]
}