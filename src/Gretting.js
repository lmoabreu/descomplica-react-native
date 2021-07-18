import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const Gretting = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Meu nome é Lucas</Text>
            <Text style={styles.texto}>Pós-graduação é no Descomplica!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 25,
        textAlign: 'center'
    },
    container: {
        flex: 3,
        justifyContent: 'center'
    }
});

export default Gretting;