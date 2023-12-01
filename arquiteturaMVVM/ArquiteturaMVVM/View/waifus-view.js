import React from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';

export default function WaifuView({ image, waifuVM }) {
  return (
    <View style={styles.container}>
      <Button title="Mostrar Waifu" onPress={waifuVM.fetchImage} />
      <Button title="Mostrar Megumin" onPress={waifuVM.fetchMegumin} />
      <Button title="Mostrar Tapas" onPress={waifuVM.fetchGifTapas} />
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
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