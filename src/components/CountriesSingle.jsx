import { useState, useEffect, React } from "react";
import { Container, Row,Col, Image } from "react-bootstrap";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const CountriesSingle = () => {
  const location = useLocation();
  const country = location.state.country; // stores state of a previous component that links to a Single

  //const { single } = useParams();
  //const [data, updateData] = useState();

  const [weather, updateWeather] = useState("");
  const [error, updateError] = useState()

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .catch((error)=>{
        updateError(error)
      })
      .then((res) => {
        updateWeather(res.data);
      });
  }, [country.capital]);

  return (
    <Container>
      <Row className="m-5">
        <Col>
          <Image thumbnail src={`https://source.unsplash.com/featured/1600x900?${country.capital}`}/>
        </Col>
        <Col>
          <h2 className="dispay-4">{country.name.common}</h2>
          <h3>{country.capital}</h3>
        </Col>
        {!error && weather &&(
          <div>
            <p>
              Right now it is <strong>{parseInt(weather.main.temp)}</strong> degrees in {country.capital} and {weather.weather[0].description}
            </p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default CountriesSingle;
