import { View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route, navigation })
{
    const { title, rating, body, key } = route.params;
    console.log(route.params);
    const voltar = () =>
    {
        // navigation.goBack()
        console.log(route.params);
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titletext}>{JSON.stringify(title)}</Text>
            <Text style={globalStyles.titletext}>{JSON.stringify(body)}</Text>
            <Text style={globalStyles.titletext}>{JSON.stringify(rating)}</Text>
            <Button title='Go to Review' onPress={voltar}/>
        </View>
    )
}