import Image from "next/image"
const Footer = () => {
    return (
        <div className="container flex flex-col items-center justify-center">
         <ul className="flex self-end">
          <li className="relative min-h-[3em] min-w-[3em]"> <Image
               className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            /> </li>
          <li className="relative min-h-[3em] min-w-[3em]">
          <Image
              className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li className="relative min-h-[3em] min-w-[3em]">
          <Image
               className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            />
          </li>
        </ul>   
        <h2 className="flex md:self-start text-4xl text-slateWhite text-center">Contact us</h2>
       <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-4/5 my-20">
                <input type="text"  placeholder="Name" className='py-5 px-3 my-5 rounded-md'/>
                <input type="textarea"  placeholder="Message" className=' px-3 my-5 md:row-start-1 md:row-end-3 py-5 row-start-3 md:col-start-2 md:col-end-3 col-start-1 rounded-md'/>
                <input type="text"  placeholder="Email" className='py-5 px-3 my-5 rounded-md'/>
                <button className="w-50% max-w-[20em] mx-auto bg-darkPurple p-4 text-slateWhite my-5 md:col-start-1 md:col-end-3 rounded-md">Get a free quote</button>
            </form >
        <span>Copyright</span>
        </div>
    )
}

export default Footer
