import { React, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

function Fetchnews() {
  const [newsdata, setNewsData] = useState([]);

  const news = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=aef36a8874ae406486462f71091f01f9"
      )
      .then((response) => {
        console.log(response);
        setNewsData(response.data.articles);
      });
    // console.log("clicked");
  };
  const goToLink = (a) => {
    window.location.href = a;
  };
  return (
    <div>
      <h1>Top Indian News</h1>
      <div className="container">
        {newsdata.map((value) => {
          return (
            <div className="row">
              <div className="clo-4">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={value.urlToImage} />
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>{value.description}</Card.Text>
                    <Button
                      onClick={() => goToLink(value.url)}
                      variant="primary"
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
      <Button onClick={news}>FetchNews</Button>
    </div>
  );
}

export default Fetchnews;
