import React, { useState, useEffect } from 'react';
// import Card from '../views/Card';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import './style.css';
import { useNavigate } from 'react-router-dom';
import CardGrid from '../cardGrid';


export default function Home() {
  const [apiData, setApiData] = useState([]);
  const [isApiDataLoaded,setIsApiDataLoaded] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); 
        setApiData(data);
        setIsApiDataLoaded(true);
      } catch (error) {
        setIsApiDataLoaded(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  const cardClickHandler = (id) => {
    navigate("/article/"+id);
  }
  return (
    isApiDataLoaded ? 
    <CardGrid>
      {apiData.map((article) => (
          <Card className="cards" onClick={() => { cardClickHandler(article["id"]) } } children={article["title"]} />
      ))}
    </CardGrid> :
    <div className="error-container">
      <Card className="error-card" variant="outlined" ><h2>An error occured please try again</h2></Card>
    </div>
  );
};