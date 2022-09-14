import React, { useEffect } from 'react'

import axios from 'axios'

const api=`https://api.prokerala.com/v2/astrology/panchang?ayanamsa=1&coordinates=8.088306,77.538452&datetime=2016-06-23T09:07:21-07:00`
const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ZDMyMzUxNi1iOTU0LTQ4YzgtYmRiYi01OWM5NzhjMzg1ODQiLCJqdGkiOiJmYzE3OTEwNWM4ZDY1ZjEyNGE0MmE0ODg1OTk1NWU3YWUzY2JjYWNmZmZlMWU5ODZlNjNiZDRkOWRhM2U5ZWI0ODk0MmJjMTMwNDExMzlhMiIsImlhdCI6MTY2MzE3OTkxNi45ODgwMDgsIm5iZiI6MTY2MzE3OTkxNi45ODgwMSwiZXhwIjoxNjYzMTgzNTE2Ljk4Nzg5Nywic3ViIjoiMjYxMTk1NDItOTgwMi00NjZjLTk1ZGUtYjgyMTVhMGZiZmI4Iiwic2NvcGVzIjpbXSwiY3JlZGl0c19yZW1haW5pbmciOjQ4OTksInJhdGVfbGltaXRzIjpbeyJyYXRlIjo1LCJpbnRlcnZhbCI6NjB9XX0.cgRbh3-mWuwEqiR5qjwzy29leYcGRSUk7xWNZV9MauYJv-mxac-X2mf9t3AuJOCOw55KIYfD38Qq3P76BNPpcjMAbCkXuwuZdejIQSJK0nohe1K0vAp00ySOgEEoRKYjfU_4Itbd9kLhiDuW2wVJQD-jQgZEjz49LgDEjm4jwlfXFcWhH_8pMAUXn7XKqgDTc4JpXwng6o4bIvexz0JAnVDul5jqpPcfxYT4YDSCrllODB8dkY3Iraib9U7EZaJ3hbwsCJfsBHzBtFA6d2VdfInMRjKNUK0fhO7WHrBc2DYDgjfARnMbiEL4jvKqTY-lHMLV95tiRioffGHBSlwFig`;



const Demo = () => {

    useEffect(()=>{
 
     axios.get(api , { headers: { 'Access-Control-Allow-Origin':'www.https://astro-app1.herokuapp.com', 'Authorization': `Bearer ${token}`} })
        .then(res => {
        console.log(res.data);
       
        });
     
      
      },[])



  return (
    <div>demo</div>
  )
}

export default Demo