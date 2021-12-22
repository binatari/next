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
        <p className="w-full md:w-3/5 text-center text-slateWhite mt-14 px-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, fuga voluptates neque asperiores quidem dolore labore exercitationem nostrum nisi itaque placeat veritatis, autem quisquam deserunt harum sequi earum repellat reiciendis.
        Laboriosam voluptatibus aperiam dignissimos quaerat aut ipsum dicta. Qui ad quis placeat nam quam dolorem cum, excepturi rerum, impedit soluta quod perspiciatis minus, laudantium tenetur mollitia perferendis laborum consectetur repellendus?
        Cumque dolorem, at ullam voluptas laudantium numquam exercitationem eveniet saepe hic deserunt reiciendis et deleniti fuga nulla itaque, impedit, alias quidem illo corrupti possimus sequi quaerat optio id quos! Exercitationem.
        Mollitia, quasi vitae adipisci fuga odit animi quibusdam nulla deleniti debitis autem eos reiciendis esse obcaecati nostrum laborum nesciunt recusandae quidem consequuntur! Ea quod laboriosam laudantium repellendus nobis reiciendis nulla.
        Ullam ut dignissimos impedit dolor voluptate, quisquam cupiditate est iste, ea rem aperiam accusantium porro laboriosam iure odio consectetur delectus officiis doloremque aliquam fugiat itaque? Dicta fugiat libero neque adipisci?</p>
        </div>
    )
}

export default Footer
