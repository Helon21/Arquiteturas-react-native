import React, { useState } from 'react';
import WaifuAPI from './WaifusAPI/waifu-api';
import WaifuDecoracao from './Components/decoracao';



export default function App() {
  const [image, setImage] = useState(null);

  return (
    <>
      <WaifuAPI onImageFetched={setImage} />
      <WaifuDecoracao image={image} />
    </>
  );
}