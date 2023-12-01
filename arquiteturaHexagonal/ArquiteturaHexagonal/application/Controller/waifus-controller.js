import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import FetchWaifuUseCase from '../Use-cases/get-waifu-image';

export default function WaifuController({ waifu, onImageFetched }) {
  const fetchImage = async () => {
    const fetchWaifuUseCase = new FetchWaifuUseCase({ waifu });
    const image = await fetchWaifuUseCase.execute();
    onImageFetched(image);
  };

  return (
    <View style={styles.container}>
      <Button title="Mostrar Waifu" onPress={fetchImage} />
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
