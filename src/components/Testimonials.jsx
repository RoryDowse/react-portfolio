
import './Testimonials.css';

const testimonials = [
    {
      name: "James Woodrow",
      photo: "./src/assets/james-woodrow.webp",
      role: "Small Business Owner",
      company: "James Woodrow Violin",
      feedback: "Rory delivered the finished website well ahead of schedule and most importantly I am very pleased with the end result. I am delighted to recommend Rory's expertise.",
    },
    {
      name: "Jerome Chenette",
      photo: "path/to/jerome-chenette-photo.webp",
      role: "Engineering Manager",
      company: "EdX",
      feedback: "Working with Rory was seamless. He delivered an exceptional website that exceeded our expectations.",
    },
    {
      name: "Michael Tomcal",
      photo: "path/to/michael-tomcal-photo.webp",
      role: "Senior Engineer",
      company: "American Express",
      feedback: "Rory's expertise in custom applications helped us launch a unique platform that our users love.",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img src={testimonial.photo} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
              <p className="company">{testimonial.company}</p>
              <p className="text-muted">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }