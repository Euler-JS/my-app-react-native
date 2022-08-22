import { useState } from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';

 export default function AddTodo({addAmigo})
 {
    const [text, setText] = useState('')

    const changeHandler = (val) =>
    {
        setText(val);
    }

    return(
        <View style={styles.header}>
            <TextInput
            placeholder='Digite um nome'
            onChangeText={changeHandler}
            />

           <Button
            title='Adicionar Amigo'
            onPress={()=> addAmigo(text)}
            /> 
        </View>
    )  
 }

 const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor: 'coral'
    },
    title:
    {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    }
})