import {motion} from "framer-motion"

const LongTermPlan = () => {
    return (
      <section className="px-4 md:px-20 lg:px-40 py-24 bg-[#ffffff] flex flex-col md:flex-row items-center gap-10">
        {/* Left - Text */}
        <div className="md:w-1/2 text-gray-700">
          <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: false, amount: 0.5 }}
           className="text-2xl md:text-3xl font-semibold text-black mb-4">Our Long Term Plan</motion.h2>
          <p className="mb-4">
            ICE is in the Design industry for the long run, and our vision is deeply rooted in standardizing excellence.
            We yearn and actively work towards a future where everyone has access to quality living. With our team of professionals,
            we’re here to provide real value, improve the standard of lives and offer measurable quality that stands the test of time.
          </p>
          <p>
            We plan to remain passionate about contributing our quota towards urban planning, taking futuristic actions and making
            decisions that offer positive rewards. We’re strategic about expanding our reach, increasing our value offering and
            changing the game altogether with impeccable work.
          </p>
        </div>
  
        {/* Right - True Split Image Look */}
        <div className="md:w-1/2 relative h-[320px] flex items-stretch">
          {/* Left half */}
          <div className="w-2/3 overflow-hidden rounded-[30px]">
            <img
              src="/splitpicture.jpg"
              alt="Left Split"
              className="h-full object-cover"
              style={{
                width: '200%',
                objectPosition: 'left center',
              }}
            />
          </div>
          {/* Right half */}
          <div className="w-1/3 overflow-hidden rounded-[30px] ml-5">
            <img
              src="/splitpicture.jpg"
              alt="Right Split"
              className="h-full object-cover"
              style={{
                width: '200%',
                objectPosition: 'right center',
              }}
            />
          </div>
        </div>
      </section>
    );
  };
  
  
  export default LongTermPlan
  