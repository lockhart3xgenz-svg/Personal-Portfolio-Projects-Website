import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark text-white border-top border-secondary">

            <div className="container py-5">
                <div className="row g-4">

                    {/* Brand */}
                    <div className="col-md-4">
                        <h5 className="text-primary mb-3">Howard</h5>
                        <p className="mb-0">
                            <small>Based in Bronkhorstspruit</small>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4">
                        <h5 className="text-light mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-secondary text-decoration-none">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="text-secondary text-decoration-none">
                                    About
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/projects" className="text-secondary text-decoration-none">
                                    Projects
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contact" className="text-secondary text-decoration-none">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="col-md-4">
                        <h5 className="text-light mb-3">Connect</h5>
                        <div className="d-flex gap-3">
                            <a
                                href="https://github.com/lockhart3xgenz-svg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary text-decoration-none"
                                aria-label="GitHub"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-secondary text-decoration-none"
                                aria-label="Pnet"
                            >
                                Pnet
                            </a>

                            <a
                                href="mailto:Lockhart3xgenz@gmail.com"
                                className="text-secondary text-decoration-none"
                                aria-label="Email"
                            >
                                Email
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-top border-secondary">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                            <small className="text-secondary">
                                © {new Date().getFullYear()} Lockhart3X. All rights reserved.
                            </small>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <small className="text-secondary">
                                Built with React and Bootstrap
                            </small>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
