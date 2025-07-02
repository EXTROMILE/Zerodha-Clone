import React, { useState } from "react";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import WatchlistAction from "./WatchListAction";

const WatchListItem = ({ stock }) => {
  const [showWatchListItem, setShowWatchListItem] = useState(false);

  const handleMouseEnter = (event) => {
    setShowWatchListItem(true);
  };
  
  const handleMouseLeave = (event) => {
    setShowWatchListItem(false);
  };

  return (
    <>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="itemInfo">
            <span className="precent">{stock.percent}</span>
            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="down" />
            )}
            <span className="price">{stock.price}</span>
          </div>
        </div>
        {showWatchListItem && <WatchlistAction uid={stock.name} />}
      </li>
    </>
  );
};

export default WatchListItem;
