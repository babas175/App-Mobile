import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import base64 from 'react-native-base64';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [token, setToken] = useState('');
  const navigation = useNavigation(); 
  const handleLogin = async () => {
    try {
      const encodedToken = base64.encode(`${token}:x-oauth-basic`);

      const response = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Basic ${encodedToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        navigation.navigate('buscarUser' );
      } else {
        Alert.alert('Erro', 'Token inválido. Verifique seu token de acesso do GitHub.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/practice.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Token de Acesso do GitHub"
        placeholderTextColor="#999"
        value={token}
        onChangeText={(text) => setToken(text)}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 350,
    height: 160,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 16,
  },
  infoText: {
    color: '#fff',
    marginTop: 16,
  },
  input: {
    height: 50,
    borderColor: '#fff',
    borderBottomWidth: 2,
    marginBottom: 16,
    padding: 6,
    width: '70%',
    color: '#fff',
  },
  loginButton: {
    backgroundColor: '#2980b9',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
});
