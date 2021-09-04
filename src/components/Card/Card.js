import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };
  }

  toggleButton = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { name, email, id, username, phone, website, company, address } =
      this.props;

    return (
      <div className="card-container">
        <img
          alt="robots"
          src={`https://robohash.org/${id}?set=set4&size=180x180`}
        />
        <h2>{name}</h2>
        <p>email:{email}</p>
        <h4>
          info{" "}
          <span onClick={this.toggleButton}>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </h4>
        {this.state.showInfo && (
          <section>
            <p>username: {username}</p>
            <h4>Address</h4>
            <p>street: {address.street}</p>
            <p>suite: {address.suite}</p>
            <p>city: {address.city}</p>
            <p>zipcode: {address.zipcode}</p>
            <p>{phone}</p>
            <p>website:{website}</p>
            <ul>
              <li>company : {company.name}</li>
              <li>catchPhrase : {company.catchPhrase}</li>
              <li>bs : {company.bs}</li>
            </ul>
          </section>
        )}
      </div>
    );
  }
}

export default Card;
