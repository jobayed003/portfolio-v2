import { Box, Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Dispatch, SetStateAction, useState } from 'react';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex
      as={motion.div}
      flexDir={'column'}
      justify={'center'}
      color='#000'
      animate={open ? 'open' : 'closed'}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <Box
        as={motion.div}
        w={'400px'}
        position={'fixed'}
        sx={{ top: 0, left: 0, bottom: 0 }}
        bg='#fff'
        variants={variants}
        zIndex={100}
      >
        <Links />
      </Box>
      <ToggleButton setOpen={setOpen} />
    </Flex>
  );
};

export default Sidebar;

const ToggleButton = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <Button
      onClick={() => setOpen((prev) => !prev)}
      pos={'fixed'}
      left={'25px'}
      top='25px'
      bg={'transparent'}
      border={'none'}
      borderRadius={'50%'}
      w={'50px'}
      h={'50px'}
      fontSize={'12px'}
      color={'#000'}
      zIndex={101}
    >
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <motion.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <motion.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </Button>
  );
};

const Links = () => {
  const items = ['Homepage', 'Services', 'Portfolio', 'Contact', 'About'];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <Flex
      as={motion.div}
      flexDir={'column'}
      align={'center'}
      gap='20px'
      justify='center'
      height='100%'
      width='100%'
      fontSize={{ md: '40px', base: '20px' }}
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          href={'#' + item}
          key={item + Math.random()}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </Flex>
  );
};
