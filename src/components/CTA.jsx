import './CTA.css';

export default function CTA() {
    return (
        <section className="cta">
            <h2>Ready to Get Started?</h2>
            <p>Discover Rory Dowse Web Development and take your online presence to the next level:</p>
            <button className="btn-pulse" aria-label="Inquire Now" onClick={() => document.getElementById('inquire-now').scrollIntoView({ behavior: 'smooth' })
            }>
                Inquire Now
            </button>
        </section>
    );
}