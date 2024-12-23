import { useEffect, useState } from "react";
import { endpoints } from "../../_config";
import { post, get } from "../../_services/apiService";
import { toast } from "react-toastify";


const ContactUs = (props) => {

console.log(props);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [serviceTypeData, setServiceTypeData] = useState();

    const [formData, setFormData] = useState({
        enquiryId: 0,
        firstName: '',
        lastName: '',
        emailId: '',
        contactNo: "",
        referralSource: "",
        additionalMsg: "",
        serviceId: 0,
        streetAddress: '',
        zipcode: '',
        landmark: '',
        city: '',
        state: "",
        isActive: true,
         createdBy: 0
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    const onContactUs = async (e) => {

        e.preventDefault();
        try {
            const response = await post(endpoints.SaveEnquiry, formData);
            if (response.isSuccess === 200) {
               
                toast.success("Enquiry submit successfully");
                onReset();
            } else {
                toast.error("Failed to submit form data");
            }
        } catch (error) {
            toast.error("Please try again later.");
        } finally {
           
        }
    };


    

    const getServiceType = async () => {
        try {
            const response = await get(endpoints.GetServiceType)
            console.log(response);
            if (response.isSuccess === 200) {
                setServiceTypeData(response.data);
            } else {
                setError("Failed to fetch Service Type");
            }
        } catch (error) {
            setError("Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const onReset=()=>{
        setFormData({
            enquiryId: 0,
            firstName: '',
            lastName: '',
            emailId: '',
            contactNo: "",
            referralSource: "",
            additionalMsg: "",
            serviceId: 0,
            streetAddress: '',
            zipcode: '',
            landmark: '',
            city: '',
            state: "",
            isActive: true,
             createdBy: 0
        });
    }
    useEffect(() => {
        getServiceType();
    }, []);

 


    return (
        <div className="tab-pane" id="v-pills-messages" role="tabpanel"
        aria-labelledby="v-pills-messages-tab" tabIndex="0">
        <div className="from_hedding">
            <h2>Contact Us</h2>
        </div>
        {/* <div className="close_btn"  onClick={()=>setShowAppointmentSidebar(false)}>
            <i className="fa-solid fa-xmark"></i>
        </div> */}
        <form onSubmit={onContactUs}> 
            <div className="row form_data">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="message">First Name*</label>
                        <input type="text" name="firstName" id="firstName" className="form-control"  placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="message">Last Name</label>
                        <input type="text" name="lastName" id="lastName" className="form-control"  placeholder="Last Name"  value={formData.lastName} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="message">Email Address</label>
                        <input type="text" name="emailId" id="emailId" className="form-control"  placeholder="Email Id" required value={formData.emailId} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="message">Phone Number</label>
                        <input type="text" name="contactNo" id="contactNo" className="form-control"  placeholder="Phone Number"  value={formData.contactNo} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="message">Type of Service Needed</label>
                        <select    name="serviceId"  id="serviceId" className="form-control"  value={formData.serviceId} onChange={handleChange}  required >
                                                            <option value="0" className="option">Select Service Type</option>
                                                            {serviceTypeData?.map((item, i) => (
                                                                <option key={item.serviceId} value={item.serviceId} className="option">{item?.serviceName}</option>
                                                            ))}
                                                        </select>

                     
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="Street Address*">Street Address*</label>
                        <input type="text" name="streetAddress" id="streetAddress" className="form-control"  placeholder="Street Address" required value={formData.streetAddress} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="Zip Code">Zip Code</label>
                        <input type="text" name="zipcode" id="zipcode" className="form-control"  placeholder="Zip Code"  value={formData.zipcode} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="City">City</label>
                        <input type="text" name="city" id="city" className="form-control"  placeholder="City"  value={formData.city} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="City">State</label>
                        <input type="text" name="state" id="state" className="form-control"  placeholder="State"  value={formData.state} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="City">How did you hear about us?</label>
                        <input type="text" name="referralSource" id="referralSource" className="form-control"  placeholder="How did you hear about us?"  value={formData.referralSource} onChange={handleChange} />
                     
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="City">Additional Message</label>
                        <textarea name="additionalMsg" id="additionalMsg" rows="4" data-name="Message" value={formData.additionalMsg} onChange={handleChange} 
                            className="form-control" required=""></textarea>
                    </div>
                </div>
                <div className="note_wepper club_member_ship_image_uplode">
                  
                    <button type="submit" className="all_sumbit_button">SUBMIT NOW</button>
                </div>
            </div>
        </form>

    </div>

    )
}

export default ContactUs;