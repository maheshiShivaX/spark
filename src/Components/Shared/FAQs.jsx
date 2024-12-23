const FAQs = () => {
    return (
        <section className="same_space pt-0">
            <div className="container">
                <div className="faq_hedding">
                    <h2>FAQs</h2>
                </div>
                <div className="faq_wepper">
                    <div className="faq_inner">
                        <h3>What are your hours of operation?</h3>
                        <p>Need help fast? We'll be there in 48 hours or less. Our office hours are 7AM to 10PM.</p>

                        <hr />
                        {/* <div className="fqs_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                                <circle cx="19.5" cy="19.5" r="19" stroke="black" />
                                <path d="M19.5 10C19.5 9.72386 19.2761 9.5 19 9.5C18.7239 9.5 18.5 9.72386 18.5 10L19.5 10ZM18.6464 30.3536C18.8417 30.5488 19.1583 30.5488 19.3536 30.3536L22.5355 27.1716C22.7308 26.9763 22.7308 26.6597 22.5355 26.4645C22.3403 26.2692 22.0237 26.2692 21.8284 26.4645L19 29.2929L16.1716 26.4645C15.9763 26.2692 15.6597 26.2692 15.4645 26.4645C15.2692 26.6597 15.2692 26.9763 15.4645 27.1716L18.6464 30.3536ZM18.5 10L18.5 30L19.5 30L19.5 10L18.5 10Z" fill="black" />
                            </svg>
                        </div> */}
                    </div>
                    <div className="faq_inner">
                        <h3>Do you offer financing options?</h3>
                        <p>As HVAC experts, we, at Sparks Heating and Air, understand that installing or replacing HVAC
                            systems in your home is hefty on your budget. We offer multiple flexible financing options. To
                            know more about the financing options, contact us and talk with our financing experts who will
                            answer all your queries and doubts.</p>
                        <hr />
                    </div>
                    <div className="faq_inner">
                        <h3>Do you service all makes and models? </h3>
                        <p>Sparks Heating and Air is able to service most makes and models of HVAC equipment</p>
                        <hr />
                    </div>
                    <div className="faq_inner">
                        <h3>How often should I have my HVAC system serviced?</h3>
                        <p>We recommend at least twice a year and that is why we offer our Exclusive Club Membership which
                            provides 2 clean and safety checks per year, discounts and much more.</p>
                        <hr />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQs;