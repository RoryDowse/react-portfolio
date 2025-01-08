export default function CTA() {
    return (
        <section className="cta">
            <h2>Ready to Get Started?</h2>
            <p>Discover Rory Dowse Web Development and take your online presence to the next level.</p>
            <button onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>Inquire Now</button>
        </section>
    );
}