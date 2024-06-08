'use client'
import SocialShareButtons from "@/Components/SocialShareButtons";
import { useState } from "react";

function Footer() {
    const [email,setEmail] = useState('');

    const handleSubscribe = () => {
        if(email){
            alert(`Subscribed with email: ${email}`);
            setEmail('');
        }
        alert("Kindly Fill the email");
        setEmail('');
    }

  return (
    <>
        <footer className="body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap md:text-left text-center order-first">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium tracking-widest text-sm mb-3">Quick Links</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="">Home</a>
                  </li>
                  <li>
                    <a className="">Top Selling</a>
                  </li>
                  <li>
                    <a className="">Collection</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium  tracking-widest text-sm mb-3">OUR POLICIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="">Terms of Use / Disclaimer</a>
                  </li>
                  <li>
                    <a className="">Return Policy</a>
                  </li>
                  <li>
                    <a className="">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="">Shipping Policy</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium  tracking-widest text-sm mb-3">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                  <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Get Update on New Collection</label>
                    <input type="email" id="footer-field" name="footer-field" className="w-full bg-gray-400 rounded border bg-opacity-40  focus:bg-transparent focus:ring-2 focus:ring-yellow-900 focus:border-yellow-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                  </div>
                  <button className="btn btn-accent" onClick={handleSubscribe}>Suscribe</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-opacity-75">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center ">
                <span className="ml-3 text-xl">Padhega India</span>
              </a>
              <p className="text-sm sm:ml-6 sm:mt-0 mt-4">© 2024 Padhega India</p> 
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">         
                    <SocialShareButtons/>
                </span>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer;