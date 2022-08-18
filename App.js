import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Euler-JS');
  const [person, setPerson] = useState({nome: 'Joao', idade:27});

  const clickHandler = () =>
  {
    setName('Jesus Love Me');
    setPerson({nome: 'Euler', idade:26})
    setContador(contador + 1);
    setPerson({nome:person.nome, idade: person.idade + 1})
  }

  const [contador, setContador] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tBold}>Hello Jesus</Text>
      </View>

      <View style={styles.body}>
        <Text>Body </Text>
      </View>

      <Text style={styles.text}>{name} on React Native</Text>
      <TextInput 
        placeholder='Digite o teu nome'
        style={styles.input}
        onChangeText={(val) => setName(val)}
      />
      <Text style={styles.text}>{person.nome} {contador} on React Native, {person.idade}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler}/>
      </View>
      <Text style={styles.text}>2022</Text>
      <Text style={styles.text}>EquipMoz</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontSize:44,
    color: '#60A3D9',
  },
  buttonContainer:{
    margin:20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: '80%',
  }

});
