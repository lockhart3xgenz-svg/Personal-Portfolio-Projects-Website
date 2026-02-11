function About() {
    return (
        <div className="min-vh-100 text-white py-5"
        style = {{background: 'linen'}}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">                       
                        <div className="text-center mb-5">
                            <h1 className="display-3 text-primary mb-3">About Me</h1>
                            <div className="border-bottom border-primary w-25 mx-auto mb-4"></div>
                        </div>

                        <div className="bg-secondary bg-opacity-10 rounded p-4 p-md-5">
                            <div className="mb-4">
                                <h2 className="h4 text-primary mb-3">Who I Am</h2>
                                <p className="lead">
                                    I'm Howard Tlou from Bronkhorstspruit, Pretoria. I initially studied Electrical Engineering (N1-N3), but financial constraints cut that journey short. That's when I turned to Web Development - and honestly, it felt like the right fit. I was already comfortable with computers, the education was more affordable, and the possibility of remote work opened up new opportunities.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h2 className="h4 text-primary mb-3">What I'm Doing Now</h2>
                                <p className="lead">
                                    I am constantly coding when I am not studying. Right now, I'm diving deep into Back-End Development, and I've built four projects that I'm actively maintaining and developing. I'm focused on refining these before moving on to new challenges. Once I complete my current Backend programs, I'll be expanding into Mobile and Blockchain Development.
                                </p>
                            </div>

                            <div>
                                <h2 className="h4 text-primary mb-3">My Vision</h2>
                                <p className="lead mb-0">
                                    My current focus is on growth, contributing to the tech industry as a whole, not just a single company.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;