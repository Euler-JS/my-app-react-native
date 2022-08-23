import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text, Alert} from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {nome:"Joao Paulo",id:1},
    {nome:"Lucas",id:3},
    {nome:"Mateus",id:2},
    {nome:"Marcos",id:5},
    {nome:"Paulo",id:4},
    {nome:"Isaias",id:6},
    {nome:"Samuel",id:7},
    {nome:"Moises",id:8},
    {nome:"Rute",id:9},
    {nome:"Saulo",id:10},
    {nome:"Samuel",id:17},
    {nome:"Moises",id:18},
    {nome:"Rute",id:19},
    {nome:"Saulo",id:110},
  ])

  const desativarAmigo = (id) =>
  {
    setTodos((listaAntiga) =>{
      return listaAntiga.filter(amigos => amigos.id != id)
    })
  }

  const addAmigo = (amigo) =>
  {
    if(amigo.length > 3)
    {
        setTodos((listaAntiga)=>{
        return [
          {nome: amigo, id: Math.random().toString()},
          ... listaAntiga
        ]
      })
    }
    else
    {
      Alert.alert('Opa', 'O nome do teu amigo deve ter pelo menos 4 letras.',
      [
        {text:'Ok', onPress:() => console.log('Alert close')}
      ])
    }
    
  }

  
  return (
    <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* todo form */}
          <AddTodo addAmigo={addAmigo}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem = { ({ item }) =>(
                <TodoItem item={item} desativarAmigo={desativarAmigo}/>
              )}
            />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:
  {
    // padding: 40,
  },
  list: {
    margin: 20,
  }

});
