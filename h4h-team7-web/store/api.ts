import { Post } from './types';




const mockPosts: Post[] = [
  {
    id: '1',
    date: 'today',
    description: 'Coffee and a chat at Costa',
    host: 'host',
    location: 'my-location',
    title: 'Coffee Meetup',
    type: 'event',
  },
  {
    id: '2',
    date: 'today',
    description: 'Come and use my printer to print your things',
    host: 'host',
    location: 'my-location',
    title: 'Printing available',
    type: 'event',
  },
  {
    id: '3',
    date: 'today',
    description: 'A game of five a side football this Sunday on Clapham Common',
    host: 'host',
    location: 'my-location',
    title: '5 a side football',
    type: 'event',
  },
];

export const getPosts = (): Post[] => {
  return mockPosts;
};

