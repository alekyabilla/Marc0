import React from 'react';
import {TouchableOpacity,View,StyleSheet,Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component {
  state={
    email:"",
    password:""
  }

   login = () =>{
    console.log("Login button pressed");
  }
   signup = () => {
    console.log("Signup initiated");
  }

  render(){
    

    return (
      <>
      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({email:text})}
        />
        <TextInput
          style={styles.pass}
          placeholder="password..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({password:text})}
        />
        
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.login} style={styles.loginBtn}>
          <Text style={styles.loginText}>
            LOGIN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.signup} style={styles.SignupBtn}>
          <Text style={styles.loginText}>
            SIGN UP
          </Text>
        </TouchableOpacity>

      </View>
      </>
    );
  }
}


const styles = StyleSheet.create({
pass:{
  height:50,
  color:"white",
  width:"100%",
  backgroundColor:"#465881",
  borderRadius:25,
  height:50,
  marginBottom:50,
  justifyContent:"center",
  padding:20,
  marginTop:20
},
container: {
  flex: 1,
  backgroundColor: '#003f5c',
  alignItems: 'center',
  justifyContent: 'center'
},
loginBtn:{
  width:"100%",
  backgroundColor:"#fb5b5a",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginBottom:250,
  color:'white'
},
loginText:{
  color:'white',
  fontWeight:'bold',
  fontSize:22
},
SignupBtn:{
  width:"100%",
  backgroundColor:"#fb5b5a",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:-200,
  color:'white'
},
inputText:{
  height:50,
  color:"white",
  width:"100%",
  backgroundColor:"#465881",
  borderRadius:25,
  height:50,
  marginTop:320,
  justifyContent:"center",
  padding:20,
  paddingTop:10
},
inputView:{
  width:"80%",
  backgroundColor:"#465881",
  borderRadius:25,
  height:50,
  marginTop:350,
  justifyContent:"center",
  paddingTop:20
},
forgot:{
 textAlign:'center',
 paddingBottom:30,
 color:'white',
 fontSize:15
},
container: {
  flex: 1,
  backgroundColor: '#003f5c',
  alignItems: 'center',
  justifyContent: 'center',
}
}
);
