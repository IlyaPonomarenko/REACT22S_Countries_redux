import { useState, useEffect, React } from "react";
import { Container } from "react-bootstrap";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const CountriesSingle = () => {
  const location = useLocation();
  const country = location.state.country
  const { single } = useParams();
  const [data, updateData] = useState();
  const [weather, updateWeather] = useState("");
  const countryTest = {
    capital: "Helsinki",
  };
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${countryTest.capital}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        updateWeather(res.data);
      });
  }, [countryTest.capital]);

  console.log("Weather:", weather);
  return (
    <Container>
      <div>{country.name.common}</div>
    </Container>
  );
};

export default CountriesSingle;
