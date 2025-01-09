export default function Welcome() {
    return (
        <section className="welcome">
            <h2>Rory Dowse Web Development</h2>
            <img src="/assets/rory-dowse-headshot.webp" alt="Rory Dowse" />
            <p>Rory Dowse, Software Engineer</p>
            <h3>Web Developer in Deer Valley, Phoenix, AZ</h3>
            <p>Expert Website Development and SEO Services Tailored to Your Business Needs</p>
            <p>Get your free consultation today:</p>
            <button onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>
            Inquire Now
            </button>
      </section>
    );
}