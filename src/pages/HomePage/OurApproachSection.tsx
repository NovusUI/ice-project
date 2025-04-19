import { motion } from 'framer-motion';



const OurApproachSection = () => {
  return (
    <section className="bg-[#f5f4f1] py-20 px-10 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h2 className="text-2xl md:text-left font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-sm md:text-left text-gray-700 leading-relaxed">
            We believe architecture is more than just structures—it's about creating experiences. <br />
            With a focus on minimalism, precision, and enduring value, our work reflects a deep understanding of space, materiality, and lifestyle.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false}}
          className="overflow-hidden rounded-3xl"
        >
          <img
            src="/approach.jpg" // replace with your correct path
            alt="Modern Architecture"
            className="h-64 w-full max-w-md object-cover rounded-xl shadow-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproachSection;
