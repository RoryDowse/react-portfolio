import { Link } from 'react-router-dom';
import './css/Employer.css';

export default function ProspectiveEmployer() {
  return (
    <section className="prospective-employer text-center py-5">
      <h2 className="display-5" style={{ color: 'var(--accent-color)'}}>Prospective Employer?</h2>
      <p className="lead mb-4 text-white">
        If you&apos;re looking for a dedicated and experienced developer to join your team, please view my resume.
      </p>
      <Link to="/resume" className="btn btn-secondary mt-3" aria-label="View My Resume" target="_blank" rel="noopener noreferrer">View My Resume</Link>
    </section>
  );
}
