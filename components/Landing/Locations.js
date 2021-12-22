import Image from "next/image"
const Locations = () => {
    return (
        <>
         <h2 className="text-4xl text-slateWhite mb-16">Our Locations</h2>
         <div className="text-slateWhite">
            <ul className="grid-cols-1 md:grid-cols-3 grid gap-10">
                <li className="flex flex-col justify-center items-center">
                <div className="relative h-[20vh] w-[20vh] max-h-[10em] max-w-[10em] border rounded-[50%]">
                <Image
                className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />  
            </div>
            <div className="flex">
            <span>(+234)9138911913</span>
            </div>
            <div className="flex">
            <span>Block 308 DBM Plaza, Wuse Zone 1, Abuja</span>
            </div>
                </li>
                <li className="flex flex-col justify-center items-center">
                <div className="relative h-[20vh] w-[20vh] max-h-[10em] max-w-[10em] border rounded-[50%]">
                <Image
                className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />  
            </div>
            <div className="flex">
            <span>(+234)9138911913</span>
            </div>
            <div className="flex">
            <span>Block 308 DBM Plaza, Wuse Zone 1, Abuja</span>
            </div>
                </li>
                <li className="flex flex-col justify-center items-center">
                    <div className="relative h-[20vh] w-[20vh] max-h-[10em] max-w-[10em] border rounded-[50%]">
                <Image
                className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />  
            </div>
            <div className="flex">
            <span>(+234)9138911913</span>
            </div>
            <div className="flex">
            <span>Block 308 DBM Plaza, Wuse Zone 1, Abuja</span>
            </div>
                </li>
            </ul>
             </div> 
        </>
    )
}

export default Locations
