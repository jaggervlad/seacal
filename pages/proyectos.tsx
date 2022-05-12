import { MainLayout } from 'components/layouts';
import { ProjectCard, projects } from 'components/projects';
import { NextPage } from 'next';

const ProjectsPage: NextPage = () => {
  return (
    <MainLayout title="Proyectos - Sebastian Acosta">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-start justify-center pb-16">
        <h1 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-5xl">
          Proyectos Personales
        </h1>

        <p className="mb-4 text-slate-600 dark:text-slate-400">
          Aca les comparto algunos de los proyectos que he creado a lo largo de
          mi aprendizaje. Pueden ver el codigo en mi github y la demo.
        </p>

        <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-2 gap-y-6 lg:max-w-none">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
