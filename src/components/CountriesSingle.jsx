import { useState, useEffect, React } from "react";
import { Container, Row, Col, Image, Button, Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const CountriesSingle = () => {
  const location = useLocation();
  const country = location.state.country; // stores state of a previous component that links to a Single
  const navigate = useNavigate();
  //const { single } = useParams();
  //const [data, updateData] = useState();

  const [weather, updateWeather] = useState("");
  const [error, updateError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .catch((error) => {
        updateError(error);
      })
      .then((res) => {
        updateWeather(res.data);
        setLoading(false);
      });
  }, [country.capital]);
  if (loading) {
    return (
      <Col className="text-center m-5">
        <Spinner
          animation="border"
          role="status"
          className="center"
          variant="info"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
    );
  }
  return (
    <Container>
      <Row className="m-5">
        <Col>
          <Image
            thumbnail
            src={`https://source.unsplash.com/featured/1600x900?${country.capital}`}
          />
        </Col>
        <Col>
          <h2 className="dispay-4">{country.name.common}</h2>
          <h3>{country.capital}</h3>
          {!error && weather && (
            <div>
              <p>
                Right now it is <strong>{parseInt(weather.main.temp)}</strong>{" "}
                degrees in {country.capital} and{" "}
                {weather.weather[0].description}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="dark"
            onClick={() => {
              navigate("/countries");
            }}
          >
            {" "}
            Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CountriesSingle;
