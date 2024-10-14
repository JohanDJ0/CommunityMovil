import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer} 
          showsVerticalScrollIndicator={false} 
        >
          <View style={styles.card}>
            <Image
              source={{ uri: "https://w.wallhaven.cc/full/yx/wallhaven-yxd8jk.jpg" }} // Cambia esta URL por la imagen que desees
              style={styles.image}
            />
            <Text style={styles.title}>About Our Services</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt repellat delectus quibusdam consequatur, vel dolore.
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://w.wallhaven.cc/full/yx/wallhaven-yxd8jk.jpg" }} // Cambia esta URL por la imagen que desees
              style={styles.image}
            />
            <Text style={styles.title}>About Our Services</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt repellat delectus quibusdam consequatur, vel dolore.
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://w.wallhaven.cc/full/yx/wallhaven-yxd8jk.jpg" }} // Cambia esta URL por la imagen que desees
              style={styles.image}
            />
            <Text style={styles.title}>About Our Services</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt repellat delectus quibusdam consequatur, vel dolore.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  mainContainer: {
    width: '90%', // Cambia este valor según sea necesario
    height: '80%', // Cambia este valor según sea necesario
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Solo para Android
  },
  scrollContainer: {
    flexGrow: 1, // Permite que el contenido del ScrollView crezca
    padding: 15, // Espaciado alrededor del contenido
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default About;
