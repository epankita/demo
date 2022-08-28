import axios from "axios";
const accesskey ='00ce18a7b9460fa8e88d79593f040eb0'

export async function GetAllCountry(name:any) {
  try {
    const response = await fetch("https://restcountries.com/v3.1/name/"+ name, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
}

export async function GetAllWeather(name:any) {
  try {
    const response = await fetch("http://api.weatherstack.com/current?access_key="+accesskey+"&query="+ name, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
}