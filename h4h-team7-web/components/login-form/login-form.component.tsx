import React from "react";
import { Button } from "../../components";
import MobileAuthPopup from "../firebase/MobileAuthPopup";

export type LoginFormValues = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (form: LoginFormValues) => void;
};

const StyledInputDiv = (props) => (
  <div className="flex flex-col mb-4">{props.children}</div>
);

export const LoginForm = (props: Props) => {
  const handleSubmit = (e) => {
    const { email, password } = e.target.elements;
    console.log({ email: email.value, password: password.value });
    e.preventDefault();
    props.onSubmit({ email: email.value, password: password.value });
  };

  return (
    <div className="container mx-auto mb-4">
      <div className="flex justify-center lg:pl-0 lg:ml-0 lg:text-center">
        <div className="w-full xl:w-3/4 flex justify-center">
          <div className="w-full bg-white rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 pl-8 lg:pl-0 text-3xl lg:w-full w-2/3 font-bold mb-4">
              Already have an account?
            </h3>
            <span className="pl-8 lg:pl-0">
              Sign in with your login details.
            </span>
            <form
              className="pl-8 lg:pl-0 pr-8 lg:pr-0 pt-10 bg-white rounded flex flex-col"
              onSubmit={handleSubmit}
            >
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

              <div className="mb-4 md:flex md:justify-between lg:flex lg:flex-col">
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
              </div>
              <p className="text-sm font-bold mb-8 text-blue-600">
                Having trouble logging in?
              </p>
              <div className="mb-6 text-center">
                <Button type="submit">Sign In</Button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
