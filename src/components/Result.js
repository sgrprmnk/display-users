import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

class Result extends React.Component {
  state = {
    activeResult: [],
  };
  componentDidMount = async () => {
    const seed = this.props.location.state.result;

    //console.log(seed);
    const req = await fetch(`https://randomuser.me/api/?seed=${seed}`);
    const res = await req.json();
    this.setState({ activeResult: res.results[0] });
    //console.log(res.results[0]);
    //console.log(this.state.activeResult);
  };
  render() {
    const result = this.state.activeResult;
    // console.log(this.props);
    return (
      <div id="contain">
        <div className="container">
          {this.state.activeResult.length !== 0 && (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={result.picture.large}
                alt={result.name.first}
                style={{ width: "38rem", height: "40rem" }}
              />
              <Card.Title className="title">
                <h2>
                  {result.name.first} {result.name.last}
                </h2>
              </Card.Title>
              <ListGroup variant="flush" className="flush">
                <ListGroup.Item>
                  <b>DOB:</b>
                  {result.dob.date}
                </ListGroup.Item>
                <ListGroupItem>
                  <b>Email:</b>
                  {result.email.length < 10
                    ? `${result.email}`
                    : `${result.email.substring(0, 15)}...`}
                </ListGroupItem>
                <ListGroup.Item>
                  <b>Address:</b>
                  <p>{result.location.street.number}</p>
                  <p>{result.location.street.name}</p>
                  <p>{result.location.city}</p>
                  <p>{result.location.state}</p>
                  <p>{result.location.postcode}</p>
                  <p>{result.location.country} </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <p>
                    {" "}
                    <i>
                      <b>Phone:</b>
                      {result.phone}{" "}
                    </i>{" "}
                  </p>
                </ListGroup.Item>
              </ListGroup>
              <Button variant="light">
                <Link to="/">Go Home</Link>
              </Button>
            </Card>
          )}
        </div>
      </div>
    );
  }
}
export default Result;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const Result = () => {
//   const { userid } = useParams();
//   const [result, setResult] = useState([]);
//   useEffect(() => {
//     fetch(`https://randomuser.me/api/${userid}`)
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         setResult(result);
//       });
//   }, []);
//   return (
//     <div>
//       <img src={result.picture.large} alt={result.name.first} />
//     </div>
//   );
// };

// export default Result;
