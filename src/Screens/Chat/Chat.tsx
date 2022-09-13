import React, {useEffect, useState} from "react";
import {StyleSheet,Text, View,TextInput,Pressable,TouchableOpacity,Image,ImageBackground} from "react-native";
import base64 from "react-native-base64";
import AsyncStorage  from "@react-native-async-storage/async-storage";
import {GiftedChat,IMessage,InputToolbar,Actions,Bubble} from 'react-native-gifted-chat'
import firestore from "@react-native-firebase/firestore"
export default function App(){
  const [user, setUser] = useState({});
  const [email,setEmail]=useState('');
  const [nome,setNome]=useState('');
  const [messages, setMessages]=useState([]);

  useEffect(() => {

    getUser(); 
    const subscribe=firestore()
    .collection('chatId')
    .onSnapshot((snapshot)=>{
      snapshot.docChanges().forEach((change)=>{
        if(change.type=="added"){
          let data:any=change.doc.data();
          data.createdAt=data.createdAt.toDate();
          setMessages((prevMessages)=>GiftedChat.append(prevMessages, data)
          );
        }
      });
    });
      return ()=>subscribe();
  },[]);

  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 5,
          borderRadius: 20,
          paddingTop: 5,
        }}
      />
    );
  };
  const renderSend = props => {
   
      const { text, messageIdGenerator, user, onSend } = props;
      return (
        <TouchableOpacity
          style={{
            height: 42,
            width: 42,
            borderRadius: 40,
            backgroundColor: '#005A98',
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 5,
          }}
          onPress={() => {
            if (text && onSend) {
              onSend(
                {
                  text: text.trim(),
                  user,
                  _id: messageIdGenerator(),
                },
                true
              );
            }
          }}
        >
          <Image style={styles.imagem} source={require("../../assets/sendi.png")} />
        </TouchableOpacity>
      );
    }
  const renderActions=(props)=>{

  }
  const renderActi=(props)=>{

  }
  async function getUser(){
    let userLocal = await AsyncStorage.getItem('user');
    if(userLocal) setUser(JSON.parse(userLocal));
  }
  async function handlePress(){
    let _id=base64.encode(email);
    let userLocal ={id: _id, email:email};
    await AsyncStorage.setItem('user', JSON.stringify(userLocal));
    setUser(userLocal);
  }

  function onSend(messages: IMessage[]){
    firestore()
    .collection('chatId')
    .doc(Date.now().toString())
    .set(messages[0]);
  }

    if(Object.keys(user).length == 0){
    return(
     
      <View style={styles.container}>

       <View style={{flexDirection:"row", justifyContent:'center',alignItems:'center'}}>
        
          <Image style={{height:100, width:100,marginLeft:10}} resizeMode="cover"  source={require("../../assets/logo.png")}/>
         
         
          </View> 
          <Text style={styles.title}>ArpChat</Text>
       
        <Text style={styles.label}>Nome</Text>
        <TextInput
          onChangeText={setNome}
          style={styles.input}
          placeholder={'Digite seu nome'}
          placeholderTextColor={'#424242'}
         
          
          // onChangeText={setSenha}
        />
         
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder={'Digite seu e-mail'}
          placeholderTextColor={'#424242'}
          onChangeText={setEmail}
          // onChangeText={setEmail}
        />
       
        <Pressable
          onPress={handlePress}

          style={styles.button} >
          <Text style={styles.textButton}>Entrar</Text>
        </Pressable>
        </View>
   
    );
  }
  return (
    <View style={styles.Chat}>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/tela.png")}
        style={{ flex: 1 }}
      >
        <GiftedChat messages={messages} onSend={(messages)=>onSend(messages)}
         user={{_id: user.id}}
         placeholder="mensagem"
         renderInputToolbar={props => customtInputToolbar(props)}
        renderSend={props => renderSend(props)}
       
       
         />
         </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  
  Chat: {
    flex:1
   
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '500',
    color:'#000',
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    color:'#000',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    color:'#000',
  },
  input: {
    width: '100%',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: '#FFF8E1',
    color: '#424242'
  },
  button: {
    marginTop: 20,
    width: '100%',
    borderRadius: 5,
    padding: 13,
    backgroundColor: '#005A98',
    elevation:4
  },
  
  textButton: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff'
  },
  textLink: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#424242'
  },
  imagem:{
    width:28,
    height:28,
    color: '#fff',
   
  }
})