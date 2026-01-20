import React from "react";

function Contact () {
    return(
        <div className="min-vh-100 bg-dark text-white" style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
            style={{ paddingTop: '8rem' }}
        }}>
            <section className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">

                        <h1 className="display-2 fw-bold mb-3 
                        text-center">Reach out to me</h1>
                        <p>Open to collaboration, freelancing and job interviews</p>

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
                                        className="form-control text-light">Email</label>
                                        <input 
                                        type="email"
                                        id="email"
                                        className="form-control form-control text-light"
                                        placeholder="your.email@example.com"
                                        required
                                        />
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}