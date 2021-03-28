import React from "react";
import { BaseLayout } from "../../layouts/base-layout";

export const AccountCreated = () => {
  return (
    <BaseLayout>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')`,
              }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="px-8 pb-12 text-2xl font-bold">
                Account created!
              </h3>
              <div className="flex px-8">
                <span className="font-light text-gray-500">
                  Congratulations! You now have full access to the the
                  noticeboard!
                </span>
              </div>
              <div className="flex justify-center">
              <div className="rounded-full bg-gray-300 w-20 h-20 my-10"></div>
    
              </div>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <span className="font-light text-gray-500">
                  Let's update your account settings.
                </span>
                <div className="my-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-teal-400 hover:bg-teal-300 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Update account
                  </button>
                </div>
                <div className="flex justify-center">
                <a className="font-light text-gray-500 underline">Skip for now.</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
