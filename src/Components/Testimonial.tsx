
const testimonials = [
    {
        "avatar":"https://xsgames.co/randomusers/assets/avatars/male/7.jpg",
        "quote": "I absolutely love Padhega India! The curated selection is top-notch, and I always find something new and exciting to read. The staff's personalized recommendations have introduced me to some of my all-time favorite books. It's my go-to place for discovering hidden gems!",
        "author": "Jessica M.",
        "role": "Avid Reader"
      },
      {
        "avatar":"https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
        "quote": "The community events at Padhega India are amazing! From author signings to book clubs, there's always something fun and engaging happening. I've met so many wonderful people who share my love for books. It's more than just a bookstore; it's a community.",
        "author": "Mark T.",
        "role": "Book Club Member"
      },
      {
        "avatar":"https://xsgames.co/randomusers/assets/avatars/male/9.jpg",
        "quote": "I can't get enough of the cozy reading spaces at Padhega India. It's the perfect spot to unwind and dive into a good book. The atmosphere is so welcoming and peaceful, it makes every visit a special experience. Plus, their online store is super convenient for when I can't make it in person!",
        "author": "Emily R.",
        "role": "Relaxation Seeker"
      },
      {
        "avatar":"https://xsgames.co/randomusers/assets/avatars/male/10.jpg",
        "quote": "As a history buff, I appreciate the wide selection of historical fiction at Padhega India. 'Echoes of the Past' was a fantastic recommendation from their knowledgeable staff. I always leave with a new book in hand and a smile on my face. Highly recommended!",
        "author": "David L.",
        "role": "History Enthusiast"
      },
      {
        "avatar":"https://xsgames.co/randomusers/assets/avatars/male/18.jpg",
        "quote": "My kids adore the children's section at Padhega India. The staff is always so helpful in finding age-appropriate and engaging books for them. 'Adventures in Wonderland' has become a bedtime favorite. It's wonderful to see my children develop a love for reading.",
        "author": "Sarah W.",
        "role": "Happy Parent"
      },
      {
        "avatar":"https://xsgames.co/randomusers/assets/avatars/male/78.jpg",
        "quote": "The staff at Padhega India are incredibly knowledgeable and friendly. They helped me find the perfect book for a gift, and it was a hit! Their recommendations are always spot-on, and I love the variety of genres available. It's truly a book lover's paradise.",
        "author": "John D.",
        "role": "Satisfied Customer"
      }
  
]

function Testimonial() {

  return (
    <>
        <div className='w-[90vw] md:w-[80rem] block mx-auto my-5'>
            <div className="text-5xl uppercase my-4">Testimonial</div>
            <div className="my-4">What Our Readers Are Saying.</div>
            <div className="flex max-sm:flex-col flex-wrap gap-4">
                {testimonials.map((testimonial, index) => (
                    <div className="basis-full md:basis-[45%] justify-center"  key={`${testimonial.author}-${index}`}>
                        <div className="card my-4 md:my-0 md:w-[33vw] h-full bg-base-100 shadow-xl">
                            <div className="card-body">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                  <img src={testimonial.avatar} alt="Random User" />
                                </div>
                              </div>
                              <h2 className="card-title">— {testimonial.author}, {testimonial.role}</h2>
                              <p className="italic">“{testimonial.quote}”</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </>
  )
}

export default Testimonial;