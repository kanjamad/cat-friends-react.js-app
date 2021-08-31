import React from "react";
import Card from "../Card/Card";
import "./Cardlist.css";

const CardLists = ({ robots }) => {
  return (
    <div className="card-list">
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            name={robots[i].name}
            email={robots[i].email}
            username={robots[i].username}
            id={robots[i].id}
            phone={robots[i].phone}
            website={robots[i].website}
            company={robots[i].company}
            address={robots[i].address}
          />
        );
      })}
    </div>
  );
};

export default CardLists;
