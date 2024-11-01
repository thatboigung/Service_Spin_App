import { View, Text, StyleSheet ,Pressable} from 'react-native';
import { Icon } from 'react-native-elements';

function Dashboard() {
  return(
    <View>
        <View style={styles.userProf}>
          <View>
          <Icon name="user-circle" type="font-awesome" size={150} />
           <Text style={{textAlign:'center',marginTop:10,fontSize:20,fontWeight:'600'}}>Tapuwa</Text>
           <Text style={{textAlign:'center'}}>Complete your profile (1/3)</Text>
        </View>
      </View>
       <View style={{padding:20,borderRadius:20}}>
          <Text style={{fontWeight:'600'}}>Reveals</Text>
          <View style={{marginTop:10,height:200,width:'100%',backgroundColor:'rgb(225, 227, 225)'}}>

          </View>
        </View>

        <View style={{padding:20}}>
            <Text style={{fontWeight:'600'}}>Orders </Text>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  userProf:{
    padding:40,
    alignItems:'cenetr',
    display:'flex',
    justifyContent:'center'
  },
});

export default Dashboard;