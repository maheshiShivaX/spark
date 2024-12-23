import { useEffect, useState } from "react";
import { endpoints } from "../../_config";
import { post, get } from "../../_services/apiService";
import { toast } from "react-toastify";

const BookAppointment = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const [serviceTypeData, setServiceTypeData] = useState();
    const [houseStatusData, setHouseStatusData] = useState();


    const [formData, setFormData] = useState({
        appointmentId: 0,
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
        createdBy: 0,
        aboveGroundLevel: '',
        preferredDay1: '',
        time1: '',
        preferredDay2: '',
        time2: '',
        serialImagePath: '',
        productPath: '',
        houseStatusId: 1,
        file: '',
        fullfile: ''

    });




    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };

    // const handleChange = (e) => {
    //     const { name, value, type, files } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]:  (type === 'file' ? files[0] : value),

    //     }));

    // };


    useEffect(() => {
        if (houseStatusData?.length > 0 && !formData.houseStatusId) {
            // Set the first houseStatusId from houseStatusData if none is selected
            setFormData(prevState => ({
                ...prevState,
                houseStatusId: houseStatusData[0].houseStatusId,
            }));
        }
    }, [houseStatusData, formData.houseStatusId]); 


    const handleChange = (e) => {
        const { name, value, type} = e.target;

        if (type === 'radio') {
            // For radio buttons, simply set the selected value
            setFormData(prevState => ({
                ...prevState,
                [name]: value, // Store the selected value for the radio button group
            }));
        } else if (type === 'file') {
            // For file inputs, store the selected file
            setFormData(prevState => ({
                ...prevState,
                [name]: e.target.files[0], // Handle file uploads
            }));
        } else {
            // For other input types (text, date, etc.), update the value
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };


    const onBookAppointment = async (e) => {

        e.preventDefault();


        const formDataToSend = new FormData();

        // Append form data fields
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }




        try {
            const response = await post(endpoints.SaveBookAppoinment, formDataToSend);
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

const onReset=()=>{
    setFormData({
        appointmentId: 0,
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
        createdBy: 0,
        aboveGroundLevel: '',
        preferredDay1: '',
        time1: '',
        preferredDay2: '',
        time2: '',
        serialImagePath: '',
        productPath: '',
        houseStatusId: 1,
        file: '',
        fullfile: ''

    });
}


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
    const getHouseStatus = async () => {
        try {
            const response = await get(endpoints.GetHouseStatus)
            console.log(response);
            if (response.isSuccess === 200) {
                setHouseStatusData(response.data);
            } else {
                setError("Failed to fetch Service Type");
            }
        } catch (error) {
            setError("Please try again later.");
        } finally {
            setLoading(false);
        }
    };




    useEffect(() => {
        getServiceType();
        getHouseStatus();
    }, []);


    return (

        <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel"
            aria-labelledby="v-pills-profile-tab" tabIndex="0">
            <div className="from_hedding">
                <h2>Book Appointment</h2>
            </div>
            {/* <div className="close_btn" onClick={() => setShowAppointmentSidebar(false)}>
                <i className="fa-solid fa-xmark"></i>
            </div> */}
            <form onSubmit={onBookAppointment}>
                <div className="row form_data">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="message">First Name*</label>
                            <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="message">Last Name</label>
                            <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="message">Email Address</label>
                            <input type="text" name="emailId" id="emailId" className="form-control" placeholder="Email Id" required value={formData.emailId} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="message">Phone Number</label>
                            <input type="text" name="contactNo" id="contactNo" className="form-control" placeholder="Phone Number" value={formData.contactNo} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="message">Above Ground Level Sqft*</label>

                            <input type="text" name="aboveGroundLevel" id="aboveGroundLevel" className="form-control" placeholder="Above Ground Level Sqft*" value={formData.aboveGroundLevel} onChange={handleChange} />

                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="message">Type of Service Needed</label>
                            <select name="serviceId" id="serviceId" className="form-control" value={formData.serviceId} onChange={handleChange} required >
                                <option value="0" className="option">Select Service Type</option>
                                {serviceTypeData?.map((item, i) => (
                                    <option key={item.serviceId} value={item.serviceId} className="option">{item?.serviceName}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="Preferred Day #1">Preferred Day #1</label>

                            <input type="date" name="preferredDay1" id="preferredDay1" className="form-control" placeholder="Preferred Day #1" value={formData.preferredDay1} onChange={handleChange} />

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="Time #1">Time #1</label>

                            <input type="time" name="time1" id="time1" className="form-control" placeholder="Time #1" value={formData.time1} onChange={handleChange} />

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="Preferred Day #1">Preferred Day #2</label>
                            <input type="date" name="preferredDay2" id="preferredDay2" className="form-control" placeholder="Preferred Day #2" value={formData.preferredDay2} onChange={handleChange} />

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="Time #1">Time #2</label>
                            <input type="time" name="time2" id="time2" className="form-control" placeholder="Time #2" value={formData.time2} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="note_wepper">
                        <p>(Select 2 different days and times that you would prefer and we will do our best
                            to
                            accomodate your request. Our experts will contact you shortly)</p>

                        <hr />
                        <h2><strong>Upload Images</strong></h2>
                        <div className="uplod_data">
                            <p> Model Serial Image</p>
                            <label className="filelabel">Upload Image


                                <input type="file" className="form-control" id="file" name="file" accept="image/png, image/jpeg" onChange={handleChange} />


                            </label>
                        </div>

                        <div className="uplod_data">
                            <p>Area around  - Take Photo 5ft Back</p>
                            <label className="filelabel">Upload Image

                                <input type="file" className="form-control" id="fullfile" name="fullfile" accept="image/png, image/jpeg" onChange={handleChange} />

                            </label>
                        </div>
                        <div className="checkboxes_wepper">
                            <h2><strong>House Status*</strong></h2>
                            <div className="checkboxes__row">
                                {houseStatusData?.map((item) => (
                                    <div
                                        className={`radio_buttons__item ${formData.houseStatusId == item.houseStatusId }`} // Conditionally apply the 'active' class
                                        key={item.houseStatusId}
                                    >
                                        {/* <label className="radio style-c"> */}
                                            <input
                                                type="radio"
                                                name="houseStatusId" // All radio buttons in the same group should have the same name
                                                value={item.houseStatusId} // The value is the ID of the house status
                                                checked={formData.houseStatusId == item.houseStatusId} // Check if this radio button is selected
                                                onChange={handleChange} // Handle change when a radio button is clicked
                                            />
                                            <div className="radio__checkmark"></div>
                                            <div className="radio__body">{item?.statusName}</div>
                                     
                                    </div>
                                ))}




                                {/* <div className="checkboxes__item">
                                    <label className="checkbox style-c">
                                        <input type="checkbox" />
                                        <div className="checkbox__checkmark"></div>
                                        <div className="checkbox__body">Vacant</div>
                                    </label>
                                </div>
                                <div className="checkboxes__item">
                                    <label className="checkbox style-c">
                                        <input type="checkbox" />
                                        <div className="checkbox__checkmark"></div>
                                        <div className="checkbox__body">Occupied</div>
                                    </label>
                                </div>
                                <div className="checkboxes__item">
                                    <label className="checkbox style-c">
                                        <input type="checkbox" />
                                        <div className="checkbox__checkmark"></div>
                                        <div className="checkbox__body">Attic</div>
                                    </label>
                                </div>
                                <div className="checkboxes__item">
                                    <label className="checkbox style-c">
                                        <input type="checkbox" />
                                        <div className="checkbox__checkmark"></div>
                                        <div className="checkbox__body">Crawlspace</div>
                                    </label>
                                </div>
                                <div className="checkboxes__item">
                                    <label className="checkbox style-c">
                                        <input type="checkbox" />
                                        <div className="checkbox__checkmark"></div>
                                        <div className="checkbox__body">Mechanical</div>
                                    </label>
                                </div> */}
                            </div>
                        </div>
                        <div className="street_address_wepper row">

                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="Street Address*">Street Address*</label>
                                    <input type="text" name="streetAddress" id="streetAddress" className="form-control" placeholder="Street Address" required value={formData.streetAddress} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="Zip Code">Zip Code</label>
                                    <input type="text" name="zipcode" id="zipcode" className="form-control" placeholder="Zip Code" value={formData.zipcode} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="City">City</label>
                                    <input type="text" name="city" id="city" className="form-control" placeholder="City" value={formData.city} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="City">State</label>
                                    <input type="text" name="state" id="state" className="form-control" placeholder="State" value={formData.state} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="City">How did you hear about us?</label>
                                    <input type="text" name="referralSource" id="referralSource" className="form-control" placeholder="How did you hear about us?" value={formData.referralSource} onChange={handleChange} />

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
                                <button type="submit" className="all_sumbit_button" >SUBMIT NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default BookAppointment;