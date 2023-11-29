import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import waifusModel from '../Model/waifus-model';

export default function WaifuController({ onImageFetched }) {
  const fetchImage = async () => {
    const image = await waifusModel.getWaifuImage();
    onImageFetched(image);
  };
  const fetchImageMegumim = async () => {
    const image = await waifusModel.getMegumin();
    onImageFetched(image);
  };
  const fetchGifTapas = async () => {
    const image = await waifusModel.getTapas();
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