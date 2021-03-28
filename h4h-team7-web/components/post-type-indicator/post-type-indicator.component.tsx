
import React from 'react';

type Props = {
  type: 'event' | 'service'
}

const iconMap = {
  event: 'far fa-calendar-alt',
  service: 'fas fa-user-friends'
}

const colourMap = {
  event: '#feea63',
  service: '#61daf7',
}

export const PostTypeIndicator = (props: Props) => {

  return (
    <div className={`border rounded-md px-3`} style={{backgroundColor: colourMap[props.type]}}>
      <i className={`${iconMap[props.type]}`}></i>
      <span className="ml-2 uppercase text-xs">{props.type}</span>
    </div>
  );
};