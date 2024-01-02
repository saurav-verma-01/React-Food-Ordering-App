import ResCard from "./ResCard";
import "./Body.css";
import { useState } from "react";

const Body = (data) => {
  const allResList =
    data.data[0].card.card.gridElements.infoWithStyle.restaurants;
  const [displayResList, setDisplayResList] = useState(allResList);
  console.log(allResList[2].info.avgRating);
  const filterTopRatedRestraunts = () => {
    const filteredRestraunts = allResList.filter(
      (res) => res.info.avgRating >= 4
    );
    console.log(filteredRestraunts);
    setDisplayResList(filteredRestraunts);
  };

  const showAllRestraunts = () => {
    setDisplayResList(allResList);
  };

  return (
    <div className="body">
      <div className="container">
        <div className="filter">
          <button className="filter-btn" onClick={showAllRestraunts}>
            All Restraunts
          </button>
          <button className="filter-btn" onClick={filterTopRatedRestraunts}>
            Top Rated
          </button>
        </div>
        <div className="card-container ">
          {displayResList.map((res) => (
            <ResCard key={res.info.id} res={res} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
