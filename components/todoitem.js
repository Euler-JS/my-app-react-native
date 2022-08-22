import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
export default function TodoItem({ item, desativarAmigo })
{
    
   return(
        <TouchableOpacity onPress={()=> desativarAmigo(item.id)}>
            <Text style={styles.item}>{item.nome}</Text>
        </TouchableOpacity>       
   )  
}

const styles = StyleSheet.create({
    item:{
      padding:16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: 10  
    },
})