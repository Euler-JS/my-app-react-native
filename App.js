import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Euler-JS');
  const [person, setPerson] = useState({nome: 'Joao', idade:27});
  const [pessoas, setPessoa] = useState([
    {nome:"Joao",id:1},
    {nome:"Lucas",id:3},
    {nome:"Mateus",id:2},
    {nome:"Marcos",id:5},
    {nome:"Paulo",id:4},
    {nome:"Isaias",id:6},
    {nome:"Samuel",id:7},
    {nome:"Moises",id:8},
    {nome:"Rute",id:9},
    {nome:"Saulo",id:10},
  ])

  const clickHandler = () =>
  {
    setName('Jesus Love Me');
    setPerson({nome: 'Euler', idade:26})
    setContador(contador + 1);
    setPerson({nome:person.nome, idade: person.idade + 1})
  }

  const desativa = (id) =>
  {
    setPessoa((listaAnterior) =>{
        return listaAnterior.filter(pessoa => pessoa.id != id)
    })
  }

  const [contador, setContador] = useState(1);

  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={pessoas}
        renderItem= {({item})=>(
          <TouchableOpacity onPress={()=> desativa(item.id)}>
            <Text style={styles.text}>{item.nome}</Text>
          </TouchableOpacity>
          
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:40,
    padding:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  text:{
    fontSize:44,
    color: '#60A3D9',
    // marginTop:40,
    padding:20,
    backgroundColor:'#000',
    margin:20
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
