import { Helmet } from 'react-helmet';
import './AboutMe.css';

export default function AboutMe() {
    return (
        <section className="about-me">
            <Helmet>
                <title>About Me | Rory Dowse Dev</title>
                <link rel="canonical" href="https://rorydowsedev.com/about-me" />
                <meta name="description" content="Learn more about Rory Dowse, a forward-thinking Software Engineer specializing in the MERN stack. Contact Rory today!" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Rory Dowse",
                        "url": "https://rorydowsedev.com",
                        "jobTitle": "Software Engineer",
                        "sameAs": [
                            "https://www.linkedin.com/in/rorydowse",
                            "https://github.com/rorydowse"
                        ]
                    }
                    `}
                </script>
            </Helmet>
            <div className="about-me-content">
                <img
                src="./assets/rory-dowse-headshot.webp"
                alt="Headshot of Rory Dowse"
                className="about-me-photo"
                />
                <div className="about-me-bio">
                    <h2>About Me</h2>
                    <p><span className="first-letter">S</span>ince building my first website on Yahoo Geocities in the mid-2000s, I&apos;ve been captivated by the power of technology to create progress in incredible ways. My curiosity grew deeper when I explored the ambitious, forward-looking features of Windows &quot;Longhorn,&quot; sparking my passion for innovation and the transformative potential of software engineering.</p>
                    <p>With extensive experience as a front-end developer, I specialize in creating dynamic and responsive websites and applications using modern technologies like React, APIs, JavaScript (ES6+), HTML5, and CSS3. Proficient in the MERN stack, my work emphasizes performance optimization and delivering seamless user experiences, bridging creativity with cutting-edge functionality.</p>
                    <p>After completing a Master&apos;s Degree in the creative arts, I designed and implemented a comprehensive education platform, connecting a global community of tutors and students with engaging, interactive tools. I recently expanded my skill set at Arizona State University (ASU), where I delved deeper into NoSQL databases, Python, and Testing, having graduated in November 2024 with an &quot;A&quot; Grade (98%).</p>
                    <p>My projects span diverse applications, from business landing pages to unique tools like educational apps and bespoke finance calculators. I also lead a weekly coding group, incorporate Agile Scrum principles to foster collaboration, and strive to achieve collective success. Integrity, inclusivity, and team empowerment are central to my approach, ensuring we develop and ship high-quality software that resonates with users.</p>
                    <p>Let&apos;s connect and discuss how my expertise as a React front-end developer, experience with Agile methodologies, and passion for innovative problem-solving can contribute to your team&apos;s success in delivering exceptional user experiences.</p>
                </div>
            </div>
        </section>
    );
}