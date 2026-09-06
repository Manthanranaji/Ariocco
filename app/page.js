"use client"

import NavBar from "./navbar"
import Image from "next/image"
import { useRef, useState, useEffect} from 'react'

const cards = [
  
  {
    name: "Spinach Rice with Miso Glazed Chicken",
    descr: "Miso glazed chicken over spinach rice.",
    price: "₹550",
    image: "/p24.png",
    signature: true,
  },
  {
    name: "Chicken Avocado Salad with Toasted Rice",
    descr: "Grilled chicken, avocado, and toasted rice.",
    price: "₹550",
    image: "",
    signature: false,
  },
  
  {
    name: "Charred Corn Salad with Mint Yogurt",
    descr: "Charred corn tossed in a mint yogurt dressing.",
    price: "₹550",
    image: "/p23.jpg",
    signature: false,
  },
  {
    name: "Chicken Pesto with Roasted Pepper Sauce",
    descr: "Grilled chicken with basil pesto and roasted pepper sauce.",
    price: "₹400",
    image: "/p5.png",
    signature: false,
  },
  {
    name: "Honey Glazed Smoked Tofu",
    descr: "Smoked tofu glazed with honey.",
    price: "₹380",
    image: "/p7.png",
    signature: false,
  },
  {
    name: "Spinach Rice with Miso Tofu Mince",
    descr: "Miso glazed tofu mince over spinach rice.",
    price: "₹550",
    image: "",
    signature: true,
  },
  {
    name: "Pulled Pork BBQ",
    descr: "Slow cooked pulled pork in a smoky BBQ sauce.",
    price: "₹420",
    image: "/p6.png",
    signature: false,
  },
  {
    name: "Chocolate Chunk Cookies",
    descr: "Box of 3, eggless.",
    price: "₹550",
    image: "p16.jpg",
    signature: true,
  },
  {
    name: "Matcha White Chocolate Cookies",
    descr: "Box of 3, eggless.",
    price: "₹610",
    image: "/p4.png",
    signature: true,
  },
  {
    name: "Sticky Toffee Cookies",
    descr: "Box of 3, eggless.",
    price: "₹550",
    image: "/p25.png",
    signature: false,
  },
  {
    name: "Assorted Box Cookies",
    descr: "Box of 3, eggless.",
    price: "₹600",
    image: "/p1.png",
    signature: false,
  },
  {
    name: "Lemon Meringue Cake",
    descr: "500gm onwards, contains eggs.",
    price: "On request",
    image: "/p9.png",
    signature: false,
  },
  {
    name: "Orange Almond Cake",
    descr: "500gm onwards, contains eggs, gluten free.",
    price: "On request",
    image: "/p2.png",
    signature: false,
  },
  {
    name: "Chocolate Fondant Cake",
    descr: "500gm onwards, contains eggs.",
    price: "On request",
    image: "/p3.png",
    signature: false,
  },
  {
    name: "Hot Chocolate Cake",
    descr: "500gm onwards, eggless.",
    price: "On request",
    image: "/p26.jpg",
    signature: false,
  },
  {
    name: "Tiramisu Tub",
    descr: "Serves 1-2, eggless.",
    price: "₹500",
    image: "/p27.jpg",
    signature: true,
  },
  {
    name: "London Cake",
    descr: "Layered chocolate cake with citrus cream filling.",
    price: "350",
    image: "/p21.jpg",
    signature: false,
  },
]

const WHATSAPP_NUMBER = "919820275123" // e.g. "919999999999", no + or spaces

