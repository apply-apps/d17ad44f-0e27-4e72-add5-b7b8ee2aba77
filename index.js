// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const items = [
    { id: '1', color: 'red' },
    { id: '2', color: 'blue' },
    { id: '3', color: 'green' },
    { id: '4', color: 'red' },
    { id: '5', color: 'blue' },
    { id: '6', color: 'green' },
];

const ColorSortingGame = () => {
    const [selectedColor, setSelectedColor] = useState('');

    const colorBuckets = ['red', 'blue', 'green'];

    const filteredItems = selectedColor ? items.filter(item => item.color === selectedColor) : items;

    const renderItem = ({ item }) => (
        <View style={[styles.item, { backgroundColor: item.color }]}>
            <Text style={styles.itemText}>{item.color}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.bucketContainer}>
                {colorBuckets.map(bucket => (
                    <TouchableOpacity
                        key={bucket}
                        style={[styles.bucket, { backgroundColor: bucket }]}
                        onPress={() => setSelectedColor(bucket)}
                    >
                        <Text style={styles.bucketText}>{bucket}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <FlatList
                data={filteredItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedColor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bucketContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    bucket: {
        padding: 10,
        borderRadius: 5,
    },
    bucketText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    item: {
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    itemText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default function App() {
    return (
        <SafeAreaView style={appStyles.container}>
            <Text style={appStyles.title}>Color Sorting Game</Text>
            <ColorSortingGame />
        </SafeAreaView>
    );
}

const appStyles = StyleSheet.create({
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
});