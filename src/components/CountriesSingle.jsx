import { useState, useEffect, React } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CountriesSingle = () => {
  const { single } = useParams();
  const [data, updateData] = useState();

  useEffect(()=>{},[])
  
  return (
    <Container>
      <div>Single Country will be here</div>
    </Container>
  );
};

export default CountriesSingle;
