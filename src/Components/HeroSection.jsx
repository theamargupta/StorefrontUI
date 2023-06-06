export default function HeroSection() {
  return (
    <div className="bg-[#93C5FD] py-32 m-10 flex">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6">
          Mod Leather Sofa
        </h1>
        <p className="text-lg md:text-xl text-black mb-8">
          FROM $800 <br /> Shop Now Design by Jason Bourne
        </p>
        <a
          href="#products"
          className="text-black-500 font-medium px-6 py-3 rounded uppercase tracking-wide hover:bg-black-500 hover:text-white transition duration-300 ease-in-out border-black-900"
        >
          Shop Now
        </a>
        <div className="flex justify-end"></div>
      </div>
      <div class="flex flex-1 justify-center items-center relative">
        <div class="z-10">
          <img
            src="https://i.ibb.co/JBT5QRW/couch6.png"
            className="w-[30rem]"
            alt=""
          />
        </div>
        <div class="absolute w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88 bg-white z-0 rounded-full"></div>
      </div>
    </div>
  );
}
