// src/App.js
import React, { useState } from 'react';
import WaifuController from './application/Controller/waifus-controller';
import WaifuView from './infrastructure/View/waifu-view';
import Waifu from './Domain/waifus-domain';
import WaifuRepositoryAdapter from './infrastructure/adapter/waifu-adapter';

export default function App() {
  const [image, setImage] = useState(null);
  const waifu = new Waifu({ waifuRepository: new WaifuRepositoryAdapter() });

  return (
    <>
      <WaifuController waifu={waifu} onImageFetched={setImage} />
      <WaifuView image={image} />
    </>
  );
}
