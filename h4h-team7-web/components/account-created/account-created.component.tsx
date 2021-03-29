import React from "react";
import { BaseLayout } from "../../layouts/base-layout";
import { Button } from "../../components";
 
export const AccountCreated = () => {
  return (
    <BaseLayout>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center">
           
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="lg:px-8 pb-12 text-2xl font-bold">
                Account created!
              </h3>
              <div className="flex lg:px-8">
                <span className="font-light">
                  Congratulations! You now have full access to the the
                  noticeboard!
                </span>
              </div>
              <div className="flex justify-center">
              <img src="/tick.svg" className="my-12"></img>
    
              </div>
              <form className="lg:px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <span className="font-light ">
                  Let's update your account settings.
                </span>
                <div className="my-6 text-center">
                  <Button>
                    Update account
                  </Button>
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
