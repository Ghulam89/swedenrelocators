import React, { useState } from "react";

const Tabs = ({ tabs, defaultTab, className }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

    console.log(tabs,'tabks');

  return (
    <div>
      <div className="tw-flex tw-justify-between   tw-px-12 tw-rounded-md tw-border-white tw-border-opacity-20 tw-backdrop-blur-md tw-scroll-container  tw-productOverflow  tw-overflow-x-auto tw-whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            className={`tw-px-4 tw-py-4 ${className} ${
              activeTab === tab.title
                ? "   tw-text-blue  tw-border-b-4 tw-text-xl tw-font-bold"
                : "     tw-text-gray tw-font-bold tw-text-xl"
            }`}
            onClick={() => setActiveTab(tab.title)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.title}
            className={activeTab === tab.title ? "" : "tw-hidden"}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
