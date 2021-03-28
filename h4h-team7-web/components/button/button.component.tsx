import { PropsWithChildren } from 'react'


type Props = PropsWithChildren<{

}>;

export const Button = (props: Props) => {
  return (
  <button
    className="w-full px-4 py-2 font-bold text-white bg-teal-400 hover:bg-teal-300 focus:outline-none focus:shadow-outline rounded-md shadow-md"
    type="button"
  >
    {props.children}
  </button>
  );
}