import { StyleSheet, View, Text} from 'react-native';

export default function Home()
{
    return (
        <View>
            <Text style={styles.container}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        padding:40
    }
})