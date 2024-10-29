import { PROJECTS } from "../constants";

const Experience = () => {
    return (
        <div className="p-8">
            <h2 className="my-10 text-center text-4xl font-bold text-purple-950">Projects</h2>
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                {PROJECTS.map((project, index) => (
                    <div className=" p-6 shadow-lg rounded-lg shadow-violet-400 500/50" key={index}>
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-2xl font-semibold text-purple-950  mb-2">{project.title}</h3>
                        <p className="text-purple-950 mb-4">{project.description}</p>
                        <div>
                            <h4 className="text-lg font-semibold text-purple-950  mb-2">Technology :</h4>
                            <div className="flex flex-wrap space-x-4 text-violet-700">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="mb-2">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience
