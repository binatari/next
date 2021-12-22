import Image from "next/image"
const Sidebar = () => {
    const arr = [0,1,2,3,4]
    return (
        <div className="flex flex-col md:px-5 lg:px-10 bg-slateWhite mb-20 mx-auto">
           <h2 className="text-center text-2xl my-10">Latest Stories</h2> 
           <ul className="flex flex-col py-14 bg-white rounded-3xl px-5">
               { arr.map((index)=>
               (<li className="mb-5" >
                <div className="flex">
               <div className="relative min-h-[5vh] min-w-[7vh] border rounded-lg bg-gray-600">
                <Image
                className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />  
            </div>
            <span className="ml-5">Reasons for choosing MERN stack for your project</span>
            </div>
            <div className="text-right">Nov 29, 2021</div>
               </li>)
               )}
           </ul>
           <div className="relative min-h-[30vh] min-w-full max-h-[30em] max-w-[30em] border rounded-lg bg-gray-600 py-10 my-10 ">
                <Image
                className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />  
            </div>
            <div className="relative min-h-[30vh] min-w-full max-h-[30em] max-w-[30em] border rounded-lg bg-gray-600 py-10">
                <Image
                className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />  
            </div>
        </div>
    )
}

export default Sidebar
