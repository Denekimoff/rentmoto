import React, { useState } from 'react';
import TabItem from './TabItem';

type TabsType = {
    children: any,
    defaultIndex: Number,
}

export default function Tabs ({ children, defaultIndex = 0 }: TabsType) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const tabItems = children.filter((el: { type: { name: string; }; }) => el.type.name === 'TabItem');

  return (
    <div className="tabs-wrapper">
      <div className="tab-menu">
        {tabItems.map((tab: { props: { label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }; }, index: React.SetStateAction<Number>) => (
          <button
            key={`tab-btn-${index}`}
            onClick={() => setActiveIndex(index)}
            className={index === activeIndex ? 'focus' : ''}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="tab-view">
        {tabItems.map((tab: { props: { children: React.ReactNode[]; }; }, index: Number) => (
          <TabItem key={`tab-content-${index}`} isActive={index === activeIndex}>
            {tab.props.children}
          </TabItem>
        ))}
      </div>
    </div>
  );
};