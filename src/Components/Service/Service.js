import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';



/* https://i.ibb.co/5vCkbqk/music-Lessons.png
https://i.ibb.co/Sn8z9bX/newBooks.png


https://i.ibb.co/1QRGfPm/school-Suffiles.png
https://i.ibb.co/25b4YXL/study-Group.png
https://i.ibb.co/1djMHNd/stuffed-Animals.png
https://i.ibb.co/t2x8dJs/vote-Register.png */

const Service = () => {
     const [services, setServices] = useState([]);
     useEffect(() => {
          fetch('http://localhost:5000/services')
               .then(res => res.json())
               .then(data => {
                    setServices(data)
               })

     }, [])

     return (
          <div>
               <h1>this is service</h1>
               <Row xs={1} md={4} className="g-4">
                    {
                         services.map(service => <SingleService
                              key={service._id}
                              service={service}
                         ></SingleService>)
                    }
               </Row>
          </div>
     );
};

export default Service;

