import Head from "next/head";
import { useEffect } from "react";
import { BaseLayout } from "../layouts/base-layout";
import { Post } from "../repository/types";
import styles from "../styles/Home.module.css";

const fakePost: Post = {
  id: 1,
  title: "Title",
  hostId: 1,
  description: "Description",
  location: {
    id: 1,
    name: "Clapham Common",
    postcode: "SW4 1BB",
  },
  date: new Date(),
};

export default function Home() {
  /**
   * Testing creating posts and retrieving
   */
  useEffect(() => {
    const host = window.location.host;
    fetch(`${host}/api/post/create`, {
      method: "POST",
      body: JSON.stringify({
        post: fakePost,
      }),
    })
      .then(console.log)
      .then(() => {
        fetch(`${host}/api/post`)
          .then((res) => res.json())
          .then(console.log);
      });
  }, []);

  return <BaseLayout>Test</BaseLayout>;
}
