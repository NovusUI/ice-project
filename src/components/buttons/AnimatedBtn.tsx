
import {motion} from "framer-motion"
import { ArrowForward } from '@mui/icons-material'


interface Props {
    text:string;
    color?:string;
  textColor?: string;
  onClick?:()=>void
}

const AnimatedBtn = ({text,color="border-white",textColor='text-white',onClick}:Props) => {
  return (
    <button onClick={onClick} className={`group mt-6 min-w-[160px] flex items-center  gap-2 rounded-full border ${color} px-6 py-2 ${textColor} transition  hover:bg-gradient-to-r hover:from-white hover:to-[#1867C6] hover:text-white`}>
{text}
<motion.span
  className="inline-block"
  animate={{ x: [0, 5, 0] }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  <ArrowForward fontSize="small" />
</motion.span>
</button>
  )
}

export default AnimatedBtn
