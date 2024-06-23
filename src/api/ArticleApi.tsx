import React, { useState, useEffect } from 'react';
import CardGrid from '../views/CardGrid';
import '../views/style.css';
import { useNavigate } from 'react-router-dom';
import ArticleCard from '../views/ArticleCard';
import { Card } from '@mui/material';

const ArticleApi = () => {
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
      <div>
        <CardGrid>
          {apiData.map((article) => (
            <ArticleCard onClick = {()=> {cardClickHandler(article["id"])}}> {article["title"]} /</ArticleCard>
          ))}
        </CardGrid>
      </div> :
        <div style={{margin: 'auto',width: '50%',padding: '10px', marginTop: '5%', textAlign: 'center'}}>
          <Card variant="outlined" style={{
              height: '100px',
              width: '30%',
              marginLeft: '20%',
              textAlign: 'center', 
              marginTop: '5%', 
              padding: '15%',
              background: 'radial-gradient(178.94% 106.41% at 26.42% 106.41%, #FFF7B1 0%, rgba(255, 255, 255, 0) 71.88%), #FFFFFF',
              boxShadow: '0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
          }}><h2>An error occured please try again</h2></Card>
        </div>
    
  );
};

export default ArticleApi;