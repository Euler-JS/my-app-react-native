import React, { useState, useEffect } from 'react';
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

    useEffect(()=>
    {
        fetch(jurisAPI)
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=> console.error(error))
        .finally(()=> setLoading(false))
    }, [])

    const [loading, setLoading] = useState(true)
    const  [reviews, setReview] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: "ll ll ll l", key:'1'},
        { title: 'lucas, Bqqqq', rating: 4, body: "wwwwq vvv ", key:'2'},
        { title: 'Servo, Breath of Fresh Air', rating: 2, body: "aaad rdd", key:'3'},
    ])

    const url = "https://jsonplaceholder.typicode.com/posts"
    const consultareAPI = "https://api.consultare.app/api/"
    const jurisAPI = "https://api.juris.co.mz/api/categorias"
   
    const [data, setData] = useState([])
    const [perguntas, setPerguntas] = useState([])

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titletext}>Buscar respostas a respeito de:</Text>
            {/* <Button title='Go to Review' onPress={irParaReview}/> */}
            { loading ? (<Text>Loading ...</Text>):(
                <FlatList 
                data={data}
                renderItem={({ item }) =>(
                    <TouchableOpacity onPress={()=> navigation.navigate('Juris Pergunas', {id: item.id})}>
                           
                        <Card>
                        <Text style={globalStyles.titletext}>{ item.lei }</Text>
                        <Text style={globalStyles.subtitletext}>{ item.categoria }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            )}
            {/* <FlatList 
                data={reviews}
                renderItem={({ item }) =>(
                    <TouchableOpacity onPress={()=> navigation.navigate('Review Details', item)}>
                           
                        <Card>
                        <Text style={globalStyles.titletext}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            /> */}
        </View>
    )
}
