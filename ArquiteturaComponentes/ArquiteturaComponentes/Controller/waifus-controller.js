import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import waifusModel from '../Model/waifus-model';
import Botao from '../Componentes/Botao';

export default function WaifuController({ onImageFetched }) {
  const fetchImage = async () => {
    const image = await waifusModel.getWaifuImage();
    onImageFetched(image);
  };

  return (
    <View style={styles.container}>
      <Botao title="Exibir waifu" onPress={fetchImage} />
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