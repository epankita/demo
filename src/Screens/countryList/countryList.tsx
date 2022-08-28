import React, { useState } from 'react';
import { View, ScrollView, FlatList, Text, Image } from 'react-native';
import styles from './styles';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import { useRoute } from '@react-navigation/native';
import { GetAllWeather } from "../../constants/http-common";
import { useNavigation } from '@react-navigation/native';

const countryList = () => {
    const { navigate } = useNavigation()
    var { params }: any = useRoute();
    const editdata = params.values;
    const [listData, setListData] = useState(editdata);
    const [isLoading, setisLoading] = useState(false);
    const [isDisable, setisDisable] = useState(false);
    const updateData = (item: any) => {
        setisLoading(true)
        GetAllWeather(item.capital).then((values: any) => {
            setisLoading(false)
            navigate('WHEATHER', { values })
        })
            .catch(error => console.log(error))
    };
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <FlatList
                        data={listData}
                        ListEmptyComponent={() => (!listData.length ?
                            <Text style={{
                                textAlign: 'center', justifyContent: 'center', alignContent: 'center',
                                alignItems: 'center', fontSize: 15, color: 'red'
                            }}>No Items to Display</Text>
                            : null)}
                        keyExtractor={item => item.Id}

                        renderItem={({ item }) => {
                            const capital = item.capital
                            return (
                                <View key={item.Id} style={styles.card} >

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                        <View style={styles.cardContent}>

                                            <View style={styles.head}>
                                                <Text style={styles.title}>Capital</Text>
                                                <Text style={styles.name}> {item.capital}</Text>
                                            </View>
                                            <View style={styles.head}>
                                                <Text style={styles.title}>Population</Text>
                                                <Text style={styles.name}> {item.population}</Text>
                                            </View>
                                            <View style={styles.head}>
                                                <Text style={styles.title}>Latitude, Longitude</Text>
                                                <Text style={styles.name}> {item.latlng}</Text>
                                            </View>
                                            <View style={styles.head}>
                                                <Text style={styles.title}>Flag</Text>
                                                <Image source={{ uri: item.flags.png }}
                                                    style={{
                                                        width: 30,
                                                        height: 30,
                                                    }}
                                                />
                                            </View>

                                        </View>
                                    </View>
                                    <ButtonWithLoader
                                        text="Capital Weather"
                                        isDisable={isDisable}
                                        onPress={() => updateData({ capital })}
                                        isLoading={isLoading}
                                    />
                                </View>
                            )
                        }} />

                </View>
            </ScrollView>
        </View>
    );
};


export default countryList;

