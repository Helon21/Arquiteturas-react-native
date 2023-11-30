import React, { useState } from 'react';
import WaifuController from './Controller/waifus-controller';
import WaifuView from './View/waifus-view';

export default function App() {
  const [image, setImage] = useState(null);

  return (
    <>
      <WaifuController onImageFetched={setImage} />
      <WaifuView image={image} />
    </>
  );
}