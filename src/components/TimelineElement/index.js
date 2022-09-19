import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "./TimelineElement.css";

//  https://stephane-monnot.github.io/react-vertical-timeline/#/

function TimelineElement({icon, title, desc, date}) {
  return (
    <VerticalTimelineElement
      contentStyle={{ color: '#fff' }}
      date={date}
      iconStyle={{ background: "#051825", color: '#fff' }}
      icon={icon}
    >
      <div>
        <div className="font-bold leading-snug tracking-tight mb-1 text-black">
          <span className=" md:hidden font-['Isidora-RegularIt']"> {date}:  </span>{title}
        </div>
        <div className="text-gray-600">
          {desc}
        </div>
      </div>

    </VerticalTimelineElement>
  );
}

export default TimelineElement;
