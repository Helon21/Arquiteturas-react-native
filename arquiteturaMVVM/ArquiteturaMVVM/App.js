import React, { useState } from 'react';
import WaifuView from './View/waifus-view';
import WaifuViewModel from './ViewModel/waifu-view-model';

export default function App() {
  const [image, setImage] = useState(null);
  const waifuVM = new WaifuViewModel(setImage);

  return (
    <>
      <WaifuView image={image} waifuVM={waifuVM} />
    </>
  );
}