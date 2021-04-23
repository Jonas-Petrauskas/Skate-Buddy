import React, { useState, useEffect } from 'react';

const dataUrl = 'http://192.168.1.219:3003/list';


export default function ApiService() {
  const getting = fetch(dataUrl)
  const json = await getting.json()
  return json;

  // const [data, setData ] = useState([]);

  // const gettingData = async () => {
  //   let response = await fetch(dataUrl);
  //   let json = await response.json()
  //   // setData(json)
  //   return json
  // }
  
  // useEffect(() => {
  //   gettingData()
  // },  [])
  // return json



}