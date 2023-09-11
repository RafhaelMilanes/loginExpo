import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, } from 'react-native';
import { styles } from '../src/style';
import {auth} from '../src/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useRouter} from 'expo-router';

export default function App() {
  const [userMail, setUsermail] = useState('');
  const [userPass, setUserPass] = useState('');
  const router = useRouter();

  function replacePass(){
    router.replace('/replacePass');
  }

  function newUser(){
    router.replace('/newUser');
  }

  function userLogin(){
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace('/home');
      })
      .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login no Sistema</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.formInput}
      placeholder='Informe o E-mail'
      keyboardType='email address'
      autoCapitalize='none'
      autoComplete='email'
      value={userMail}
      onChangeText={setUsermail}
      />
      <TextInput style={styles.formInput}
      placeholder='Informe a senha'
      autoCapitalize='none'
      secureTextEntry
      value={userPass}
      onChangeText={setUserPass}
      />

      <Pressable style={styles.formButton}
        onPress={userLogin}
      >
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>

      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}
        onPress={replacePass}
        >
          <Text style={styles.subTextButton}> Esqueci minha senha</Text>
        </Pressable>

        <Pressable style={styles.subButton} onPress={newUser}> 
          <Text style={styles.subTextButton} >Novo usúario</Text>
        </Pressable>
      </View>
    </View>
  );
}


