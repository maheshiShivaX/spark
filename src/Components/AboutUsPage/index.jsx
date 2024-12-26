import Layout from "../Shared/Layout";
import BannerAbout from "./BannerAbout";
import Aboutus from "../Shared/AboutUs";
import WhyChooseUsAboutPage from "./WhyChooseUsAboutPage";
import WhySparksHeating from "./WhySparksHeating";
import CustomerFeedback from "../Shared/CustomerFeedback";
import FAQs from "../Shared/FAQs";
import ScheduleYourService from "../Shared/ScheduleYourService";

const AboutUsPage = ()=>{
return(
    <Layout>
        <BannerAbout/>
        <Aboutus/>
        <WhyChooseUsAboutPage/>
        <WhySparksHeating/>
        <CustomerFeedback/>
        <FAQs/>
        <ScheduleYourService/>
        
    </Layout>
)
}

export default AboutUsPage;