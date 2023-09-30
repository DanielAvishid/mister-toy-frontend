import heroImgUrl from '../assets/img/Hero3.jpg'

export function Home() {
    return (
        <section className="hero-container main-layout full">
            <div className="hero full">
                <img className='hero-img' src={heroImgUrl} alt="" />
                <div>
                    <button>Shop now</button>
                </div>
            </div>
        </section>
    )
}