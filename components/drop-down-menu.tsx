import { motion } from "framer-motion";
import Link from "next/link";

interface DropDownMenuProps {
  onClose: () => void;
  scrollToServices: () => void; // Add scrollToServices function to props
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose, scrollToServices }) => {
  return (
    <motion.div
      className="
    w-[3/4]
    h-screen
    bg-gradient-to-b 
    from-black
     to-gray-400 
     bg-opacity-50
     text-slate-300
     p-6
     space-y-4
     absolute
     top-24
     left-0
     right-0
     z-50
    "
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col flex pl-2 space-y-10">
        <Link href="/pricing" className="text-white text-xl">
          Pricing
        </Link>
        <Link href="/contact" className="text-white text-xl">
          Contact
        </Link>

        <Link href="/book" className="text-white text-xl">
          Book a call
        </Link>

        {/* Add onClick handler to Services link */}
        <Link href='/#services'  className="cursor-pointer text-white text-xl">
          Services
        </Link>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
