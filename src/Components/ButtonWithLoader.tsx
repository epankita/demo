//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

// create a component
interface Props  {
    isLoading: boolean;
    text: string;
     onPress: Function;
     isDisable:boolean
  };
const ButtonWithLoader: React.FC<Props> = ({
    isLoading,
    text,
    onPress,
    isDisable
    
}) => {
    return (
        <TouchableOpacity disabled={isDisable}    onPress={() =>onPress()} style={styles.btnStyle}>

            {!!isLoading ? <ActivityIndicator size="large" color="white" />
                : <Text style={styles.textStyle}>{text}</Text>
            }
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        marginTop:5,
        height: 48,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: 16,
        marginHorizontal:20
    },
    textStyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white'
    }
});

export default ButtonWithLoader;
