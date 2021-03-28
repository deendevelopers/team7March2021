import { PropsWithChildren } from 'react'


type Props = PropsWithChildren<{
  type?: 'submit',
}>;

export const Button = (props: Props) => {
  return (
  <button
    className="w-full px-4 py-2 text-white bg-pink-400 hover:bg-pink-300 focus:outline-none focus:shadow-outline"
    type={props.type || 'button'}
  >
    {props.children}
  </button>
  );
}