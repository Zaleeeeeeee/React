import React, { useState } from "react";

export const GoogleTabs = () => {
  const [currentTab, setCurrentTab] = useState("ALL");

  let tabs = ["all", "images", "videos", "map", "support"];

  return (
    <div>
      Current Tab: {currentTab}
      <ul className="flex gap-6 m-8 ">
        {tabs.map((el) => {
          return (
            <li
              className="cursor-pointer"
              onClick={() => {
                setCurrentTab(el.toUpperCase());
              }}
            >
              {el}
            </li>
          );
        })}
      </ul>
      <div className="p-5 border m-4 bg-slate-50">
        {currentTab === "ALL" && <p>All Contents</p>}
        {currentTab === "IMAGES" && <p>Image Contents</p>}
        {currentTab === "VIDEOS" && <p>Video Contents</p>}
        {currentTab === "MAP" && <p>Map Contents</p>}
        {currentTab === "SUPPORT" && <p>Support Contents</p>}
      </div>
    </div>
  );
};
