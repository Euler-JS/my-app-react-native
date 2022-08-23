import { StyleSheet, View, Text} from 'react-native';

export default function ReviewDetails()
{
    return (
        <View>
            <Text style={styles.container}>Review Details</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        padding:40,
        flex: 1,
        justifyContent: 'center'
    }
})