
import projects from '@/constants/projects';
import ProjectCard from './projectcard';


export default function ProjectList() {
  return (
    <>

    <div className="flex flex-col">
      {projects.map(project => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
    </>
  );
}