
const FeaturedData = [
    {
        title: "Solito : A Memoir",
        author: "Javier Jamora",
        image: "/Solito.jpg"
    },
    {
        title: "King: A Life",
        author: "Jonathan Eig",
        image: "/King A Life.jpg"
    },
    {
        title: "Stolen Focus: Why You Can't Pay Attention--and How to Think Deeply Again",
        author: "Johann Hari",
        image: "/Stolen Focus.jpg"
    },
    {
        title: "The Art Thief: A True Story of Love, Crime, and a Dangerous Obsession",
        author: "Michael Finkel",
        image: "/The Art Thief.jpg"
    },
    {
        title: "The Berry Picker: A Novel",
        author: "Amanda Peters",
        image: "/The Berry Pickers.jpg"
    },
    {
        title: "The Heaven and Earth Grocery Store: A Novel",
        author: "James McBride",
        image: "/The Heaven and earth grocery store.jpg"
    },
    {
        title: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
        author: "David Grann",
        image:"/The Wager.jpg",
    }
]

function FeaturedBooks() {
  return (
    <div className='w-[90vw] md:w-[80rem] block mx-auto'>
        <div className='flex-col md:flex-row justify-between items-center gap-6 my-4'>
            <div className=' basis-2/3 my-4'>
                <div className='text-5xl uppercase my-4'>FEATURED BOOKS</div>
                <div>Explore our extensive collection from the comfort of your home with our user-friendly online store. With easy browsing, fast shipping, and a hassle-free return policy.</div>
            </div>
            <div className='basis-1/6 my-4'>
                <a className='my-4 border-accent border-b-2 py-2 text-accent font-semibold' href="#">View all Books →</a>
            </div>
        </div>
        <div className="carousel space-x-8 my-4">
        {FeaturedData.map((feautedBook,index)=>{
          return   <div className="carousel-item max-w-64 group cursor-pointer" key={`${feautedBook.title}-${index}`}>
                <div >
                    <img  src={feautedBook.image} width={250} height={250} alt={feautedBook.title}/>
                    <div className="my-4">
                        <div className="font-bold group-hover:text-accent" >{feautedBook.title}</div>
                        <div>{feautedBook.author}</div>
                        <div className="flex">
                            <div className="mr-2">&#8377;<span className="line-through">499</span></div>
                            <div className="text-accent ml-2">&#8377;249</div>
                        </div>
                        <div className="text-accent">Save : 50%</div>
                        <button className="btn btn-accent my-4">Buy Now</button>
                    </div>
                </div>
          </div> 
        })}
        </div>

    </div>
  )
}

export default FeaturedBooks