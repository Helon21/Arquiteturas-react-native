import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botao = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.botao}>
    <Text style={styles.texto}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#008CBA',
    padding: 10,
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  texto: {
    color: 'white',
    fontSize: 16,
  },
});

export default Botao;