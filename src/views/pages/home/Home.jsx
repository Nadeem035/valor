import { IMG } from "../../../config/app";

function Home() {
    return (
        <div className="py-3">
            <div className="container px-0">
                <div className="row g-0">
                    <div className="col-md-12 text-center mb-2">
                        <img src={IMG+"flag.png"} alt="Flag" className="flag-image" />
                    </div>

                    <div className="col-md-12 text-center contact-info">
                        <h6 className="mb-1">
                            <a href="tel:8554764911" className="me-2">855.476.4911</a> 
                            Emergency
                        </h6>
                        <h6 className="mb-1">
                            <a href="mailto:info@valortechnicalcleaning.com">info@valortechnicalcleaning.com</a> 
                        </h6>
                    </div>

                    <div className="col-md-12 text-center">
                        <div className="text-bg-blue p-2">
                            <h4 className="text-white ">Crime Scene Cleanup <br /> Experts You Can Trust</h4>
                        </div>
                    </div>
                    
                    <div className="col-md-12 text-center">
                        <div className="">
                            <img src={IMG+"stressed-women.png"} alt="Stressed Women" className="women-stress" />
                        </div>
                        
                        <div className="d-flex flex-wrap flex-row forensic">
                            <div className="col-6">
                                <img src={IMG+"forensic-man.png"} alt="Forensic Man" className="forensic-man" />
                            </div>
                            <div className="col-6 align-self-center">
                                <h6>24/7/365</h6>
                                <h6>Emergency Clean Up</h6>
                                <br />
                                <h6>Homicide, Suicide,</h6>
                                <h6>Unattended Death,</h6>
                                <h6>Decomposition,</h6>
                                <h6>Blood, and</h6>
                                <h6>Biohazard Cleanup</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <div className="text-bg-blue p-2">
                            <h3 className="text-white text-center mb-2 ">Our Crime Scene Services</h3>
                            <ul className="services">
                                <li>After Death Clean Up</li>
                                <li>Decomposition</li>
                                <li>Biohazard Remediation</li>
                                <li>Unattended Death</li>
                                <li>Crime Scene Clean Up</li>
                                <li>Hoarding Clean Up</li>
                                <li>Homicide Clean Up</li>
                                <li>Reconstruction Services</li>
                                <li>Suicide Clean Up</li>
                                <li>Board-ups</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <iframe src="https://www.youtube.com/embed/oWX3m2VehvQ" className="iframe-block" /> 
                    </div>
                    
                    
                    <div className="col-md-12">
                        <div className="p-3 listing-bottom">
                            <a download="" href="https://my.visnesscard.com/Home/GetVCF/Valor-Technical-Cleaning">
                                <div className="custom-color">
                                    <i className="me-2 fa fa-address-book"></i>
                                    <span> Add Me To Contacts </span>
                                </div>
                            </a>
                            <a target="_blank" href="tel:8554764911">
                                <div className="custom-color">
                                    <i className="me-2 fas fa-phone-square-alt"></i>
                                    <span> Emergency - Call Us Now </span>
                                </div>
                            </a>
                            <a target="_blank" href="https://valortechnicalcleaning.com/">
                                <div className="custom-color">
                                    <i className="me-2 fas fa-image"></i>
                                    <span> Visit Our Website </span>
                                </div>
                            </a>
                            <a target="_blank" href="https://valortechnicalcleaning.com/category/podcast/">
                                <div className="custom-color">
                                    <i className="me-2 fas fa-headphones"></i>
                                    <span> Valor Voice Podcast </span>
                                </div>
                            </a>
                            <a target="_blank" href="https://visnesscard.com/tips">
                                <div className="custom-color">
                                    <i className="me-2 fas fa-info-circle"></i>
                                    <span> Tips On Sharing My Card </span>
                                </div>
                            </a>
                        </div>

                    </div>
                    


                </div>
            </div>
        </div>
    );
}
  
  export default Home;