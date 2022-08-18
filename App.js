import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tBold}>Hello Jesus</Text>
      </View>
      <View style={styles.body}>
        <Text>Body </Text>
      </View>
      <Text style={styles.text}>Euler JS on React Native</Text>

      <Text style={styles.text}>2022</Text>
      <Text style={styles.text2}>EquipMoz</Text>
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
  text2:{
    fontSize:140,
    color: '#050A30',
  },
  header:{
    backgroundColor: 'pink',
    padding: 20,
    width: '100%',
  },
  body:{
    backgroundColor: 'yellow',
    width: '100%'
  },
  tBold:{
    fontWeight: 'bold'
  }
});
