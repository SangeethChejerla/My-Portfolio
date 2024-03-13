import ProjectList from "@/components/myprojects/project-card";
export const metadata = {
    title: 'Projects',
    description: 'Explore my latest projects where I have utilized various technologies to build innovative and impactful solutions. These projects showcase my skills and my commitment to solving problems and creating value in the tech industry.',
};
export default function projects(){

    return(
        <>
        <div className="text-center">
        <h1 className="inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636]
             to-[#FFFFFF] bg-[200%_auto] text-6xl text-center text-transparent
              font-extrabold bg-clip-text mb-8">Projects</h1>
        <ProjectList />
        </div>
        </>
    )
}
