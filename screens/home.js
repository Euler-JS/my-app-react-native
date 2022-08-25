import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';

export default function Home({ navigation })
{
    const irParaReview = () =>
    {
        navigation.navigate('Review Details')
        // navigation.push('Review Details')
        // navigation.pop('Review Details')
    }

    const  [reviews, setReview] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: "ll ll ll l", key:'1'},
        { title: 'lucas, Bqqqq', rating: 4, body: "wwwwq vvv ", key:'2'},
        { title: 'Servo, Breath of Fresh Air', rating: 2, body: "aaad rdd", key:'3'},
    ])

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titletext}>Home - Euler JS</Text>
            <Button title='Go to Review' onPress={irParaReview}/>
            <FlatList 
                data={reviews}
                renderItem={({ item }) =>(
                    <TouchableOpacity onPress={()=> navigation.navigate('Review Details', item)}>
                           
                        <Card>
                        <Text style={globalStyles.titletext}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
