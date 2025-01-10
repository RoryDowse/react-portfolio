import { Link } from 'react-router-dom';
import './Employer.css';

export default function ProspectiveEmployer() {
  return (
    <section className="prospective-employer container text-center py-5">
      <h2 className="display-5 text-white">Prospective Employer?</h2>
      <p className="lead mb-4 text-white">
        If you&apos;re looking for a dedicated and experienced developer to join your team, I would love to connect!
      </p>
      <Link to="/resume" className="btn btn-secondary btn-lg mt-3">View My Resume</Link>
    </section>
  );
}
