import { Box } from '@chakra-ui/react';

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
   return (
      <Box>
         {items.map((item) => (
            <Single item={item} key={item.id} />
         ))}
      </Box>
   );
};

export default Portfolio;

const Single = ({ item }: { item: { id: number; title: string; img: string; desc: string } }) => {
   return <Box>{item.title}</Box>;
};
