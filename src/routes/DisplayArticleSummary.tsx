import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DisplayArticleSummary() {
    let { id } = useParams();
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles/${id}`);
    
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
      console.log(id);
    return(
        <div>
            {apiData["summary"]}
        </div>
    );
}