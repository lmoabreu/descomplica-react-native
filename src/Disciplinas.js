import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const Disciplinas = () => {

    const [disciplina, setDisciplina] = useState('');
    const [disciplinas, setDisciplinas] = useState([]);

    function adicionarItem() {
        if(disciplina) {
            setDisciplinas([...disciplinas, disciplina]);
        }
    }

    function renderizaItem({item}){
        return (
            <View id={item} style={styles.itemContainer}>
                <Text style={styles.item}>{item}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.textInput}
                    value={disciplina}
                    onChangeText={setDisciplina}
                    placeholder="Digite o nome da displina"
                />
                <Button
                    style={styles.button}
                    title="Adicionar"
                    onPress={adicionarItem}
                />
            </View>
            <Text style={styles.title}>Lista de Disciplinas</Text>
            <FlatList
                style={styles.list}
                data={disciplinas}
                renderItem={renderizaItem}
                keyExtractor={item => item.id}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    title: {
        fontSize: 30
    },
    textInput: {
        flex: 3
    },
    button: {
        flex: 2
    },
    list: {
        marginTop: 20
    },
    item: {
        fontSize: 20,
        textAlign: 'center'
    },
    itemContainer: {
        margin: 10
    },
    formContainer: {
        margin: 10,
        flexDirection: 'row'
    }
})

export default Disciplinas;

