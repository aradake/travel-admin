import './events.css';
import { useLocation } from "react-router-dom";
import React, {useState, useEffect} from 'react';
//import { render } from '@testing-library/react';

const Events = () => { 

  const [posts, setPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    
  const st = location.state;
  const requestData = {type: st.selected, month: st.selectedMonth, year: st.selectedYear, input:st.input};
    const getNewPosts = async () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      };
    
      const response = await fetch('https://travel-tracker-390818.el.r.appspot.com/api/td/us1/travel/view', requestOptions)
      const json = await response.json();
      setPosts(json); 
    };
    getNewPosts();
  }, []);

  return (
      <div className="App">
          <table>
              <tr>
                  <th className="header">Date</th>
                  <th className="header">Cost</th>
                  <th className="header">Distance</th>
              </tr>
                      {
                      
                      posts?.dateCostDistanceList?.map((val, key) => {
                      return <tr key={key}>
                              <td className="header">{val.date}</td>
                              <td className="header">{val.cost} Rs.</td>
                              <td className="header">{val.distance} Km.</td>
                          </tr>
                        
                      })
                      }
              <tr>
                  <th className="total">Total</th>
                  <th className="total">{posts.totalCost} Rs.</th>
                  <th className="total">{posts.totalDistance} Km.</th>
              </tr>
          </table>
      </div>
  );
}


 
export default Events;