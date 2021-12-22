

const Clients = () => {
    return (
        <>
          <h2 className="text-4xl mb-10 text-slateWhite px-4">Our Clients</h2> 
          <p className="mb-10 text-slateWhite text-center px-4">We work with and provide IT solutions for a diverse range of industries. From food delivery brands to multinational financial institutions</p>
          <ul className="bg-white absolute bottom-[-7em] grid gap-5 grid-cols-2 md:grid-cols-4 py-3 px-3">
            <li className="h-[20vh] w-[20vh] max-h-[10em] max-w-[10em] border rounded-[50%] bg-slateWhite flex items-center justify-center text-center">50+ Happy customers</li>
            <li className="h-[20vh] w-[20vh] max-h-[10em] max-w-[10em] border rounded-full bg-slateWhite flex items-center justify-center text-center">100+ Successful projects</li>
            <li className="h-[20vh] w-[20vh] max-h-[10em] max-w-[10em] border rounded-full bg-slateWhite flex items-center justify-center text-center">20+ Hours worked 10+ Awards Won</li>
            <li className="h-[20vh] w-[20vh] max-h-[10em] max-w-[10em] border rounded-full bg-slateWhite flex items-center justify-center text-center">20+ Hours worked 10+ Awards Won</li>
              </ul> 
        </>
    )
}

export default Clients
