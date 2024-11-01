import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image,Pressable} from 'react-native';
import Login from './Login';

function Auth({ navigation }) {
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>

      <View
        style={{
          backgroundColor: 'rgb(56, 66, 252)',
          height: 400,
          display: 'flex',
          paddingTop:100,
          alignItems: 'center',
        }}
      >
       
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>
          ServiceSpin
        </Text>
        <Text style={{ color: 'white' }}>
          Your one-stop solution for all services.
        </Text>


     
      </View>

      <View
        style={{ padding: 20, marginTop: -150,backgroundColor: 'white', borderRadius:20}}>
          < Login />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  iconContainer: {
    width:'100%',
    justifyContent: 'space-between',
    marginTop: 20
  },
  auth:{
    padding:20,
    borderRadius:20,
    backgroundColor:'rgb(245, 245, 245)',
    display:'flex',
    flexDirection:'row',
    marginTop:15,
  },
  textAuth:{
    fontWeight:'600',
    marginLeft:20
  },
  loader:{
    position:'absolute',
    top:'0',
    left:'0',
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    zIndex:1000,
    opacity:'0.5'
  }
});

export default Auth;