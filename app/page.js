"use client"

import NavBar from "./navbar"
import Image from "next/image"
import { useRef, useState, useEffect} from 'react'

const cards = [
  { name: "Sticky Toffee Cookie", descr: "...", image: "/cookies/sticky-toffee.jpg", price: "₹280", signature: true },
  // ...rest of your menu items
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
              alt={name}
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
          className="mx-auto md:h-700 md:w-700"
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
      

      <section id="fav" className="w-full h-fit px-4 py-16 -mt-12 flex flex-col md:mt-24">

      <div>
        {cards.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </div>

      </section>
    </div>
  )
}