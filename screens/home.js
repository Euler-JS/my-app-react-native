import { View, Text} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home()
{
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titletext}>Home - Euler JS</Text>
        </View>
    )
}
