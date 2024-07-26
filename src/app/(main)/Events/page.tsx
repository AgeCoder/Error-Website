/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
    hidden: { opacity: 0, y: '100vh' },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            delay: 0.3
        }
    },
    exit: {
        y: '-100vh',
        transition: { ease: 'easeInOut' }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1,
            duration: 0.8,
            type: 'spring',
            stiffness: 50
        }
    }
};

const EventPage = () => {
    return (
        <div>
            <motion.div
                className="flex items-center justify-center h-screen"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <motion.div
                    className="text-center"
                    variants={titleVariants}
                >
                    <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
                    <p className="text-lg">We're working hard to bring you our next exciting event. Stay tuned for updates!</p>
                    <div className="mt-6">
                        <motion.div
                            className="inline-block px-4 py-2 bg-blue-600 font-semibold rounded-full cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link
                                href='https://chat.whatsapp.com/DE932vbdbGuJhpTPJqFqZU'
                                target='_blank'
                            >
                                Get Notified
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default EventPage;
