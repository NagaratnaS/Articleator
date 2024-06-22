import React, { useState, useEffect } from 'react';
import CardGrid from '../views/CardGrid';
import Card from '../views/Card';
import '../views/style.css';
import { useNavigate } from 'react-router-dom';

const ArticleApi = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles');

        if (!response.ok) { // Check if the response is successful
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); 
        setApiData(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  const cardClickHandler = (id) => {
    navigate("/article/"+id);
  }
  return (
    <CardGrid>
      {apiData.map((article) => (
        <Card onClick = {()=> {cardClickHandler(article["id"])}}> {article["title"]} </Card>
      ))}
    </CardGrid>
  );
};

export default ArticleApi;