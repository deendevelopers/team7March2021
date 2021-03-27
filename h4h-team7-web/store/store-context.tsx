import React, { PropsWithChildren, useEffect, useState } from 'react';
import { getPosts } from './api';
import { Post } from './types';


const initialState: State = {
  posts: [],
};

export const StoreContext = React.createContext<State>(initialState);

type State = {
  posts: Post[];
}

export const StoreContextWrapper = (props: PropsWithChildren<{}>) => {  
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const posts = getPosts();
    setState((prevState) => ({ ...prevState, posts }));
  }, []);

  return (
    <StoreContext.Provider value={state}>{props.children}</StoreContext.Provider>
  );
};
