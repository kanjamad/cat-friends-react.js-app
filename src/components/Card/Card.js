import React from "react";
import "./Card.css";

const Card = ({
  name,
  email,
  id,
  username,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="card-container">
      <img
        alt="robots"
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <div>
        <h2>{name}</h2>
        <p>username: {username}</p>
        <p>email:{email}</p>
        <div>
          <h3>Address</h3>
          <p>street: {address.street}</p>
          <p>suite: {address.suite}</p>
          <p>city: {address.city}</p>
          <p>zipcode: {address.zipcode}</p>
        </div>
        <p>{phone}</p>
        <p>website:{website}</p>
        <ul>
          <li>company : {company.name}</li>
          <li>catchPhrase : {company.catchPhrase}</li>
          <li>bs : {company.bs}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
