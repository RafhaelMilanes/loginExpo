import {useState} from 'react';
import { Pressable, Text, View, TextInput } from "react-native";
import {styles} from '../src/style'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';
import {auth} from '../src/firebase.config'

export default function NewUser(){
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');

    function newUser(){
        if(userMail === '' || userPass === '' || userRePass===''){
            alert('Todos os campos dever ser preenchidoss');
            return;
        }
        if(userPass !== userRePass){
            alert('a senha e a confirmação não são iguais');
            return;
        }else{
            createUserWithEmailAndPassword(auth, userMail, userPass)
            .then((UserCredential)=>{
                const user = UserCredential.user;
                alert('O Voluntário ' + userMail + ' foi criado. Faça o login');
                router.replace('/');
            })
            .catch((error)=>{
                const errorMessage = error.message;
                alert(errorMessage);
                router.replace('/');
            })
        }
        
    }

    return(
        <View style={styles.container}>
            <Text style={styles.formTitle}>Novo Voluntário</Text>
            <TextInput
            style={styles.formInput}
            placeholder="E-mail de usuário"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            value={userMail}
            onChangeText={setUserMail}
            />
                
            <TextInput
                style={styles.formInput}
                placeholder="Senha de usuário"
                autoCapitalize="none"
                secureTextEntry
                value={userPass}
                onChangeText={setUserPass}
            />

            <TextInput
                style={styles.formInput}
                placeholder="Repita a senha"
                autoCapitalize="none"
                secureTextEntry
                value={userRePass}
                onChangeText={setUserRePass}
            />
            <Pressable
                style={styles.formButton}
                onPress={newUser}
            >
                <Text style={styles.textButton}>
                    Cadastrar
                </Text>
            </Pressable>
        </View>
    );
}