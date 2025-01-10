import './Hero.css';

export default function Hero() {
    return (
        <section className="hero d-flex flex-column align-items-center justify-content-center text-center">
            <div className="hero-content">
            <img
                src="./assets/rory-dowse-headshot.webp"
                alt="Headshot of Rory Dowse"
                className="about-me-photo"
                />
                <h1 className="hero-title display-4">Rory Dowse Web Development</h1>
                <h2 className="hero-subtitle">Web Developer in Deer Valley, Phoenix, AZ</h2>
                <h3 className="hero-tagline text-muted">
                    Website Design and SEO Services Tailored to Your Business Needs
                </h3>
                <p className="hero-text">Get your free consultation today:</p>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
                >
                    Inquire Now
                </button>
            </div>
        </section>
    );
}
