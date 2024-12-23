import Footer from "./Footer";
import Header from "./Header";

const ThankYou = () => {
    return (
        <div>
            <Header />
            <section>
                <div className="thank_you_wepper">
                    <div className="thank_you_logo">
                        <img src="images/thank_you_logo.png" alt="" />
                        <h2>Thank you!</h2>
                        <p><strong>Thanks for considering our Services!</strong></p>
                        <p>We've sent Quote to your email for review.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ThankYou;