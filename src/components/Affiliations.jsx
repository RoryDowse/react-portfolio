import asuLogo from '../assets/asu-logo.webp';
import hubspotLogo from '../assets/hubspot-logo.webp';
import './Affiliations.css';

const affiliations = [
    {
      name: "Arizona State University",
      icon: asuLogo,
      link: "",
      description: "Certified Software Developer",
    },
    // {
    //   name: "WordPress",
    //   icon: "path/to/wordpress-icon.svg",
    //   link: "",
    //   description: "Certified WordPress Developer",
    // },
    // {
    //   name: "Shopify",
    //   icon: "path/to/shopify-icon.svg",
    //   link: "",
    //   description: "Shopify Partner and App Developer",
    // },
    // {
    //   name: "UX Design",
    //   icon: "path/to/hubspot-icon.svg",
    //   link: "",
    //   description: "Certified UX Design Specialist",
    // },
    // {
    //   name: "Google Analytics",
    //   icon: "path/to/google-icon.svg",
    //   link: "",
    //   description: "Google Analytics Certified",
    // },
    // {
    //   name: "WCAG",
    //   icon: "path/to/wcag-icon.svg",
    //   link: "",
    //   description: "WCAG Level AA Certified",
    // },
    {
      name: "HubSpot",
      icon: hubspotLogo,
      link: "",
      description: "Certified SEO Specialist",
    },
    // {
    //   name: "Ahrefs",
    //   icon: "path/to/ahfrefs-icon.svg",
    //   link: "",
    //   description: "Ahrefs Advanced SEO Certified.",
    // },
  ];
  
  export default function Affiliations() {
    return (
      <section className="affiliations">
        <h2>Affiliations</h2>
        <div className="affiliations-container">
          {affiliations.map((affiliation, index) => (
            <div key={index} className="affiliation">
              <img src={affiliation.icon} alt={affiliation.name} className="icon" />
              <h3>
                {affiliation.link ? (
                  <a href={affiliation.link} target="_blank" rel="noopener noreferrer">
                    {affiliation.name}
                  </a>
                ) : (
                  affiliation.name
                )}
              </h3>
              <p>{affiliation.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  