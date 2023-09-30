import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadToys, removeToyOptimistic, setFilterBy } from "../store/actions/toy.actions"
import { Link } from "react-router-dom"
import { ToyFilter } from "../cmps/ToyFilter"
import { ToyList } from "../cmps/ToyList"

export function ToyIndex() {
    const PAGE_SIZE = 12
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const user = useSelector(storeState => storeState.userModule.loggedinUser)

    useEffect(() => {
        onLoadToys(filterBy)
    }, [filterBy])

    async function onLoadToys(filterBy) {
        try {
            loadToys(filterBy)
        } catch (err) {
            console.log('ShowErrorMsg')
        }
    }

    async function onRemoveToy(toyId) {
        try {
            removeToyOptimistic(toyId)
            console.log('ShowSuccsessMsg')
        } catch (err) {
            console.log('ShowErrorMsg')
        }
    }

    function handleChange({ target }) {
        let field = target.name
        let value = target.value
        if (target.value === 'on') {
            field = 'asc'
            if (filterBy.asc === 1) value = -1
            else value = 1
        }
        setFilterBy({ ...filterBy, [field]: value })
    }

    function handlePageChange(diff) {
        if (filterBy.pageIdx === 0 && diff === -1) return
        if (toys.length < PAGE_SIZE && diff === 1) return
        setFilterBy({ ...filterBy, pageIdx: filterBy.pageIdx + diff })
    }

    return (
        <section className="toy-index main-layout">
            <main className="flex full">
                <div className="aside-container">
                    <aside>
                        <h3>Filter By</h3>
                        <ToyFilter handleChange={handleChange} filterBy={filterBy} />
                    </aside>
                </div>
                <div>
                    <ToyList user={user} toys={toys} onRemoveToy={onRemoveToy} />
                </div>
            </main>

        </section >
    )
}