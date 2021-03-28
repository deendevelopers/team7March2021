import React from "react";
import { Button } from "..";

export type RegisterFormValues = {
  email: string;
  password: string;
  phone: string;
};

type Props = {
  onSubmit: (form: RegisterFormValues) => void;
};

const StyledInputDiv = (props) => (
  <div className="flex flex-col mb-4">{props.children}</div>
);

export const RegistrationForm = (props: Props) => {
  const handleSubmit = (e) => {
    const { email, password, phone } = e.target.elements;

    e.preventDefault();
    props.onSubmit({
      email: email.value,
      password: password.value,
      phone: phone.value,
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center ml-0 my-6 lg:text-center">
        <div className="w-full xl:w-3/4 flex justify-center">
          <div className="w-full bg-white rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 ml-8 mb-6 lg:ml-0 text-3xl lg:w-full w-2/3 font-bold">
              Create an account
            </h3>
            <div className="flex px-8 justify-center">
              <span className="">
                Sign up with your email address OR your phone number below.
              </span>
            </div>
            <form
              className="px-8 lg:px-0 pt-6 pb-8 mb-4 bg-white rounded"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 md:flex md:justify-between"></div>

              <StyledInputDiv>
                <label className="text-lg font-semibold" htmlFor="email">
                  Your email address
                </label>
                <input
                  id="email"
                  className="border-b text-lg py-2"
                  type="email"
                  placeholder="Email"
                />
              </StyledInputDiv>
              
              <StyledInputDiv>
                <label className="text-lg font-semibold" htmlFor="phone">
                  Your phone number
                </label>
                <input
                  id="phone"
                  className="border-b text-lg py-2"
                  placeholder="Phone number"
                />
              </StyledInputDiv>
              
              <StyledInputDiv>
                <label className="text-lg font-semibold" htmlFor="password">
                  Your password
                </label>
                <input
                  id="password"
                  className="border-b text-lg py-2"
                  type="password"
                  placeholder="******************"
                />
              </StyledInputDiv>
              
                  <p className="text-xs italic text-red-500 mb-6">
                    Please choose a password.
                  </p>
                
                  <StyledInputDiv>
                <label className="text-lg font-semibold" htmlFor="c_password">
                  Confirm password
                </label>
                <input
                  id="c_password"
                  className="border-b text-lg py-2"
                  type="password"
                  placeholder="******************"
                />
              </StyledInputDiv>
                
              
              <div className="mb-6 text-center">
                <Button type="submit">Register</Button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
