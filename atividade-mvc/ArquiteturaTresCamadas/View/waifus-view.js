import React from 'react';
import { Image, View } from 'react-native';

export default function WaifuView({ image }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
    </View>
  );
}