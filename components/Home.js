import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet,TextInput,Modal,Button ,Pressable} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'; 


const Home = () => {
 const [isMechanicsModalVisible, setIsMechanicsModalVisible] = useState(false);

  const handleOpenMechanicsModal = () => setIsMechanicsModalVisible(true);
  const handleCloseMechanicsModal = () => setIsMechanicsModalVisible(false);
   const navigation = useNavigation();
  return (
    <View style={{minHeight:'100%',backgroundColor:'white'}}>
    

      <View style={stylesHome.userProf}>
          <View>
          <Icon name="user-circle" type="font-awesome" size={150} />
           <Text style={{textAlign:'center',marginTop:10,fontSize:20,}}>Welcome back , <Text style={{fontWeight:'600'}}>Tapuwa</Text> </Text>
           <Text style={{textAlign:'center'}}>Complete your profile (1/3)</Text>
          </View>
      </View>
      <View style={stylesHome.search}>
      <View style={stylesHome.searchInput}>
      <Icon name="search" type="font-awesome" size={25} color='gray' />
      <TextInput
        style={{marginLeft:20}}
        placeholder="Search"
      />
      </View>
      
      </View>

       <View style={stylesHome.services}>
        <Pressable style={stylesHome.service} onPress={handleOpenMechanicsModal}>
          <Text>Mechanics</Text>
        </Pressable>
        <Pressable style={stylesHome.service}>
          <Text>CarShippers</Text>
        </Pressable>
      </View>
    
       <Modal
        animationType="slide" 
        transparent={true} 
        visible={isMechanicsModalVisible} 
        onRequestClose={handleCloseMechanicsModal} 
      >
       <View style={stylesHome.serviceContainer}>
      <Text style={{fontSize:16,fontWeight:'600'}}> View Mechanics </Text>
      <View style={stylesHome.search}>
      <View style={stylesHome.searchInput}>
      <Icon name="search" type="font-awesome" size={25} color='gray' />
      <TextInput
        style={{marginLeft:20}}
        placeholder="Search"
      />
      </View>
      
      </View>
      <Pressable style={stylesHome.svcProf} onPress={() => navigation.navigate('Mechanic')}>
       <Icon name="user-circle" type="font-awesome" size={50} />
       <View>
          <Text style={stylesHome.textName}> Team Chunks</Text>
          <Text style={stylesHome.textDetails}>8mins away - 4.5 ratings </Text>
       </View>
      </Pressable>
      <View style={stylesHome.svcProf}>
       <Icon name="user-circle" type="font-awesome" size={50} />
       <View>
          <Text style={stylesHome.textName}> Levels Grace </Text>
          <Text style={stylesHome.textDetails}>12mins away - 4.5 ratings </Text>
       </View>
      </View>
      <View style={stylesHome.svcProf}>
       <Icon name="user-circle" type="font-awesome" size={50} />
       <View>
          <Text style={stylesHome.textName}> David Bekcham</Text>
          <Text style={stylesHome.textDetails}>18mins away - 4.5 ratings </Text>
       </View>
      </View>
      <View style={stylesHome.svcProf}>
       <Icon name="user-circle" type="font-awesome" size={50} />
       <View>
          <Text style={stylesHome.textName}> Tendai Gure</Text>
          <Text style={stylesHome.textDetails}>21mins away - 4.5 ratings </Text>
       </View>
      </View>
      </View>
      </Modal>

      <View style={{paddingLeft:20}}>
        <Text style={{fontSize:20,fontWeight:'600'}}>Recent Activity </Text>
        <View style={{height:25,width:'80%',backgroundColor:'rgb(222, 220, 220)',borderRadius:8,marginTop:20}}></View>
        <View style={{height:20,width:'90%',backgroundColor:'rgb(222, 220, 220)',borderRadius:8,marginTop:10}}></View>
        <View style={{height:20,width:'95%',backgroundColor:'rgb(222, 220, 220)',borderRadius:8,marginTop:10}}></View>
        <View style={{height:20,width:'80%',backgroundColor:'rgb(222, 220, 220)',borderRadius:8,marginTop:10}}></View>
      </View>

     

    </View>
  );
};

const stylesHome = StyleSheet.create({
  userProf:{
    padding:40,
    alignItems:'cenetr',
    display:'flex',
    justifyContent:'center'
  },
  search:{
      padding:20,
  },
  searchInput:{
    padding:10,
      backgroundColor:'rgb(222, 220, 220)',
      borderRadius:30,
      display:'flex',
      flexDirection: 'row'
  },
  services: {
    padding: 20,
    paddingLeft:30,
    display: 'flex',
    flexDirection: 'row', 
    flexWrap: 'wrap', 
  },
  service: {
    backgroundColor: 'rgb(222, 220, 220)',
    height: 100,
    width: '40%', 
    margin: 10,
    borderRadius:8,
  },
  serviceContainer:{
    padding:20,
    backgroundColor:'white',
    flex:1,
    width:'100%',
    borderRadius:10
  },
  svcProf:{
      display:'flex',
      flexDirection:'row',
      marginTop:10
  },
  textName:{
    fontSize:17,
    fontWeight:'600',
    marginLeft:10
  },
  textDetails:{
    marginLeft:10,
    color:'gray'
  }
})

export default Home;