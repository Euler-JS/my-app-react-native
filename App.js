import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import { useState } from 'react';
import Header from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
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
  
  return (
    <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* todo form */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem = { ({ item }) =>(
                <Text>{item.nome}</Text>
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
    padding: 40,
  },
  list: {
    margin: 20,
  }

});
