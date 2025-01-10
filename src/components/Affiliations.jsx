import './Affiliations.css';

const affiliations = [
    {
      name: "Arizona State University",
      icon: "path/to/asu-icon.svg",
      link: "",
      description: "Certification in Software Development.",
    },
    // {
    //   name: "WordPress",
    //   icon: "path/to/wordpress-icon.svg",
    //   link: "",
    //   description: "Certified WordPress Developer.",
    // },
    // {
    //   name: "Shopify",
    //   icon: "path/to/shopify-icon.svg",
    //   link: "",
    //   description: "Shopify Partner and App Developer.",
    // },
    // {
    //   name: "UX Design",
    //   icon: "path/to/hubspot-icon.svg",
    //   link: "",
    //   description: "Certified UX Design Specialist.",
    // },
    // {
    //   name: "Google Analytics",
    //   icon: "path/to/google-icon.svg",
    //   link: "",
    //   description: "Google Analytics Certified.",
    // },
    // {
    //   name: "WCAG",
    //   icon: "path/to/wcag-icon.svg",
    //   link: "",
    //   description: "WCAG Level AA Certified.",
    // },
    {
      name: "HubSpot",
      icon: "path/to/hubspot-icon.svg",
      link: "",
      description: "Certified SEO Specialist.",
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
              <img src={affiliation.icon} alt={affiliation.name} />
              <h3>{affiliation.name}</h3>
              <p>{affiliation.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }