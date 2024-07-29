import { motion } from "framer-motion";

const totalAnimationDuration = .5; // total duration for the entire animation in seconds
const totalSteps = 8;
const stepDuration = 0.4; // duration for each step in seconds
const delayBetweenSteps = 0.03; // delay between steps in seconds

const stairAnimation = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%', '0%'],
    },
};

const reverseIndex = (index) => {
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {[...Array(totalSteps)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: stepDuration, // speed of the stairs
                            ease: 'easeInOut',
                            delay: reverseIndex(index) * delayBetweenSteps, // speed of individual bar
                        }}
                        className="h-full w-full bg-white relative"
                    />
                );
            })}
        </>
    );
};

export default Stairs;
