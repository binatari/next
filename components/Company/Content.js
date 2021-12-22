import Image from "next/image"
const Content = () => {
    const arr = [0,1,2,3,4,5,6]
    return (
        <div className=" max-w-[100%] md:max-w-[70%] px-10 bg-slateWhite">
            <h2 className="text-center text-2xl mb-10 mt-10 ">Top Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
             {
                 arr.map((index)=>(
                    <div className="flex flex-col">
                         <div className="relative min-h-[30vh] min-w-full max-h-[30em] max-w-[30em] border rounded-t-lg bg-gray-600 py-10">
                <Image
                className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />  
            </div>
            <button className='bg-darkPurple text-slateWhite px-3 py-1 rounded-full self-start my-5'>Get a Quote</button>
            <span className='text-darkPurple self-start mb-3 font-bold'>Reasons for choosing MERN Stack for your projects</span>
            <p className="self-start mb-10">In publishing and graphic design lorem ipsum is a placeholder text commonly used to demonstrate</p>
            <div className="flex flex-wrap justify-between">
                <span>Nov 29 2021</span>
                <div>read more</div>
            </div>
                    </div> 
                 ))
             }
            </div>
        </div>
    )
}

export default Content
