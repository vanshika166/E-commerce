import { motion } from "framer-motion";

const categories = [
    { img: "/pic11.jpg", label: "Tops" },
    { img: "/pic15.jpg", label: "Outwears" },
    { img: "/pic21.jpg", label: "Bottoms" },
    { img: "/pic17.jpg", label: "Dresses" },
];

const Page8 = () => {
    return (
        <div className="lg:min-h-screen  w-full flex flex-col items-center justify-center gap-y-8 bg-[#EDEEE9] px-2 py-8">
            <h1 className="text-2xl font-semibold">Shop Category</h1>
            <p className="text-xl text-center">View and find what you want.</p>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6 w-full max-w-6xl">
                {categories.map((cat) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.025 }}
                        viewport={{ once: true }}

                        key={cat.label}
                        className="flex flex-col w-full max-w-xs md:max-w-none md:w-[23%] h-64 md:h-[350px] bg-white rounded-lg shadow-sm"
                    >
                        <div className="h-4/5 w-full overflow-hidden rounded-t-lg">
                            <img
                                src={cat.img}
                                alt={cat.label}
                                className="h-full w-full object-cover object-top-right transition-all duration-200 hover:scale-105"
                            />
                        </div>
                        <button className="h-1/5 w-full flex items-center justify-center text-lg md:text-2xl font-semibold">
                            {cat.label}
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Page8;
