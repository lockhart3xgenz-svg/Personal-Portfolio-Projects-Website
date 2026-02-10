import { Link } from "react-router-dom";

function Home() {
    return (
        <div 
            className="min-vh-100 text-primary"
            style={{ background: 'lightblue' }}
        >
            <section 
                className="container py-5"
                style={{ paddingTop: '8rem' }}
            >
                <div className="row">
                    <div className="col-lg-10 col-xl-8">
                        <p className="text-primary fs-5 mb-3 fw-medium">
                            Hi, I'm
                        </p>
                        
                        <h1 className="display-1 fw-bold mb-4">
                            Howard
                        </h1>
                        
                        <h2 className="display-5 text-light mb-4">
                            Front-End Developer
                        </h2>
                        
                        <p className="fs-5 text-secondary mb-5 lead">
                            I design and code functional web experiences with modern technologies.
                            I prioritize clean code and problem-solving.
                        </p>
                        
                        <div className="d-flex flex-wrap gap-3">
                            <Link 
                                to="/projects" 
                                className="btn btn-primary btn-lg px-4 py-3 fw-semibold shadow"
                            >
                                View Projects
                            </Link>
                            
                            <Link 
                                to="/contact" 
                                className="btn btn-secondary btn-lg px-4 py-3 fw-semibold"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container pb-5">
                <div className="row g-4">
                    
                    <div className="col-md-6">
                        <div className="card bg-dark border-secondary h-100">
                            <div className="card-body text-center">
                                <h3 className="display-6 text-primary fw-bold mb-3">
                                    Frontend Development
                                </h3>
                                <p className="card-text text-light mb-0">
                                    React, JavaScript, Bootstrap, HTML/CSS
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card bg-dark border-secondary h-100">
                            <div className="card-body text-center">
                                <h3 className="display-6 text-primary fw-bold mb-3">
                                    Currently Learning
                                </h3>
                                <p className="card-text text-light mb-0">
                                    Back-End Development, Mobile Development and Blockchain Development
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default Home;