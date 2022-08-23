import { View, Text} from 'react-native';
import { globalStyles } from '../styles/global';

export default function About()
{
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titletext}>About</Text>
        </View>
    )
}