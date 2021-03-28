import firebase from "firebase";
import "./firebase";

import React, { PropsWithChildren, useEffect, useState } from "react";
import { LoginFormValues } from "../components/login-form/login-form.component";
import { RegisterFormValues } from "../components/registration-form/registration-form.component";
import { getPosts } from "./api/post";
import { auth } from "./firebase";
import { PostInterface } from "../models/post";

const initialState: StoreContextState = {
  posts: undefined,
  loggedIn: false,
  registrationSuccess: undefined,
};

export const StoreContext = React.createContext<StoreContextValue>({
  ...initialState,
  register: () => {},
  login: () => {},
});

type StoreContextState = {
  posts: PostInterface[];
  loggedIn: boolean;
  registrationSuccess?: boolean;
  user?: firebase.User;
};

type StoreContextActions = {
  register: (values: RegisterFormValues) => void;
  login: (values: LoginFormValues) => void;
};

type StoreContextValue = StoreContextState & StoreContextActions;

export const StoreContextWrapper = (props: PropsWithChildren<{}>) => {
  const [state, setState] = useState(initialState);

  const register = (values: RegisterFormValues) => {
    console.log("Registering...");
    console.log({ values });

    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setState({
          ...state,
          registrationSuccess: true,
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log({ errorCode, errorMessage });
        setState({
          ...state,
          registrationSuccess: false,
        });
        // ..
      });
  };

  const login = ({ email, password }: LoginFormValues) => {
    console.log("Logging in...");

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log({ user });

        setState({
          ...state,
          loggedIn: true,
          user: user,
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log({ errorCode, errorMessage });
        setState({
          ...state,
          loggedIn: false,
        });
        // ..
      });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("Getting posts");
      const posts = await getPosts();
      setState((prevState) => ({ ...prevState, posts: posts.map(p => ({ ...p, type: Math.random() > 0.5 ? 'event' : 'service' })) }));
    };
    if (!state.posts) fetchPosts();
  }, [state.posts]);

  const contextValue = {
    ...state,
    login,
    register,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
