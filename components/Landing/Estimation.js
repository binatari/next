
const Estimation = () => {
    return (
        <div className="grid-cols-1 md:grid-cols-2 grid gap-20 px-4">
         <div >
            <h2 className="text-4xl my-10 text-center">Project Estimation</h2> 
            <p className="my-5 text-center">Lets begin by providing a free quotation for your project</p>
            <form className="flex flex-col ">
                <input type="text"  placeholder="Name" className='py-4 px-3 my-5'/>
                <input type="text"  placeholder="Email" className='py-4 px-3 my-5'/>
                <input type="textarea"  placeholder="Message" className='py-20 px-3 my-5'/>
                <button className="w-full bg-darkPurple p-4 text-slateWhite my-5">Get a free quote</button>
            </form >
             </div>  
             <div>
            <h2 className="text-4xl my-10 text-center">Chat with us Live</h2> 
            <p className="my-5 text-center">We are online 24/7 to reply ypur messages</p>
            <div>

            </div>
             </div>   
        </div>
    )
}

export default Estimation
