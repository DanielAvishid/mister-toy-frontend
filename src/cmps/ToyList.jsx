import { Link } from "react-router-dom";
import { ToyPreview } from "./ToyPreview";

export function ToyList({ user, toys, onRemoveToy }) {
    return (
        <section className="toy-list-container">
            {user && user.isAdmin && <Link to='/toy/edit'><button className="add-toy-btn">Add Toy</button></Link>}
            <ul className="toy-list clean-list grid">
                {toys.map(toy =>
                    <li className="toy-item" key={toy._id}>
                        <ToyPreview user={user} toy={toy} onRemoveToy={onRemoveToy} />
                    </li>
                )}
            </ul>
        </section>
    )
}