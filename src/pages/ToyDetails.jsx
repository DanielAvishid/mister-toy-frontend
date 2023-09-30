import { useNavigate, useParams } from "react-router-dom"
import { toyService } from "../services/toy.service"
import { useEffect, useState } from "react"
import toyUrl from '../assets/img/toy-img.png'

export function ToyDetails() {

    const [count, setCount] = useState(1)
    const [toy, setToy] = useState(null)
    const { toyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadToy()
    }, [toyId])

    async function loadToy() {
        try {
            const toy = await toyService.getById(toyId)
            setToy(toy)
        } catch (err) {
            console.log('Had issues in toy details', err)
            console.log('ShowErrorMsg')
            navigate('/toy')
        }
    }

    if (!toy) return <span></span>
    return (
        <section className="toy-details-container main-layout">
            <div className="toy-details flex gap40 full">
                <div className="img-container">
                    <img src={toyUrl} alt="" />
                </div>
                <div className="details-container">
                    <h2>{toy.name}</h2>
                    <div className="labels-container">
                        {toy.labels.map(label =>
                            <span key={label}>{label}</span>
                        )}
                    </div>
                    <hr />
                    <h3>${toy.price}</h3>
                    <hr />
                    <div>
                        {toy.inStock && <span>In stock</span>}
                        {!toy.inStock && <span>Out of stock</span>}
                    </div>
                    <div>
                        <h3>Counter</h3>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}