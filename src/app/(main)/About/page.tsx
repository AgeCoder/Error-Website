"use client";
import LEDBoard from '@/components/animata/card/led-board';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
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

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.5,
            duration: 0.8,
            type: 'spring',
            stiffness: 50
        }
    }
};

const About = () => {
    return (
        <div>
            <div className='mx-2'>
                <LEDBoard word="About" />
            </div>
            <motion.div
                className="container mx-auto p-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                >
                    <motion.div className="flex flex-col justify-center" variants={cardVariants}>
                        <h2 className="text-5xl font-bold mb-4">Our Mission</h2>
                        <p>We aim to foster a vibrant community where everyone is excited to come to college every day. By promoting a culture of collaboration and enthusiasm, we create an environment where students feel connected and inspired. Our mission is to build meaningful relationships between students and faculty, encouraging active participation in college life. We strive to make every day at college enjoyable and fulfilling, ensuring that each individual feels valued and motivated. Through engaging events, enriching experiences, and supportive interactions, we aim to make our college a place where everyone looks forward to learning, growing, and thriving together.</p>
                    </motion.div>
                    <motion.div className="flex items-center justify-center" variants={cardVariants}>
                        <img src="/Mission.png" alt="Our Mission"
                            className="rounded-lg shadow-lg w-[500px] h-[400px]" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
                    variants={containerVariants}
                >

                    <motion.div className="flex flex-col justify-center" variants={cardVariants}>
                        <Card>
                            <CardHeader>
                                <CardTitle className='text-3xl'>
                                    Our Vision
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                We envision creating an inclusive and dynamic college environment that fosters engagement and positivity.
                                Our goal is to cultivate a campus where every student and faculty member feels a sense of belonging and purpose.
                                We are committed to breaking down barriers and encouraging diverse perspectives, ensuring that everyone has the opportunity
                                to contribute and thrive. By promoting open communication and collaborative efforts,Our vision is to inspire a community where learning is a shared journey, and where both students and faculty
                                are excited to participate in activities that enrich their personal and academic lives. Through this vision, we aspire to
                                create a college culture that is vibrant, supportive, and forward-thinking.
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div className="flex flex-col justify-center" variants={cardVariants}>
                        <Card>
                            <CardHeader>
                                <CardTitle className='text-3xl'>
                                    Our Values
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Our core values are centered around creating a positive and supportive college community where respect
                                , collaboration, and joy are paramount. We believe in fostering an environment where every individua
                                l is treated with dignity and understanding, encouraging open dialogue and mutual respect. Collaborat
                                ion is at the heart of our approach, as we strive to work together, share ideas, and support one anothe
                                in our academic and personal endeavors. Joy is integral to our college experience, as we recognize the im
                                portance of celebrating achievements, having fun, and maintaining a positive outlook. These values guide us
                                in building a campus culture where everyone feels empowered, engaged, and enthusiastic about their journey at college.

                            </CardContent>
                        </Card>
                    </motion.div>

                </motion.div>
            </motion.div>
            <hr />
        </div>
    );
};

export default About;
