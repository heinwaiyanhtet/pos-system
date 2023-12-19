// If used in Pages Router, is no need to add "use client"
import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';


const Home = () => {

  const [date, setDate] = useState(null);

  return (
    <div className="card flex justify-content-center">
        <Button label="Check" icon="pi pi-check" />
    </div>
  )
 
  };

export default Home;


