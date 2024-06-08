import React from 'react'

function SpecialOffers() {


  return (
    <>
        <div className='w-[90vw] md:w-[80rem] block mx-auto my-5'>
            <div className='text-5xl uppercase'>SPECIAL OFFERS</div>
            <div className='my-4'>Discover our latest deals and discounts on a wide range of books. From bestsellers to hidden gems, we have something for everyone at unbeatable prices.</div>
            <section className="text-gray-400 body-font">
                <div className="container py-10 mx-auto">
                  <div className="flex flex-wrap -mx-4 -mb-10">
                    <div className="sm:w-1/2 mb-10 px-4">
                      <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src="/Back to School Sale.jpg"/>
                      </div>
                      <h2 className="text-2xl font-medium text-white mt-6 mb-3">Back to School Sale</h2>
                      <p className="leading-relaxed text-base">Get 30% discount order above &#8377;500 </p>
                      <button className="btn btn-accent my-4">Explore the Offer</button>
                    </div>
                    <div className="sm:w-1/2 mb-10 px-4">
                      <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src="/Black Friday Sale.jpg"/>
                      </div>
                      <h2 className="text-2xl font-medium text-white mt-6 mb-3">Black Friday Sale</h2>
                      <p className="leading-relaxed text-base">Super Black Friday Sale get upto 50% off</p>
                      <button className="btn btn-accent my-4">Explore the Offer</button>
                    </div>
                  </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default SpecialOffers