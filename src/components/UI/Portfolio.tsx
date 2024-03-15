import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'ChatIT',
    img: 'https://api.pikwy.com/web/656c7552ef1858532910061e.jpg',
    desc: 'chatIT is a full functioning realtime chat app with video calling features and more.',
    //   url: 'https://chatit-app.vercel.app/',
  },
  {
    id: 2,
    title: 'Story Streaming',
    img: 'https://api.pikwy.com/web/656c787add55aa6aae2cab2a.jpg',
    desc: 'Story Streaming is a video watching platform. Users can watch any kind of genre or series in story streaming',
  },

  {
    id: 3,
    title: 'NextJS App',
    img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 4,
    title: 'Music App',
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
];
const Portfolio = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <Box ref={containerRef} pos={'relative'}>
      <Box position={'sticky'} top={0} left={0} pt='50px' textAlign={'center'} color='orange' zIndex={'99'}>
        <Text as='h1' fontSize={'36px'} fontWeight={'bold'}>
          Featured Works
        </Text>
        <Box as={motion.div} style={{ scaleX }} height={'10px'} bg='white' />
      </Box>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </Box>
  );
};

export default Portfolio;

const Single = ({ item }: { item: { id: number; title: string; img: string; desc: string } }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 200]);

  return (
    <Box maxW={'1400px'} m='auto' py='5rem' h='100%' overflow={'hidden'}>
      <Flex align={'center'} justify={'center'} w='100%' h='100%' gap={'50px'}>
        <Box flex={1} h='50%' borderRadius={'5px'} overflow={'hidden'} ref={containerRef}>
          <Image alt='project img' src={item.img} objectFit={'cover'} />
        </Box>
        {/* @ts-ignore */}
        <Flex as={motion.div} flex={1} flexDir={'column'} gap='20px' style={{ y }}>
          <Text as='h2' fontWeight={'bold'} fontSize={'72px'}>
            {item.title}
          </Text>
          <Text color={'gray'} fontSize={'20px'}>
            {item.desc}
          </Text>
          <Button bg={'orange'} border={'none'} borderRadius={'10px'} w='200px'>
            See Demo
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
