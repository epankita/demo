//import liraries
import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import styles from './styles';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import { GetAllCountry } from "../../constants/http-common";
import { useNavigation } from '@react-navigation/native';

const Home  = ()=> {
  const [name, setName] = useState('');
  const [isLoading, setisLoading] = useState(false)
  const [isDisable, setisDisable] = useState(true)
  const { navigate } = useNavigation()
  const updateData = () => {
    setisLoading(true)
    GetAllCountry(name).then((values: any) => {
      navigate('COUNTRYLIST', { values})
      setisLoading(false)
    })
      .catch(error => console.log(error))

  };
  const changetext = (name: any) => {
    setName(name)
    if (name != '')
      setisDisable(false)
    else
      setisDisable(true)
  }
  return (
    <View style={styles.container}>
      <TextInputWithLabel
        label="Enter country"
        placheHolder='Enter country'
        keyboardType='default'
        onChangeText={(name: any) => changetext(name)}
        isSecure={false}
      />
      <ButtonWithLoader
        text="Submit"
        isDisable={isDisable}
        onPress={() => updateData()}
        isLoading={isLoading}
      />
      
    </View>
  );
};

export default Home;


