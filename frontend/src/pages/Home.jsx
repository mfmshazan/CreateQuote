import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-900 dark:text-white'>
      <motion.h2
        className='py-5 px-10 bg-gradient-to-r from-green-500 to-blue-600 font-bold text-xl rounded-4xl cursor-pointer'
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to='/app'>Lets Try</Link>
      </motion.h2>
    </div>
  )
}

export default Home
