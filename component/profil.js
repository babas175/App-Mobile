import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const profil = ({ route }) => {
  const { userData } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: userData.avatar_url }} />
      <Text style={styles.username}>{userData.login}</Text>
      <Text style={styles.name}>{userData.name}</Text>
      <Text style={styles.bio}>{userData.bio}</Text>
      <Text style={styles.followers}>Seguidores: {userData.followers}</Text>
      <Text style={styles.following}>Seguindo: {userData.following}</Text>
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
  avatar: {
    width: '120%', // Usar 100% da largura disponível
    height: 450,    // Altura desejada da imagem
    marginBottom: 45,
    resizeMode: 'cover', // Opção para cobrir completamente a área definida
    
  },
  username: {
    fontSize: 24,
    color: '#3498db',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  followers: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  following: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
});

export default profil;
