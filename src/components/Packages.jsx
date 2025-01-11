import './Packages.css';

const packages = [
    {
      name: "Enterprise Package",
      description: "Tailored solutions for large-scale projects.",
      features: [
        "Unlimited pages",
        "Custom applications",
        "AI integration",
      ],
      cta: "Let's discuss your needs:",
    },
    {
      name: "Professional Package",
      description: "Ideal for growing businesses needing advanced features.",
      features: [
        "Custom 10-page website",
        "Advanced SEO optimization",
        "eCommerce integration",
      ],
      cta: "Upgrade your business today:",
    },
    {
      name: "Starter Package",
      description: "Perfect for small businesses and personal projects.",
      features: [
        "Custom 5-page website",
        "Responsive design",
        "Basic SEO optimization",
      ],
      cta: "Contact us to get started:",
    },
  ];
  
  export default function renderPackages() {
    return (
      <section className="packages">
        <h2>Packages</h2>
        <div className="packages-container">
          {packages.map((showPackage, index) => (
            <div key={index} className="package">
              <h3>{showPackage.name}</h3>
              <p className="description">{showPackage.description}</p>
              <ul>
                {showPackage.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className="cta-text">{showPackage.cta}</p>
              <button>Inquire Now</button>
            </div>
          ))}
        </div>
      </section>
    );
  }