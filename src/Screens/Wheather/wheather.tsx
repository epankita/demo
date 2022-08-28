import React, { useState } from 'react';
import { View, ScrollView, FlatList, Text, Image } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

const wheather = () => {
    var { params }: any = useRoute();
    const editdata = params.values;
    debugger
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontSize:30}}>Wheather Detail</Text>
                <View style={styles.card} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.cardContent}>
                            <View style={styles.head}>
                                <Text style={styles.title}>Temperature</Text>
                                <Text style={styles.name}> {editdata.current.temperature}</Text>
                            </View>
                            <View style={styles.head}>
                                <Text style={styles.title}>Wind Speed</Text>
                                <Text style={styles.name}> {editdata.current.wind_speed}</Text>
                            </View>
                            <View style={styles.head}>
                                <Text style={styles.title}>Precipitation</Text>
                                <Text style={styles.name}> {editdata.current.precip}</Text>
                            </View>
                            <View style={styles.head}>
                                <Text style={styles.title}>Weather Icon</Text>
                                <Image source={{ uri: editdata.current?.weather_icons[0] }}
                                    style={{
                                        width: 30,
                                        height: 30,
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
        </View>
    );
};


export default wheather;

