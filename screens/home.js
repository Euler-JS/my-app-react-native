import { StyleSheet, View, Text} from 'react-native';

export default function Home()
{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        padding:40
    },
    text:
    {
        fontFamily: 'nunito-bold',
        fontSize: 20
    }
})