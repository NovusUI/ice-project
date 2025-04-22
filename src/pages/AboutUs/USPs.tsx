import {motion} from "framer-motion"

const USPs = () => {
    const usps = [
      "Times have changed, and we move with them, approaching each project with a deep understanding of modern design to create effective solutions. Innovation is key to our process, reflected in results that go beyond trends to set new standards with purpose and impact.",
      "Our reputation is built on trust and quality. Whether managing projects, creating home furnishings, planning structures, or designing, excellence is our foundation, ensuring every outcome meets the highest standards.",
      "We build strong relationships through a customer-centric approach, addressing pain points with care, providing solutions professionally, and committing fully to every task to ensure excellence in all we do.",
    ];
  
    return (
      <section className="px-5 md:px-40 lg:px-80 py-16 bg-[#ffffff]">
        <motion.h2 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
         viewport={{ once: false, amount: 0.5 }}
        className="text-2xl md:text-3xl font-semibold text-black mb-4 md:text-left" >What Our USPs Are</motion.h2>
        <p className="text-gray-600  mb-10 md:text-left">
          Our USP is built on simplicity, refinement, and a design ethos that values precision, functionality, and timeless elegance.
        </p>
        <div className="space-y-6">
          {usps.map((text, i) => (
            <div
              key={i}
              className="bg-black text-white p-6 md:p-8 rounded-[20px] md:rounded-[30px] text-sm md:text-base leading-relaxed"
            >
              {text}
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default USPs