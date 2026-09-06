import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed z-50 w-full">
      <div className="h-20 flex justify-between items-center transition-all duration-500 backdrop-blur-md px-2 md:px-12 py-3 text-sm tracking-widest text-[#B5A898]">
        
        <Image
            src={"/logo.png"}
            width={80}
            height={80}
            
        />

        <a 
        href="#fav"
        className="text-[#B68E6B] font-inter text-xs tracking-widest px-4">
            Our Collections
        </a>

      </div>
    </div>
  );
}