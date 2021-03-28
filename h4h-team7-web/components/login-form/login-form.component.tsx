import React from "react";

export type LoginFormValues = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (form: LoginFormValues) => void;
};

export const LoginForm = (props: Props) => {
  const handleSubmit = (e) => {
    const { email, password } = e.target.elements;
console.log({ email: email.value, password: password.value })
    e.preventDefault();
    props.onSubmit({ email: email.value, password: password.value });
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-center lg:pl-0 pl-8 lg:ml-0 my-12 lg:text-center">
        <div className="w-full xl:w-3/4 flex justify-center">
          <div className="w-full bg-white rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl lg:w-full w-2/3">
              Already have an account?
            </h3>
            <span className="text-sm font-light text-gray-500">
              Sign in with your login details.
            </span>
            <form
              className="pr-8 lg:pr-0 pt-6 pb-8 mb-4 bg-white rounded flex flex-col"
              onSubmit={handleSubmit}
            >
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
              <div className="mb-4 md:flex md:justify-between lg:flex lg:flex-col">
                
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full">
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
                      Please enter a password.
                    </p>
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 text-white bg-pink-400 hover:bg-pink-300 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-pink-400 align-baseline hover:text-pink-300"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
