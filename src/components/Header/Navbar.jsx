import './Navbar.css';

export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          {/* Toggle button to navbar for mobile devices */}
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon custom-navbar-toggler-icon"></span>
          </button>
          {/* Collapsible navbar content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 custom-nav-list">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  