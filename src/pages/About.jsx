import { GoogleMap } from "../cmps/GoogleMap";

export function About() {
    return (
        <section className="about-container main-layout">
            <section className="about full flex space-between">
                <section>
                    <h2>About Us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam neque tempore ab accusamus, iure esse voluptatem nobis debitis, animi deserunt molestias? Quibusdam vero nam nisi. Non voluptas beatae mollitia quod.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam neque tempore ab accusamus, iure esse voluptatem nobis debitis, animi deserunt molestias? Quibusdam vero nam nisi. Non voluptas beatae mollitia quod.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam neque tempore ab accusamus, iure esse voluptatem nobis debitis, animi deserunt molestias? Quibusdam vero nam nisi. Non voluptas beatae mollitia quod.</p>
                </section>
                <GoogleMap />
            </section>
        </section>
    )
}