import { PropsWithChildren } from 'react'


type InfoItemProps = {
  title: string;
  description: string;
  imgSrc: string;
}

const InfoItem = (props: PropsWithChildren<InfoItemProps>) => {
  return (
    <div className="flex items-center flex-row mb-8">
      <img src={props.imgSrc} />
      <div className="text-left ml-5">
        <p className="text-lg font-bold mb-1">{props.title}</p>
        <p className="body">{props.description}</p>
      </div>
    </div>
  );
}

export const InfoSection = () => {
  return (
    <div className="text-center p-10 flex items-center flex-col bg-gray-200">
            <p className="text-md mb-3 font-semibold">Hiya 👋</p>

      <h1 className="text-3xl mb-4 font-black">Welcome to Notice</h1>
      <p className="text-md mb-4 font-semibold">An online Noticeboard for your community and how it can help you.</p>
      <p className="text-md mb-4 font-semibold">Need some support? Find help locally by responding to posts on your Noticeboard</p>
      <p className="text-md mb-10 font-semibold">Keen to help? Post on your local Noticeboard - volunteer what you can</p>


      <div className="flex-row justify-center">
        <InfoItem title="Choose your noticeboard" description="Local areas have their own community Noticeboards. Chose your favourite or set one up!" imgSrc="/icon-1.svg"></InfoItem>
        <InfoItem title="Look at your Noticeboard" description="Find what your community is providing. Everything is voluntary and free - get involved!" imgSrc="/icon-2.svg"></InfoItem>
        <InfoItem title="Volunteer what you can" description="Post notices about ways you can help the community" imgSrc="/icon-3.svg"></InfoItem>
      </div> 
    </div>
  )
}