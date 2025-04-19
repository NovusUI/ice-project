import {
    LinkedIn,
    Instagram,
    Facebook,
    Close as XIcon,
  } from '@mui/icons-material';
import AnimatedBtn from '../../components/buttons/AnimatedBtn';
  
  const ContactSection = () => {
    return (
      <section className="bg-[#FAFAF7] py-20 px-4 md:px-20 text-left text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Side: Info */}
          <div className="text-gray-800">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Contact</h2>
            <p className="mb-6 max-w-md">
              Whether you're looking to start a project or just have a general enquiry,
              reach out to our team and we will be more than happy to help.
            </p>
  
            <p className="mb-2">
              For all general and project related questions,<br />kindly contact
            </p>
            <p className="mb-4 font-medium underline underline-offset-2">
              info@loremipsuim.com
            </p>
  
            <p className="mb-2">
              For all public relations enquiries, please contact:
            </p>
            <p className="mb-6 font-medium underline underline-offset-2">
              johndoe@ice.com
            </p>
  
            <div className="flex gap-4 text-gray-700">
              <a href="#"><LinkedIn fontSize="small" /></a>
              <a href="#"><Instagram fontSize="small" /></a>
              <a href="#"><XIcon fontSize="small" /></a>
              <a href="#"><Facebook fontSize="small" /></a>
            </div>
          </div>
  
          {/* Right Side: Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name*</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email*</label>
              <input
                type="email"
                className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone*</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1 resize-none"
              />
            </div>
  
            <AnimatedBtn text='submit' textColor='text-[#000000]' color='bg-[#ffffff' />
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  