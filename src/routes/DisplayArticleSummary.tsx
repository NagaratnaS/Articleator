import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DisplayArticleSummary() {
    let { id } = useParams();
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles/${id}`);
    
            if (!response.ok) {
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
    return(
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
            }}>{apiData["summary"]}</Card>
        </div>
        
    );
}