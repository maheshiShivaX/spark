import Aboutus from "../Shared/AboutUs";
import Banner from "./Banner";
import BreatheEasy from "./BreatheEasy";
import CompanyHighlights from "./CompanyHighlights";
import ConnectWithUs from "./ConnectWithUs";
import CustomerFeedback from "../Shared/CustomerFeedback";
import FAQs from "../Shared/FAQs";
import Layout from "../Shared/Layout";
import OurHVACService from "./OurHVACService";
import QualityBrands from "./QualityBrands";
import WhyChooseUs from "./WhyChooseUs";
const Home = () => {



   


    return (
        <Layout>

            <Banner />
            <Aboutus />
            <CompanyHighlights />
            <BreatheEasy />
            <OurHVACService />
            <WhyChooseUs />
            <ConnectWithUs />
            <QualityBrands />
            <FAQs />
            <CustomerFeedback />
        </Layout>
        
    )
}

export default Home;