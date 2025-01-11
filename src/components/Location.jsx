import './Location.css';

export default function Location() {
  const address = "Deer Valley, Phoenix, AZ 85027";
  const closeTo = "Deer Valley and 31st Ave.";

  return (
    <section className="map-page">
      <h2>Location</h2>
      <p>We are located in:</p>
      <p className="address">{address}</p>
      <p>Just off {closeTo}</p>
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.8792559055905!2d-112.12757588846648!3d33.68619053685849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6f5eccf1ffc1%3A0x8b02e640601a3e1b!2s22015%20N%2030th%20Ln%2C%20Phoenix%2C%20AZ%2085027!5e0!3m2!1sen!2sus!4v1736360965694!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          ></iframe>
      </div>
    </section>
  );
}