import React, { useEffect, useState } from 'react';

function Scroll() {
  const [imageDump, SetImageDump] = useState([]);

  const fetchImages = async () => {
    var temp = [];
    for (let i = 0; i < 10; i++) {
      let data = await fetch('https://dog.ceo/api/breeds/image/random');
      let images = await data.json();
      temp.push(images);
    }
    SetImageDump([...temp]);
    console.log(imageDump);
  };
  useEffect(() => {
    fetchImages();
  }, []);

  let res =
    Math.ceil(window.scrollY + window.innerHeight) >=
    document.documentElement.scrollHeight
      ? true
      : false;
  if (res) {
    fetchImages();
  }

  let imageData = imageDump.map((img, index) => {
    return (
      <img
        className="imagebox"
        src={img.message}
        width="200px"
        height="200px"
      />
    );
  });
  return <div className="container">{imageData}</div>;
}

export default Scroll;
