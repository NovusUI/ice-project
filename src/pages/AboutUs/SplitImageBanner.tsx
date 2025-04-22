

const SplitImageBanner = () => {
  return (
    <div className="  px-4 md:px-16 flex justify-center items-center bg-white">
      <div className="relative rounded-[2rem]  w-full max-w-5xl z-20">
        <img
          src="/splitimage.jpg"
          alt="Split Banner"
          className="w-full h-auto object-cover rounded-[2rem]"
        />

        {/* Classic Label (Left) */}
        <div className="absolute -left-6 bottom-1/3 bg-white text-[#817569] rounded-full px-4 py-1 text-sm font-medium shadow-md z-20">
          Classic
        </div>

        {/* Modern Label (Right) */}
        <div className="absolute -right-6 bottom-1/2  bg-white text-[#817569] rounded-full px-4 py-1 text-sm font-medium shadow-md">
          Modern
        </div>
      </div>
    </div>
  );
};

export default SplitImageBanner;
