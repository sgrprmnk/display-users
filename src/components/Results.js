import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Results = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.results.map((result) => {
          return (
            <div
              key={result.login.uuid}
              className="col-md-4"
              style={{ marginBottom: "2rem" }}
            >
              <Card>
                <Card.Img
                  src={result.picture.large}
                  alt={result.name.first}
                  style={{ width: "18rem", height: "20rem" }}
                />
                <Card.Body>
                  <Card.Title>
                    {result.name.first.length < 10
                      ? `${result.name.first}`
                      : `${result.name.first.substring(0, 15)}...`}{" "}
                    {result.name.last.length < 10
                      ? `${result.name.last}`
                      : `${result.name.last.substring(0, 15)}...`}
                  </Card.Title>
                  <Card.Text>{result.email}</Card.Text>

                  <Button variant="light">
                    <Link
                      to={{
                        pathname: `/result/${result.login.uuid}`,
                        state: { result: result.login.uuid },
                      }}
                    >
                      View Details
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
