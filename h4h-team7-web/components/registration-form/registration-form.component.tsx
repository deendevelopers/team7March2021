import React from "react";
import { Button } from '..';

export type RegisterFormValues = {
  email: string;
  password: string;
	phone: string;
}

type Props = { 
  onSubmit: (form: RegisterFormValues) => void;
}

export const RegistrationForm = (props: Props) => {
  const handleSubmit = (e) => {
    const { email, password, phone } = e.target.elements;

    e.preventDefault();
    props.onSubmit({ email: email.value, password: password.value, phone: phone.value });
  }
 
	return (
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
                Create an account
              </h3>
              <div className="flex px-8">
              <span className="font-light text-gray-500">Sign up with your email address OR your phone number below.</span>
             
              </div>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                <div className="mb-4 md:flex md:justify-between">
                  
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Your email address
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="phone"
                  >
                    Your phone number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="number"
                    placeholder="Phone number"
                  />
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Your password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    <p className="text-xs italic text-red-500">
                      Please choose a password.
                    </p>
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <Button type="submit">Sign Up</Button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-teal-400 align-baseline hover:text-teal-300"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
          
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
};
