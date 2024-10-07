import React, { useEffect } from 'react';  

const MyComponent = () => {  
    
  useEffect(() => {  
    const fetchData = async () => {  
      const response = await fetch('https://dchat-backend-1.onrender.com');  
      const data = await response.json();  
      console.log(data);  
    };  

    fetchData();  
  }, []);  

  return <div>Check the console for data!</div>;  
};  

export default MyComponent;