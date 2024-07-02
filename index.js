// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));

const AlphabetDisplay = () => {
    const [index, setIndex] = useState(0);

    const showNextLetter = () => {
        if (index < alphabet.length - 1) {
            setIndex(index + 1);
        }
    };

    return (
        <View style={styles.alphabetContainer}>
            <View style={styles.item}>
                <Text style={styles.itemText}>{alphabet[index]}</Text>
            </View>
            <Button title="Next" onPress={showNextLetter} />
        </View>
    );
};

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Alphabet Display</Text>
            <AlphabetDisplay />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    alphabetContainer: {
        alignItems: 'center',
    },
    item: {
        margin: 10,
        padding: 20,
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});