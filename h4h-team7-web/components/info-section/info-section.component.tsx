import { PropsWithChildren } from 'react'


type InfoItemProps = {
  title: string;
  description: string;
}

const InfoItem = (props: PropsWithChildren<InfoItemProps>) => {
  return (
    <div className="flex items-center flex-col">
      <div className="rounded-full bg-gray-500 w-20 h-20 mb-10"></div>
      <p className="text-2xl">{props.title}</p>
      <p className="body">{props.description}</p>
    </div>
  );
}

export const InfoSection = () => {
  return (
    <div className="text-center p-10 flex items-center flex-col bg-gray-200">
      <h1 className="text-5xl mb-10">How it works</h1>
      <div className="flex justify-center">
        <InfoItem title="Choose your noticeboard" description="This is an introduction item. It has a fixed size so you can change it later"></InfoItem>
        <InfoItem title="See what's on offer" description="This is an introduction item. It has a fixed size so you can change it later"></InfoItem>
        <InfoItem title="...or add a listing" description="This is an introduction item. It has a fixed size so you can change it later"></InfoItem>
      </div> 
    </div>
  )
}