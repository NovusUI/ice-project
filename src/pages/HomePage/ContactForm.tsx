import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {motion} from "framer-motion"
import SelectBox from '../../components/SelectBox';
import AnimatedBtn from '../../components/buttons/AnimatedBtn';

// Schema
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  accepted: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the privacy policy' }),
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectOptions = [
  { label: 'Architecture', value: 'architecture' },
  { label: 'Interior Design', value: 'interior' },
  { label: 'Renovation', value: 'renovation' },
];

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Valid form data:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-black text-white p-8 md:p-24 lg:p-48 w-full mx-auto text-left"
    >
     <motion.h2
  className="text-3xl md:text-4xl font-semibold mb-5"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false, amount: 0.5 }}
>Get In touch with us</motion.h2>
      <p className="text-gray-300 mb-10">
        Have a question or inquiry? Fill out the form below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-sm mb-2">First Name</label>
          <input
            {...register('firstName')}
            className="bg-black border-b border-gray-500 focus:outline-none w-full py-2"
          />
          {errors.firstName && (
            <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm mb-2">Last Name</label>
          <input
            {...register('lastName')}
            className="bg-black border-b border-gray-500 focus:outline-none w-full py-2"
          />
          {errors.lastName && (
            <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm mb-2">Phone</label>
          <input
            {...register('phone')}
            className="bg-black border-b border-gray-500 focus:outline-none w-full py-2"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-2">Email</label>
          <input
            {...register('email')}
            className="bg-black border-b border-gray-500 focus:outline-none w-full py-2"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Project Type Select */}
      <div className="mt-8  md:w-1/2">
        <SelectBox
          options={projectOptions}
          placeholder="Project Type"
          onChange={(option) => setValue('projectType', option?.value || '')}
          shape="pill"
          size="md"
        />
        {errors.projectType && (
          <p className="text-xs text-red-500 mt-1">{errors.projectType.message}</p>
        )}
      </div>

      {/* Privacy Checkbox */}
      <div className="mt-8 text-xs text-gray-400">
        <p className="mb-2">
          We will only use this information to answer your enquiry. Please tick the box
          to consent to your data being stored inline with the guidelines in our privacy policy.
        </p>
        <label className="inline-flex items-center gap-2 mt-2">
          <input type="checkbox" {...register('accepted')} />
          I have read and agree to the privacy policy.
        </label>
        {errors.accepted && (
          <p className="text-xs text-red-500 mt-1">{errors.accepted.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-10">
        <AnimatedBtn text='Submit'/>
      </div>
    </form>
  );
};

export default ContactForm;
