import ResCard from "./ResCard";
import "./Body.css";

const Body = (data) => {
  const resList = data.data[0].card.card.gridElements.infoWithStyle.restaurants;
  console.log(resList);
  return (
    <div className="body">
      <div className="card-container container">
        {resList.map((res) => (
          <ResCard key={res.info.id} res={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
