import { View, Text, StyleSheet ,Pressable} from 'react-native';

function Chat(){
  return(
    <View>
    <View style={{padding:20}}>
      <Text style={{padding:15,fontSize:16,backgroundColor:'rgb(205, 207, 204)',borderRadius:30,textAlign:'center'}}>View More Options </Text>
    </View>
      
      <View style={{padding:20}}>
        <View style={styles.chatSender}>

        </View>
        <View style={styles.chatRecver}>
        
        </View>
      </View>
    </View>
  )

};
const styles = StyleSheet.create({
  chatSender:{
    height:100,
    width:300,
    backgroundColor:'rgb(119, 159, 247)',
    borderRadius:20
  },
  chatRecver:{
    height:300,
    width:300,
    marginLeft:'10%',
    backgroundColor:'rgb(118, 247, 111)',
    borderRadius:20,
    marginTop:20
  }

})

export default Chat;