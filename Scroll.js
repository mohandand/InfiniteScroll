import React, { useEffect, useState } from 'react';

function Scroll() {
  const [imageDump, SetImageDump] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [imageDump]);

  const fetchImages = async () => {
    let data = await fetch('https://dog.ceo/api/breeds/image/random');
    let images = await data.json();
    let temp = [];
    temp.push(images);
    SetImageDump([...temp]);
    console.log(imageDump);
  };
  let imageData = imageDump.map((img, index) => {
    return (
      <div className="imagebox" key={index}>
        <img src={img.message} width="200px" height="200px" />
      </div>
    );
  });
  return <div className="container">{imageData}</div>;
}

export default Scroll;
