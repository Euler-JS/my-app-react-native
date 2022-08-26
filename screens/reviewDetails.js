import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Modal, ImageBackground, Image } from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons'

export default function ReviewDetails({ route, navigation }) {
    const jurisAPIPerguntas = "https://api.juris.co.mz/api/perguntas"
    const jurisAPIRespostas = "https://api.juris.co.mz/api/respostas"
    const jurisMediaAPI = "https://api.juris.co.mz"

    useEffect(() => {
        fetch(jurisAPIPerguntas)
            .then((response) => response.json())
            .then((json) => setPerguntas(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        fetch(jurisAPIRespostas)
            .then((response) => response.json())
            .then((json) => setRespostas(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    const { id } = route.params;
    const [loading, setLoading] = useState(true)
    const [perguntas, setPerguntas] = useState([])
    const [respostasEncontradas, setRespostasEncontradas] = useState([])
    const [respostas, setRespostas] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const voltar = () => {
        navigation.goBack()
    }

    const modalRespostas = (perguntaId) => {
        // console.log(respostas.filter((pergunta) => pergunta.pergunta == perguntaId));
        setRespostasEncontradas(respostas.filter((pergunta) => pergunta.pergunta == perguntaId))
        console.log(respostasEncontradas);
        setModalOpen(true)
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide' transparent={true}>
                <View style={globalStyles.modalView}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        style={{ ...globalStyles.modalToggle, ...globalStyles.modalClose }}
                        onPress={() => setModalOpen(false)}
                    />
                    <FlatList
                        data={respostasEncontradas}
                        renderItem={({ item }) => (
                            <View>
                                <Text style={globalStyles.titletext}>{item.titulo}</Text>
                                <Image
                                    source={{
                                        uri: jurisMediaAPI + item.imagem,
                                        cache: 'only-if-cached'
                                    }}
                                    style={{ width: 300, height: 200, resizeMode: 'contain' }}
                                />
                                {item.respostas.map((item) => (
                                    <View>
                                        <Text style={globalStyles.subtitletext}>{item.descricao}</Text>
                                    </View>))
                                }
                            </View>
                        )}
                    />
                </View>
            </Modal>

            {/* <MaterialIcons
                name='add'
                size={24}
                style={globalStyles.modalToggle}
                onPress={() => setModalOpen(true)}
            /> */}
            {loading ? (<Text>Loading ...</Text>) : (
                <FlatList
                    data={perguntas.filter((pergunta) => pergunta.categoria == id)}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => modalRespostas(item.id)}>
                            <Card>
                                <Text style={globalStyles.titletext}>{item.pergunta}</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            )}
            <TouchableOpacity onPress={voltar} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#7b1425",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})