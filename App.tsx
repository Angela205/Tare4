/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MemoryGame from './componentes/MemoryGame'; 

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>MEMORY GAME</Text>
      <MemoryGame />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#920301',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
