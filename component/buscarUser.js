import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GithubUserScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
      })
      .then(userData => {
        navigation.navigate('profil', { userData });
      })
      .catch(error => console.error('Erro:', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find a Dev</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        onChangeText={text => setUsername(text)}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#3498db',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '80%',
    borderRadius: 8,
    fontSize: 16,
    color: 'white',
  },
  searchButton: {
    backgroundColor: '#3498db',
    padding: 6,
    borderRadius: 57,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GithubUserScreen;
