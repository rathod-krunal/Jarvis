import { useState } from "react";
import { cards } from "../Data";
import RestroCard from "./RestroCard";

const RestroList = () => {
  const [data, setData] = useState(cards);
  return (
    <div className="restro-list">
      {data.map((list) => {
        return <RestroCard key={list.data.id} listData={list.data} />;
      })}
    </div>
  );
};

export default RestroList;
