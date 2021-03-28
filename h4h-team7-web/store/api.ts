import { Post } from './types';




const mockPosts: Post[] = [
  {
    id: '1',
    date: 'Thu 4 MAR • 3:00 pm - 3:30 pm',
    description: 'Coffee and a chat at Costa',
    host: 'host',
    location: 'my-location',
    title: 'Coffee Meetup',
    type: 'event',
    subtitle: 'Subhead'
  },
  {
    id: '2',
    date: 'Thu 4 MAR • 3:00 pm - 3:30 pm',
    description: 'Come and use my printer to print your things',
    host: 'host',
    location: 'Clapham',
    title: 'Printing available',
    type: 'service',
    subtitle: 'Subhead'
  },
  {
    id: '3',
    date: 'Sat 5 MAR • 12:00 am - 2:00 pm',
    description: 'A game of five a side football this Sunday on Clapham Common',
    host: 'host',
    location: 'my-location',
    title: '5 a side football',
    type: 'event',
    subtitle: 'Subhead'
  },
  {
    id: '4',
    date: 'Thu 4 MAR • 3:00 pm - 3:30 pm',
    description: 'A game of five a side football this Sunday on Clapham Common',
    host: 'host',
    location: 'my-location',
    title: '5 a side football',
    type: 'event',
    subtitle: 'Subhead'
  },
];

export const getPosts = (): Post[] => {
  return mockPosts;
};

