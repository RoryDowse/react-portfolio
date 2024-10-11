import './AboutMe.css';

export default function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me-content">
                <img
                src="./assets/rory-dowse-headshot.webp"
                alt="Rory Dowse"
                className="about-me-photo"
                />
                <div className="about-me-bio">
                    <h2>About Me</h2>
                    <p><span className="first-letter">S</span>ince building my first website on Yahoo Geocities in the mid-2000s, I&apos;ve been captivated by the power of technology to create progress in incredible ways. My curiosity grew deeper when I explored the ambitious, forward-looking features of Windows &quot;Longhorn&quot;, sparking my passion for innovation and the transformative potential of software engineering.</p>
                    <p>With extensive experience as a front-end developer, I specialize in creating dynamic and responsive websites and applications using modern technologies like React, APIs, JavaScript (ES6+), HTML5, and CSS3. My work emphasizes performance optimization and delivering seamless user experiences, bridging creativity with cutting-edge functionality.</p>
                    <p>After completing a Master&apos;s Degree in the creative arts, I designed and implemented a comprehensive learning platform, connecting a global community of tutors and students with engaging, interactive tools. Currently, I&apos;m expanding my skill set at Arizona State University&apos;s Software Development Bootcamp, where I&apos;m diving deeper into NoSQL databases, Python, and Testing. Outside of the bootcamp, I am furthering my knowledge in Java.</p>
                    <p>My projects span diverse applications, from business landing pages to unique tools like a keyboard app, metronome, and bespoke finance calculators. I also lead a weekly study group, incorporating Agile Scrum principles to foster collaboration, solve complex problems, and achieve collective success. Integrity, inclusivity, and team empowerment are central to my approach, ensuring we develop and ship high-quality software that resonates with users.</p>
                    <p>Let&apos;s connect and discuss how my expertise in front-end development, Agile methodologies, and innovative problem-solving can contribute to your team&apos;s success in delivering exceptional user experiences.</p>
                </div>
            </div>
        </section>
    );
}