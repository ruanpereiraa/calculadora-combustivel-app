import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

import logo from './assets/logo.png';
import { useState } from 'react';

export default function App() {
  const [precoAlcool, setPrecoAlcool] = useState(0);
  const [precogasolina, setPrecoGasolina] = useState(0);

  function calcular() {
    if(precoAlcool && precogasolina) {
      if( (parseFloat)(precoAlcool) / (parseFloat)(precogasolina) < 0.7) {
        alert('Vale mais a pena abastecer com ALCOOL');

      } else {
        alert('Vale mais a pena abastecer com GASOLINA');
      } 
    } else {
      alert ('Oreencha o preço do Alcool e da Gasolina')
    }
    }
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Text style ={styles.tittle}>
        Qual melhor opçao
      </Text >
      
      <Text Style={styles.labelInput}> Alcool (preco por litro); </Text>

      <Text Style={styles.labelInput}> Gasolina (preco por litro); </Text>

      <TextInput style = {styles.input}
       placeholder='Digite o valor do Alcool'
       keyboardType='numeric'
       style={styles.input}
       onChangeText={setPrecoAlcool}/>


      <TextInput style = {styles.input}
       placeholder='Digite o valor da gasolina'
       keyboardType='numeric'
       style={styles.input}
       onChangeText={e => setPrecoGasolina(e.target.value)}
      />
      
    <Text style={styles.labelInput}>
       Gasolina (preco por litro):
    </Text>
      
    <Button title='Calcular' color='#ffd23b' onPress={calcular} 
    onPress ={calcular}
    />


      <StatusBar style="auto" />
</View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },

logo: {
  width: 200,
  height: 100,
  },

tittle: {
  marginTop: 16,
  color: '#fff',
  fontSize: 32,
  fontWeight: 'bold',
},

labelInput: {
  marginTop: 16,
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold'
},

input: {
  marginTop: 16,
  marginBottom: 16,
  backgroundColor: '#fff',
  width: 300,
  height: 50,
  borderRadius: 4,
  padding: 16,
}
});
