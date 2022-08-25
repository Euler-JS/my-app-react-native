import { View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation })
{
    const voltar = () =>
    {
        navigation.goBack()
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titletext}>ReviewDetails Screen</Text>
            <Button title='Go to Review' onPress={voltar}/>
        </View>
    )
}