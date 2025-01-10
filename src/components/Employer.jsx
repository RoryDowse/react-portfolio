import { Link } from 'react-router-dom';
import './Employer.css';

export default function ProspectiveEmployer() {
  return (
    <section className="prospective-employer container text-center py-5">
      <h2 className="display-4">Prospective Employer?</h2>
      <p className="lead mb-4">
        If you&apos;re looking for a dedicated and experienced developer to join your team, I would love to connect!
      </p>
      <p className="lead mb-4">Please visit my <Link to="/resume" className="text-primary text-decoration-none">Resume</Link> page to learn more about my skills, qualifications, and career journey.
      </p>
      <Link to="/resume" className="btn btn-primary btn-lg mt-3">View My Resume</Link>
    </section>
  );
}