function Card({ name, descr, image, price, signature }) {
  const ref = useRef(null)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFlipped(true)
      },
      { threshold: 0.7 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const orderMessage = `Hi, I'd like to order ${name}.`
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderMessage)}`

  return (
    <div ref={ref} className="card-flip">
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="card-back bg-[#F4E8D3] flex items-center justify-center">
          <span className="font-albert-sans text-[#5B1212]/20 tracking-widest text-sm">
            ARIOCCO
          </span>
        </div>

        <div className="card-front relative border border-[#5B1212]/10 bg-[#F4E8D3] p-6 flex justify-between items-center md:grid md:grid-cols-[1fr_1.5fr] md:gap-8 gap-4">
          {signature && (
            <span className="absolute top-3 right-3 bg-[#5B1212] text-[#F4E8D3] text-[10px] tracking-widest uppercase font-albert-sans px-2 py-1 rounded-full">
              Signature
            </span>
          )}

          <div className="w-full flex flex-col gap-3">
            <h3 className="text-2xl md:text-3xl font-albert-sans font-semibold text-[#5B1212]">
              {name}
            </h3>

            <span className="text-sm font-albert-sans tracking-wider text-[#582B12]">
              {price}
            </span>

            <p className="text-xs md:text-sm font-albert-sans font-light tracking-wide text-[#5B1212]/70">
              {descr}
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#582B12] hover:bg-[#5B1212] text-[#F4E8D3] font-albert-sans text-xs md:text-sm tracking-wide px-4 py-2 rounded-md w-fit transition-colors"
            >
              Order on WhatsApp
            </a>
          </div>

          <div className="w-full md:h-64">
            <img
              src={image}
              
              className="rounded-sm w-full h-full md:object-contain md:rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default function Home(){
  return(
    <div className="min-h-screen bg-[#F4E8D3] w-full flex flex-col">
      
      <NavBar/>

      <section className="min-h-screen w-full flex flex-col mt-28">
        
        <Image
          src={"/ariocco.png"}
          width={300}
          height={300}
          alt="logo"
          className="opacity-0 animate-fade-left mx-auto md:h-700 md:w-700"
        />

        
        <Image
          src={"/hero.png"}
          alt="sticky toffee"
          height={300}
          width={300}
          className="-mt-16 md:h-[400px] md:w-[400px]"
        />
      </section>

      <div className="opacity-0 animate-fade-up [animation-delay:1400ms] flex items-center -mt-52 gap-6 px-4">
  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#E7D7B8]" />

  <h2 className="text-[#B68E6B] tracking-wider font-chelsea text-sm whitespace-nowrap">
    Our Collections
  </h2>

  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#E7D7B8]" />
</div>
      

      <section id="fav" className="w-full h-fit px-4 py-16 -mt-12 flex flex-col md:mt-20">

      <div>
        {cards.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </div>

      </section>
      <footer id="cont" className="bg-[#582B12] mt-44 py-12 px-6 text-center text-[#F4E8D3]">
  <p className="font-albert-sans font-semibold mb-1 text-2xl text-[#F4E8D3] tracking-wider">
    ariocco
  </p>
  <p className="text-[9px] text-[#E7D7B8] font-albert-sans tracking-widest mb-8">
    HANDMADE · BAKED FRESH · BOMBAY
  </p>

  <div className="max-w-sm mx-auto mb-8 space-y-3 text-left">
    <div className="border-t border-[#F4E8D3]/20 pt-3">
      <p className="text-xs font-albert-sans font-semibold tracking-wide text-[#F4E8D3]">
        Bakery timings: 8am – 7pm
      </p>
      <p className="text-[11px] font-albert-sans text-[#E7D7B8] mt-1">
        For all desserts. Order 2–4 hours prior to preferred delivery.
      </p>
    </div>

    <div className="border-t border-[#F4E8D3]/20 pt-3">
      <p className="text-xs font-albert-sans font-semibold tracking-wide text-[#F4E8D3]">
        Pre-order 24 hours in advance
      </p>
      <p className="text-[11px] font-albert-sans text-[#E7D7B8] mt-1">
        For all bowls, sandos, and meals.
      </p>
    </div>

    <div className="border-t border-[#F4E8D3]/20 pt-3">
      <p className="text-xs font-albert-sans font-semibold tracking-wide text-[#F4E8D3]">
        Pre-order 24 hours in advance
      </p>
      <p className="text-[11px] font-albert-sans text-[#E7D7B8] mt-1">
        For any custom cakes.
      </p>
    </div>
  </div>

  <div className="flex justify-center gap-6 text-[#F4E8D3] mb-6 font-albert-sans text-sm tracking-widest">
    <a href="https://instagram.com/ariocco_" target="_blank" rel="noopener noreferrer" className="hover:text-[#E7D7B8] transition-colors">
      Instagram
    </a>
    <a href="https://wa.me/919820275123" target="_blank" rel="noopener noreferrer" className="hover:text-[#E7D7B8] transition-colors">
      WhatsApp
    </a>
  </div>

  <p className="font-albert-sans text-[10px] tracking-widest text-[#F4E8D3]/60">
    © ariocco · {new Date().getFullYear()}
  </p>
</footer>
    </div>
  )
}