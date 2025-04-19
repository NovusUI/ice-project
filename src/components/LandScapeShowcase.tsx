import { motion } from 'framer-motion';
import AnimatedBtn from './buttons/AnimatedBtn';

interface Props {

  header?:string;
  buttonTitle?:string;
  body:string;
  body2?:string;
  color?:string;
  textColor?: string;
  onClick?:()=>void
}

const LandScapeShowcase = ({onClick,header,buttonTitle,body,color="bg-[#ffffff]",textColor="text-[#000000]",body2}:Props) => {
  return (
    <div className={`${color} w-full  py-[160px] px-[20px] md:px-[100px] lg:px-[300px] ${textColor} flex flex-col items-center`}>
    <motion.h2
className="relative text-[25px] md:text-[40px] font-bold leading-tight  mb-5 capitalize "
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
viewport={{ once: false, amount: 0.5 }}
>{header}
</motion.h2>
    <p className="text-sm md:text-base mb-6">
        {body}
      </p>
     {body2 && <p className="text-sm md:text-base mb-6">
        {body2}
      </p>}
      {buttonTitle &&<AnimatedBtn text={buttonTitle} color={color} textColor={textColor} onClick={onClick}/>}
    </div>
  )
}

export default LandScapeShowcase
