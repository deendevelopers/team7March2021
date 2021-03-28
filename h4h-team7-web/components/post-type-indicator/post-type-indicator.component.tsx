
import React from 'react';

type Props = {
  type: 'event' | 'service'
}

const iconMap = {
  event: 'far fa-calendar-alt',
  service: 'fas fa-user-friends'
}

export const PostTypeIndicator = (props: Props) => {

  return (
    <div className="border rounded-md px-3">
      <i className={`${iconMap[props.type]}`}></i>
      <span className="ml-2 uppercase text-xs">{props.type}</span>
    </div>
  );
};