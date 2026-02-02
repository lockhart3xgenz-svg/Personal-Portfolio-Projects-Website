import React from "react";

function Contact () {
    return(
        <div className="min-vh-100 bg-dark text-white" style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
            paddingTop: '8rem'
        }}>
            <section className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">

                        <h1 className="display-2 fw-bold mb-3 
                        text-center">Reach out to me</h1>
                        <p className="text-center mb-4">Open to collaboration, freelancing and job interviews</p>

                        <div className="card bg-dark border-secondary">
                            <div className="card-body p-4">
                                <form>
                                    
                                    <div className="mb-4">
                                        <label htmlFor="name" 
                                        className="form-label text-light"
                                        >Name</label>
                                        <input
                                        type="text"
                                        className="form-control bg-dark text-light
                                        border-secondary"
                                        id="name"
                                        placeholder="Your name"
                                        required 
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="email" 
                                        className="form-label text-light">Email</label>
                                        <input 
                                        type="email"
                                        id="email"
                                        className="form-control bg-dark text-light border-secondary"
                                        placeholder="your.email@example.com"
                                        required
                                        />
                                    </div>

                                   <div className="mb-4">
                                    <label htmlFor="subject" className="text-light 
                                    form-label">Subject</label>
                                    <input 
                                    type="text"
                                    className="text-light form-control bg-dark border-secondary"
                                    id="subject"
                                    placeholder="Enter Email subject"
                                    required
                                    />
                                   </div>

                                   <div className="mb-4">
                                    <label htmlFor="message" 
                                    className="form-label text-light">Message</label>
                                    <textarea
                                    className="form-control bg-dark text-light border-secondary"
                                    placeholder="Enter your message here..."
                                    id="message"
                                    rows="5"
                                    required
                                    ></textarea>
                                   </div>

                                   <button
                                   type="submit"
                                   className="btn btn-primary w-100 fw-semibold"
                                   >Send Message</button>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
    }
    
    export default Contact;