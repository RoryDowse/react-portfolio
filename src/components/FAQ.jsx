export default function FAQ() {
    return (
        <section className="faq">
          <h2>FAQ</h2>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What services do you offer?
                  </button>
                </h3>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    I offer a wide range of web development services including front-end and back-end development, responsive design, e-commerce solutions, website maintenance, and more.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How long does it take to build a website?
                  </button>
                </h3>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    The timeline for building a website varies depending on the complexity of the project. Generally, a simple website takes 4-6 weeks, while more complex websites or e-commerce solutions can take several months.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What technologies do you use?
                  </button>
                </h3>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    I use a range of modern web development technologies, including HTML5, CSS3, JavaScript, React, Node.js, and various CMS platforms like WordPress and Shopify.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Do you provide ongoing maintenance and support?
                  </button>
                </h3>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, I offer ongoing maintenance and support for websites, including updates, bug fixes, and performance optimization to ensure your site runs smoothly over time.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    How much does a website cost?
                  </button>
                </h3>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    The cost of building a website depends on the scope and complexity of the project. I offer custom quotes based on your specific needs. Contact me for a free consultation and estimate.
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
}