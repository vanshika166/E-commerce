
import NavThrough from './navThrough';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Confirmation = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50 flex flex-col">
            <NavThrough />
            <div className="flex flex-1 items-center justify-center">
                <div className="bg-white relative top-[3rem] shadow-2xl rounded-xl p-10 flex flex-col items-center gap-6 w-full max-w-md">
                    <div className="flex items-center justify-center bg-green-500 rounded-full h-24 w-24">
                        <i className="fa-solid fa-check text-white text-5xl"></i>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 text-center">
                        Thank you for your purchase!
                    </h1>
                    <p className="text-gray-500 text-center">
                        Your order has been placed successfully. You can check your order status or return to the homepage.
                    </p>
                    <div className="flex flex-col gap-3 w-full">
                        <button
                            onClick={() => navigate('/check')}
                            className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
                        >
                            Check your Order
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition"
                        >
                            Go to Home
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Confirmation;
