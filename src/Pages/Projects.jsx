import React, { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/lockhart3xgenz-svg/repos")
            .then((res) => res.json())
            .then((data) => {
                const featured = data.filter((repo) => !repo.fork);
                setProjects(featured);
                setLoading(false);
            })
            .catch((err) => {
                console.error("GitHub fetch failed:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-vh-100 bg-dark text-white d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1 className="display-1 text-primary">Projects</h1>
                    <p className="fs-4">Loading Projects...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-vh-100 bg-dark text-white py-5">
            <div className="container">
                <h1 className="text-center text-primary mb-5">Projects</h1>

                <div className="row g-4">
                    {projects.map((repo) => (
                        <div className="col-md-4" key={repo.id}>
                            <ProjectCard
                                title={repo.name}
                                description={repo.description || "No description provided"}
                                technologies={repo.topics || []}
                                githublink={repo.html_url}
                                livelink={repo.homepage}
                                imageurl={null}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Projects;
