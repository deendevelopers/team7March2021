import React from "react";
import { BaseLayout } from "../../layouts/base-layout";
import { Button } from "../../components";

type AccountProps = {
  onSubmit: ({ username }) => void;
};

export const Account = ({ onSubmit }: AccountProps) => {
  const handleSubmit = (e) => {
    const { username } = e.target.elements;
    console.log({ username: username.value });
    e.preventDefault();
    onSubmit({ username: username.value });
  };
  return (
    <BaseLayout>
      <div className="container mx-auto">
        <div className="flex justify-center px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center">
            <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="lg:px-8 pb-12 text-2xl font-bold">
                Account Information
              </h3>
              <div className="flex lg:px-8">
                <span>
                  Congratulations! You now have full access to the the
                  noticeboard!
                </span>
              </div>
              <div className="flex justify-start gap-4 lg:px-8">
                <div className="bg-gray-300 w-20 h-20 my-10"></div>
                <div className="my-10 flex flex-col">
                  <span className="font-bold text-black">
                    Add a cover photo.
                  </span>
                  <span className="font-light text-black text-sm">
                    {" "}
                    Add a photo...
                  </span>
                </div>
              </div>
              <form className="lg:px-8" onSubmit={handleSubmit}>
                <div className="my-10 flex flex-col">
                  <label
                    className="block mb-2 font-bold text-black flex flex-col"
                    htmlFor="profile-name"
                  >
                    <span className="lg:py-2">Add a profile name</span>
                    <span className="font-light text-black text-sm lg:py-2">
                      {" "}
                      This will be shown on your profile. Think about how you
                      want people to see you!
                    </span>
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Add your name"
                  />
                  <Button>Change profile name</Button>
                </div>
                <div className="my-10 flex flex-col">
                  <label
                    className="block mb-2 font-bold text-black flex flex-col"
                    htmlFor="location"
                  >
                    <span className="font-bold text-black lg:py-2">
                      Your community noticeboard
                    </span>
                    <span className="font-light text-black text-sm lg:py-2">
                      {" "}
                      This will be your default board
                    </span>
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="location"
                    type="text"
                    placeholder="location"
                  />
                </div>

                <Button type="submit">Save</Button>

                <div className="flex justify-center">
                  <a className="font-light text-gray-500 underline  py-6 lg:py-12">
                    Skip for now.
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
