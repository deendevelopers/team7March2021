import firebase from "firebase";
import "./firebase";

import React, { PropsWithChildren, useEffect, useState } from "react";
import { LoginFormValues } from "../components/login-form/login-form.component";
import { RegisterFormValues } from "../components/registration-form/registration-form.component";
import { getPosts } from "./api/post";
import { auth } from "./firebase";
import { PostInterface } from "../models/post";
import { ProfileInterface } from "../models/profile";
import { createPost as apiCreatePost } from "./api/post";
import { GetUserProfileRequest } from "../pages/login";
import {
  createProfile as apiCreateProfile,
  ProfileNotFoundError,
  signInAndGetProfile,
} from "./api/profile";
import { SendMessageRequest } from '../pages/api/post/message';
import { sendMessage } from './api/message';

const initialState: StoreContextState = {
  posts: undefined,
  user: undefined,
  registrationStatus: "none",
  profile: undefined,
  messageSent: false,
};

export const StoreContext = React.createContext<StoreContextValue>({
  ...initialState,
  register: () => {},
  login: () => {},
  createPost: () => {},
  getUserProfile: () => {},
  createUserProfile: () => {},
  saveUser: () => {},
  joinEvent: () => {},
});

type StoreContextState = {
  posts: PostInterface[];
  registrationStatus?: "none" | "user-created" | "user-and-profile-created";
  user?: firebase.User;
  profile?: ProfileInterface;
  messageSent: boolean;
};

type StoreContextActions = {
  register: (values: RegisterFormValues) => void;
  login: (values: LoginFormValues) => void;
  createPost: (values: PostInterface) => void;
  getUserProfile: (values: { authId: string }) => void;
  createUserProfile: (values: ProfileInterface) => void;
  saveUser: (user: firebase.User) => void;
  joinEvent: (postId: string) => void;
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
          user,
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log({ errorCode, errorMessage });
        setState({
          ...state,
        });
        // ..
      });
  };

  const saveUser = (_user: firebase.User) => {
    setState({ ...state, user: _user });
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
          user: undefined,
        });
        // ..
      });
  };

  const createPost = (post: PostInterface) => {
    apiCreatePost(post).then(({ _id }) =>
      setState({ ...state, posts: [...state.posts, { _id, ...post }] })
    );
  };

  const createUserProfile = (values: ProfileInterface) => {
    apiCreateProfile(values).then(({ id }) =>
      setState({
        ...state,
        profile: { ...values, _id: id },
        registrationStatus: "user-and-profile-created",
      })
    );
  };

  const getUserProfile = ({ authId }: GetUserProfileRequest) => {
    signInAndGetProfile(authId)
      .then((profile) => setState({ ...state, profile }))
      .catch((err) => {
        if (err instanceof ProfileNotFoundError) {
          setState({ ...state, registrationStatus: "user-created" });
        }
      });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("Getting posts");
      const posts = await getPosts();
      setState((prevState) => ({
        ...prevState,
        posts: posts.map((p) => ({
          ...p,
          type: Math.random() > 0.5 ? "event" : "service",
        })),
      }));
    };
    if (!state.posts) fetchPosts();
  }, [state.posts]);


  const joinEvent = (postId: string) => {
    console.log(postId);
    const post = state.posts.find(post => `${post._id}` === `${postId}`);
    console.log( { post });

    if (!post) {
      return;
    }

    sendMessage({
      message: `You're attending ${post.title} at ${post.date.toLocaleString()}`,
      mobile: '+447751370598',
    }).then(res => {
      setState({
        ...state,
        messageSent: true,
      })
    })
  }

  const contextValue = {
    ...state,
    login,
    register,
    createPost,
    getUserProfile,
    createUserProfile,
    saveUser,
    joinEvent,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
