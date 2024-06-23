import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.css'

export default function SingleArticle() {
    let { id } = useParams();
    const [apiData, setApiData] = useState([]);
    const [isApiDataLoaded,setIsApiDataLoaded] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles/${id}`);
    
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
    return(
      isApiDataLoaded ?
        <div className="container">
            <Card className="card" variant="outlined" >{apiData["summary"]}</Card>
        </div>
      :
      <div className="error-container">
        <Card className="error-card" variant="outlined" ><h2>An error occured please try again</h2></Card>
      </div>
    );
}