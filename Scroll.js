import React, { useEffect, useState } from 'react';

function Scroll() {
  const [imageDump, SetImageDump] = useState([]);
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    let data = await fetch('https://dog.ceo/api/breeds/image/random');
    let images = await data.json();
    console.log(images);
  };
  return <div>HEllo</div>;
}

export default Scroll;
