/* eslint-disable react/no-unescaped-entities */
"use client";
import BoldCopy from '@/components/animata/text/bold-copy';
import FlightWidget from '@/components/animata/widget/flight-widget';
import Profile from '@/components/animata/widget/profile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { m, motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            delay: 0.3
        }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 } },
};

const memberData = [
    { title: 'Event Coordinator', members: ['Sarvesh Sanghai', 'Megharaj Dandgavhal', 'Snehal Narayankar', 'Kshitij Ghodke'] },
    { title: 'Social Media Coordinator', members: ['Bhavesh Gandhi', 'Abhishek Farande ', 'Aadixh Dugad', 'Aayush Kasliwal'] },
    { title: 'Finance Coordinator', members: ['Riya Jain', 'Harsh Yogesh Randive', 'Harshdeep Dakhore ', 'Chetan Jain'] },
    { title: 'Membership Coordinator', members: ['Rahul Magdum', 'Bhagyodaya Bamgonda', 'Aditi Chavan', 'Ganga Katte', 'Anurag Fursule',] },
    { title: 'Technology Coordinator', members: ['Neel Khot', 'Manoj Pipare', 'Bhumika Kasaliwal', 'Mitali Malwadkar', 'Imran Shaikh'] },
    { title: 'Sports Coordinator', members: ['Shivay Wadhera', 'Abhinandan Babaso Koruche', 'Anushree Sindagi', 'Amita Chavan', 'Hardik Jain'] },
    { title: 'Soft Skills Coordinator', members: ['Sanket Kumbhar', 'Aditya Yevate', 'Vanshita Munot', 'Harsh Battalwar', 'Kushal Taparia'] },
    { title: 'Coding Coordinator', members: ['Yashowardhan Magdum', 'Sakshi Jain', 'Atharv Kemkar', 'Aditya Khavate', 'Manasi Gade'] },
    { title: 'Girls Representative', members: ['Manashree Shahapure', 'Sanskruti Bannore', 'Suvira Patil', 'Samata Chougule', 'Sakshi Shelake'] },
    { title: 'Extra Curriculum Coordinator', members: ['Mrunal Khade', 'Samiksha Kshirsagar', 'Shreya Patil', 'Daksha Narayanpethkar'] },
    { title: 'Class Coordinator', members: ['Vaishnavi Shirgure', 'Akshat Jain', 'Mahak Modi', 'Vinay Guntuk'] },
];
const student = [{ title: 'Student Coordinator', members: ['Vedant Navale', 'Sammed Ukhalkar', 'Prachi Mahindrakar', 'Sneha Patne', 'Akash Purjalkar', 'Soham Kale', 'Dhruval Yadav', 'Aditi V Kulkarni', 'Gouri Kulkarni', 'Priti Korake', 'Pranav Bhojkar', 'Pratiksha Pawar', 'Payal Patil', 'Himanshu Jain', 'Umme Aiman Lalkot', 'Prajot Kondekar', 'Fazeen Patel', 'Srushti Patil', 'Shivam Acham', 'Harshad Jogi', 'Utkarsh Shete', 'Ujjwal Gupta', 'Samruddhi Patil.', 'Anjali Awati'] }]

const MemberCard = ({ title, members }: any) => (
    <motion.div variants={containerVariants}>
        <Card className='hover:scale-105 transition-all'>
            <CardHeader>
                <CardTitle className='text-xl'>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {members.map((member: any) => <p key={member}>{member}</p>)}
            </CardContent>
        </Card>

    </motion.div>
);

const MembersPage = () => {
    return (
        <div>
            <div className="text-center mb-7 ">
                <motion.h1
                    className="text-7xl font-bold mb-4 text-gray-800 dark:text-gray-100"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <BoldCopy text='OUR Team' />
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 md:px-40 px-1"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Meet the talented individuals behind our Events, dedicated to making your experience exceptional. Our team is committed to excellence and innovation.
                </motion.p>
            </div>
            <div className="flex mx-7">
                {student.map(({ title, members }) => (
                    <motion.div
                        key={title}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Card className='transition-all hover:scale-y-110'>
                            <CardHeader>
                                <CardTitle>{title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {members.map((member: any) => (
                                    <p key={member} className="mr-2">{member}</p>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="container mx-auto p-6"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
            >

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {memberData.map(({ title, members }) => (
                        <MemberCard key={title} title={title} members={members} />
                    ))}
                </div>
            </motion.div>
            <div className='w-full flex flex-wrap gap-7 mt-20 items-center justify-center mb-10'>
                <Profile />
                <FlightWidget />
            </div>
        </div>
    );
};

export default MembersPage;
