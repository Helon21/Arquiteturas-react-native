import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import axios from 'axios'; // Importe o axios

export default function WaifuAPI({ onImageFetched }) {
  
  async function getWaifuImage() {
    try {
      const response = await axios.get('https://api.waifu.pics/sfw/waifu');
      return response.data.url;
    } catch (error) {
      console.error(error);
    }
  }

  async function getMegumin(){
    try {
      const response = await axios.get('https://api.waifu.pics/sfw/megumin');
      return response.data.url;
    } catch (error) {
      console.error(error);
    }
  }
  async function getTapas(){
    try {
      const response = await axios.get('https://api.waifu.pics/sfw/slap');
      return response.data.url;
    } catch (error) {
      console.error(error);
    }
  }

  const fetchImage = async () => {
    const image = await getWaifuImage();
    onImageFetched(image);
  };
  const fetchImageMegumim = async () => {
    const image = await getMegumin();
    onImageFetched(image);
  };
  const fetchGifTapas = async () => {
    const image = await getTapas();
    onImageFetched(image);
  }

  return (
    <View style={styles.container}>
      <Button title="Mostrar Waifu" onPress={fetchImage} />
      <Button title="Mostrar Megumin" onPress={fetchImageMegumim} />
      <Button title="Tapas >.<" onPress={fetchGifTapas} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
  });
