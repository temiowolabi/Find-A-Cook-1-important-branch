import React, { useState, useEffect } from "react";
import axios from "axios";
import Cook from './Something/Cook'
import './Something/Cook.css'
import { DatePicker, TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'antd/dist/reset.css';


const Homepage = () => {
  const [cooks, setCooks] = useState([]);
  
  useEffect(() => {
    fetchCooks();
  }, []);

  const fetchCooks = async () => {
    try {
      const response = await axios.get("http://localhost:5001/cook/allcooks");
      setCooks(response.data.cooks);
    } catch (error) {
      console.error("Error fetching cooks:", error);
    }
  };
  return (
    <>
    <div>

        <nav className="">
    
        <DatePicker />
        <TimePicker format="HH:mm" minuteStep={5}/>
      
              <form className="search-container">
                <input
                  id="search-bar"
                  type="search"
                  placeholder="Search..."
                  name="search"
                  // value={text}
                  // onChange={handleSearch}
                />
            
                {/* <button
                  className=""
                  type="submit"
                  disabled={true}
                >
                  Search
                </button> */}
              </form>
            </nav>
            </div>
  
      <div class="test-container">
      <div class="profile-info">
      <div class="product-section">
{cooks.map((cook, index) => (
         <Cook key={cook._id} cook={cook}/>
          ))}
       </div>   
       </div>   
</div>
    </>
  );
};

export default Homepage;
