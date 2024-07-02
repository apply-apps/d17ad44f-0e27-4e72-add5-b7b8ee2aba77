// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));

const AlphabetDisplay = () => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
        </View>
    );

    return (
        <FlatList
            data={alphabet}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.list}
        />
    );
};

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
    list: {
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

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Alphabet Display</Text>
            <AlphabetDisplay />
        </SafeAreaView>
    );
}