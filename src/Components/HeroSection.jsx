import Image from "next/image";

function HeroSection() {
  return (
        <div className="hero bg-base-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image src="/person-with-books-digital-art-style-education-day.png" width={1000} height={1000} className="max-w-sm md:max-w-2xl" alt="Reading Book"/>
            <div>
              <h1 className="text-5xl font-bold">Discover Your Next Great Read</h1>
              <p className="py-6">Dive into a world of adventure, knowledge, and imagination. At Padhega India, we offer a curated collection of books across all genres to captivate readers of all ages. Whether you&apos;re looking for the latest bestseller, a timeless classic, or a hidden gem, our shelves are stocked with the perfect book for you. Explore our diverse selection and let your next great story begin today.</p>
              <button className="btn btn-accent">Discover Books</button>
            </div>
          </div>
        </div>
  )
}

export default HeroSection;