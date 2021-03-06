import React, {Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet, Alert, Modal, KeyboardAvoidingView,ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'
export default class Exchange extends Component{
    constructor(){
      super();
      this.state ={
        userId : firebase.auth().currentUser.email,
        item_name:"",
        reasonToRequest:""
      }
    }
  
    createUniqueId(){
      return Math.random().toString(36).substring(7);
    }
  
  
  
    addRequest =(item_name,reasonToRequest)=>{
      var userId = this.state.userId
      var randomRequestId = this.createUniqueId()
      db.collection('requested_books').add({
          "user_id": userId,
          "book_name":item_name,
          "description":reasonToRequest,
          "request_id"  : randomRequestId,
      })
  
      this.setState({
          item_name :'',
          reasonToRequest : ''
      })
  
      return Alert.alert("item Requested Successfully")
    }
  
  
    render(){
      return(
          <View style={{flex:1}}>
            <MyHeader title="Request item"/>
              <KeyboardAvoidingView style={styles.keyBoardStyle}>
                <TextInput
                  style ={styles.formTextInput}
                  placeholder={"enter item name"}
                  onChangeText={(text)=>{
                      this.setState({
                          item_name:text
                      })
                  }}
                  value={this.state.item_name}
                />
                <TextInput
                  style ={[styles.formTextInput,{height:300}]}
                  multiline
                  numberOfLines ={8}
                  placeholder={"Why do you need the item"}
                  onChangeText ={(text)=>{
                      this.setState({
                          reasonToRequest:text
                      })
                  }}
                  value ={this.state.reasonToRequest}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>{this.addRequest(this.state.item_name,this.state.reasonToRequest)}}
                  >
                  <Text>Request</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
          </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )