import Image from "next/image"
const Products = () => {
    return (
        <div className="container flex items-center justify-center flex-col">
            <h2 className="text-4xl mb-10 text-center mx-4">Some of our Products</h2>
            <p className="mb-16 mx-4 text-center">in publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-10 px-4">
                <div className="relative min-h-[30vh] bg-black">
               <Image
                className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
               />
                </div>
                <div className="relative bg-black">
                <Image
                className="relative min-h-[30vh]"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            />
                </div>
                <div className="relative min-h-[30vh] bg-black">
                <Image
                className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            />
                </div>
                <div className="relative min-h-[30vh] bg-black">
                <Image
                className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            />
                </div>
            </div>
            <a href="">See more</a>
        </div>
    )
}

export default Products
