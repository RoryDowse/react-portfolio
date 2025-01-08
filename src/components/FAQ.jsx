export default function FAQ() {
    return (
        <section className="faq">
            <h2>FAQ</h2>
            <div className="accordion" id="faqAccordion">

                {/* Question 1 */}
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            // Bootstrap will add the "show" class to this button when the accordion is opened
                            data-bs-toggle="collapse"
                            // Specify the ID of the div that will be shown when the accordion is opened
                            data-bs-target="#collapseOne"
                            // The value will change when the accordion is used to assist screen readers
                            aria-expanded="true"
                            // Links the button to the ID of the div that will be shown when the accordion is opened
                            aria-controls="collapseOne"
                        >
                            How can your web development services help my business?
                        </button>
                    </h3>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            My web development services enhance your business by creating modern, user-friendly websites that improve online visibility, streamline operations, and provide a seamless user experience.
                        </div>
                    </div>
                </div>

                {/* Question 2 */}
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
                            What is your process for building a website?
                        </button>
                    </h3>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            My process includes consultation, planning, design, development, testing, and deployment. I ensure constant communication and iteration based on your feedback.
                        </div>
                    </div>
                </div>

                {/* Question 3 */}
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
                            Do you offer maintenance and support for existing websites?
                        </button>
                    </h3>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Yes, I provide ongoing maintenance and support services, including updates, bug fixes, and performance optimizations, ensuring your website stays secure and functional.
                        </div>
                    </div>
                </div>

                {/* Question 4 */}
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
                            How long does it take to complete a website?
                        </button>
                    </h3>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            The timeline varies based on complexity. A basic website can take 4-6 weeks, while larger, more complex projects might take several months.
                        </div>
                    </div>
                </div>

                {/* Question 5 */}
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
                            How much does website design and development cost?
                        </button>
                    </h3>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Costs depend on your requirements. I provide custom quotes based on scope and features. Contact me for a free consultation.
                        </div>
                    </div>
                </div>

                {/* Question 6 */}
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingSix">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                        >
                            How does SEO work and why is it important?
                        </button>
                    </h3>
                    <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            SEO improves your website's visibility on search engines, driving organic traffic and increasing customer engagement. I implement best practices to ensure your site ranks well.
                        </div>
                    </div>
                </div>

                {/* Question 7 */}
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingSeven">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                        >
                            How do eCommerce stores work and are they profitable?
                        </button>
                    </h3>
                    <div
                        id="collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            eCommerce stores provide an online platform for businesses to sell products. With the right strategy and execution, they can be highly profitable by reaching a global audience.
                        </div>
                    </div>
                </div>

                {/* Question 8 */}
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingEight">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                        >
                            What is web accessibility and why is it important?
                        </button>
                    </h3>
                    <div
                        id="collapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Web accessibility ensures your website is usable by people with disabilities, broadening your audience and adhering to legal requirements and ethical standards.
                        </div>
                    </div>
                </div>

                {/* Question 9 */}
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingNine">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseNine"
                            aria-expanded="false"
                            aria-controls="collapseNine"
                        >
                            What is AI integration and will it take over the world?
                        </button>
                    </h3>
                    <div
                        id="collapseNine"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingNine"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            AI integration enhances business processes by automating tasks and improving decision-making. It complements human efforts and is not a threat when used responsibly.
                        </div>
                    </div>
                </div>

                {/* Question 10 */}
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTen">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTen"
                            aria-expanded="false"
                            aria-controls="collapseTen"
                        >
                            What kind of support is available after the project is completed?
                        </button>
                    </h3>
                    <div
                        id="collapseTen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTen"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            I offer ongoing support, including updates, troubleshooting, and optimization, to ensure your website continues to meet your needs post-launch.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}