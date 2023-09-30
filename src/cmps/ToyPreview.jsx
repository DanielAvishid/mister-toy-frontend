import { Link, useNavigate } from 'react-router-dom'
import toyUrl from '../assets/img/toy-img.png'
import { FiTrash2, FiEdit } from "react-icons/fi";

export function ToyPreview({ user, toy, onRemoveToy }) {

    const navigate = useNavigate()

    return (
        <article className='toy-preview'>
            <div className='img-container' onClick={() => navigate(`/toy/${toy._id}`)}>
                {toy.inStock && <span className='stock in'>In stock</span>}
                {!toy.inStock && <span className='stock out'>Out of stock</span>}
                <img className='toy-img' src={toyUrl} alt="" />
            </div>
            <div className='toy-name-price flex space-between' onClick={() => navigate(`/toy/${toy._id}`)}>
                <h4>{toy.name}</h4>
                <h4>${toy.price}</h4>
            </div>
            <div className='toy-labels' onClick={() => navigate(`/toy/${toy._id}`)}>
                {toy.labels.map(label =>
                    <span key={label}>{label}</span>
                )}
            </div>
            <div className='admin-btn-container flex align-center space-between'>
                <button className='add-cart-btn'>Add to cart</button>
                {user && user.isAdmin && < div >
                    <Link to={`/toy/edit/${toy._id}`}><button className='icon-btn'><FiEdit /></button></Link>
                    <button onClick={() => onRemoveToy(toy._id)} className='icon-btn'><FiTrash2 /></button>
                </div>}
            </div>
        </article >
    )
}