import React from 'react';

function ProjectCard ({
    title,
    description,
    technologies,
    githublink,
    livelink,
    imageurl
}) {
    return (
        <div className="card bg-dark border-secondary h-100">
            { imageurl && (
                <img 
                src={imageurl}
                className="card-img-top"
                alt={title}
                style={{ height: '200px', objectFit: 'cover'}}
                />
            )}

            <div className="card-body d-flex flex-column">
                <h3 className="card-title 
                text-primary mb-3">{title}</h3>
                <p className="card-text text-light mb-4">
                    {description}</p>
                    {technologies && technologies.length > 0 && (
                        <div className="mb-4">
                            <h6 className="text-secondary mb-2">Technologies:</h6>
                            <div className="d-flex flex-wrap gap-2">
                                {technologies.map((tech, index) => (
                                    <span
                                    key={index}
                                    className="badge bg-primary"
                                    >{tech}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-auto d-flex gap-2 flex-wrap">
                        {githublink && (
                            
                              href={githublink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline-primary btn-sm">
                                💻 GitHub
                              </a>
                        )}

                        {livelink && (
                            
                               href={livelink}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="btn btn-outline-primary btn-sm">
                                🚀 Live Demo
                               </a>
                        )}
                    </div>
                
            </div>
        </div>
    )
}

export default ProjectCard;