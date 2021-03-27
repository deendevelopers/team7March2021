export type SuggestedLocation = {
  id: number;
  name: string;
  postcode: string;
}

export type Post = {
  id: number;
  hostId: number;
  title: string;
  description: string;
  location: SuggestedLocation;
  date: Date;
}

export type Profile = {
  id: number;
  username: string;
  // age: number;
  // interests: string[];
  // location: string;
  languages: string[];
  profile_image: string;
}

export type User = {
  id: number;
  email: string;
  password: string;
} | {
  id: number;
  phoneNumber: number;
  password: string;
}