import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


interface Props  {
    label: string;
    placheHolder: string;
    isSecure :boolean;
    keyboardType:string;
    onChangeText: Function
  };
  
const TextInputWithLable : React.FC<Props>= ({
    label,
    placheHolder,
    isSecure,
    onChangeText,
    keyboardType,
    ...props
}) => {
    return (
        <View style={{marginBottom: 16}}>
            <Text style={{
                fontSize: 16,
                marginBottom: 8,
                fontWeight: 'bold',
                marginHorizontal:10
            }}>{label}</Text>
            <TextInput
                placeholder={placheHolder}
                onChangeText={(text:any) =>onChangeText(text)}
                style={styles.inputStyle}
                placeholderTextColor="gray"
                {...props}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    inputStyle: {
        height: 48,
        borderWidth: 1,
        borderColor: 'gray',
        color: 'black',
        paddingHorizontal: 16,
        marginHorizontal:10
        
    }
});

export default TextInputWithLable;
