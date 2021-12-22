import Image from "next/image"
const Projects = () => {
    return (
        <>
          <h2 className="my-14 text-4xl">Featured Projects</h2> 
          <div className="flex w-4/5 flex-wrap items-center justify-around">
          <div className="min-w-[40%] mb-5">
            <div className="relative min-h-[50vh] mb-5">
          <Image
              className="relative"
              src='/images/website-project.jpg'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
              objectPosition='top'
            />
            </div>
            <span className="p-5 mb-5">Rovest Website and Web App</span>
        </div> 
        <div className="min-w-[40%] mb-5">
          <div className="relative min-h-[50vh] mb-5">
          <Image
              className="relative"
              src='/images/app-project.jpg'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
              objectPosition='center'
            />
            </div>
            <span className="p-5 mb-5">Rovest Website and Web App</span>
        </div> 
        </div>
        </>
    )
}

export default Projects
