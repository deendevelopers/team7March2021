

export type Post = {
  id: string;
  title: string;
  subtitle: string;
  host: string;
  location: string;
  type: 'event' | 'service';
  date: string;
  description: string;
};