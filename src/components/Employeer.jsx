import { Link } from 'react-router-dom'; 

export default function ProspectiveEmployer() {
  return (
    <section className="prospective-employer">
      <h2>Prospective Employer?</h2>
      <p>
        If you&apos;re looking for a dedicated and experienced developer to join your team, I would love to connect! 
        Please visit my <Link to="/resume">Resume</Link> page to learn more about my skills, qualifications, and career journey.
      </p>
      <button>
        <Link to="/resume" style={{ textDecoration: 'none', color: 'inherit' }}>View My Resume</Link>
      </button>
    </section>
  );
}
