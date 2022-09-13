import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, SafeAreaView, StatusBar,Image, Alert } from "react-native";



const Login = ({ navigation }) => {
  
  const api = 'https://centralvendascamarao.com.br/backend/login.php';//https://centralvendascamarao.com.br/backend/login.php
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function login(handleEmail,handleSenha) {
   
    
  }
   
  
  
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.container}>
       
        <View style={{flexDirection:"row", justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.title}>Central de {'\n'}vendas camarão</Text>
          <Image style={{height:50, width:50,marginLeft:10}} resizeMode="cover"  source={require("../../assets/logo.png")}  />
         
          </View> 
        <Text style={styles.subTitle}>Seja bem vindo</Text>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder={'Digite seu e-mail'}
          placeholderTextColor={'#424242'}
          onChangeText={setEmail}
          // onChangeText={setEmail}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          onChangeText={setSenha}
          style={styles.input}
          placeholder={'Digite sua senha'}
          placeholderTextColor={'#424242'}
          secureTextEntry={true}
          maxLength={10}
          // onChangeText={setSenha}
        />
       
        <Pressable
          onPress={async () =>login(email,senha)}

          style={styles.button} >
          <Text style={styles.textButton}>Entrar</Text>
        </Pressable>

        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
        <Pressable
          android_ripple={{
            color: '#EEEEEE'
          }}
          style={styles.link}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textLink}>Cadastrar</Text>
        </Pressable>
        <Pressable
          android_ripple={{
            color: '#EEEEEE'
          }}
          style={styles.link}
          onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.textLink}>Esqueci a senha</Text>
        </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;


const styles = StyleSheet.create({
  title: {
    fontSize: 27,
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#fff'
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
    backgroundColor: '#FFB74D',
    elevation:4
  },
  link: {
    marginTop: 20,
   
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop:15

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
  }
})