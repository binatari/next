import Image from "next/image"

const Services = () => {
    return (
        <div className="flex flex-col items-center justify-center container">
          <h2 className="text-4xl mb-10 text-slateWhite">Our Services</h2>  
          <div className="grid gap-5 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
              <div className="relative min-h-[30vh]"> <Image
              className="relative"
              src='/images/web-development.jpg'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            /> </div>
              <div className="relative min-h-[30vh]"><Image
              className="relative"
              src='/images/app-development.jpg'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            /></div>
              <div className="relative min-h-[30vh]"><Image
              className="relative"
              src='/images/product-design.jpg'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            /></div>
              <div className="relative min-h-[30vh]"><Image
              className="relative"
              src='/images/branding-service.jpg'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            /></div>
              <div className="relative min-h-[30vh]"><Image
              className="relative"
              src='/images/agile-project-management.jpg'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            /></div>
              <div className="relative min-h-[30vh]"><Image
              className="relative"
              src='/images/data-analysis.jpg'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            /></div>
          </div>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-slateWhite py-10">see more</a>
        </div>
    )
}

export default Services
