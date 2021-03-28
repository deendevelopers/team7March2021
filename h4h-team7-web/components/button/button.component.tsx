import { PropsWithChildren } from 'react'


type Props = PropsWithChildren<{
  type?: 'submit',
}>;

export const Button = (props: Props) => {
  return (
  <button
    className="w-full px-4 py-2 text-white bg-pink-400 hover:bg-pink-300 focus:outline-none focus:shadow-outline rounded-md"
    type={props.type || 'button'}
    style={{backgroundColor: '#4b5ff6'}}
  >
    {props.children}
  </button>
  );
}