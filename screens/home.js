import { View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation })
{
    const irParaReview = () =>
    {
        navigation.navigate('Review Details')
        // navigation.push('Review Details')
        // navigation.pop('Review Details')
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titletext}>Home - Euler JS</Text>
            <Button title='Go to Review' onPress={irParaReview}/>
        </View>
    )
}
