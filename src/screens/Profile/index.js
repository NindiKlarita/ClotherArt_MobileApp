import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const Profile = () => {
  const stories = [
    { id: 's1', imageUrl: 'https://i.pinimg.com/564x/c9/d8/22/c9d82210a7265396b9b641b8af6c2c0c.jpg', title: 'Jawa' },
    { id: 's2', imageUrl: 'https://i.pinimg.com/564x/a0/32/54/a032542d43a1faf3d1ef6c9b3903a6f5.jpg', title: 'Lampung' },
    { id: 's3', imageUrl: 'https://i.pinimg.com/236x/a2/95/c1/a295c1218a4d441a0d3c94afc70e58f0.jpg', title: 'Kalimantan' },
    // Tambahkan cerita sorotan lainnya sesuai kebutuhan
  ];

  const posts = [
    { id: '1', imageUrl: 'https://i.pinimg.com/564x/b5/6a/dc/b56adcf9861035a4e47151c0fcc6804d.jpg' },
    { id: '3', imageUrl: 'https://i.pinimg.com/236x/12/e3/12/12e3123ccd3d58e34de10b10404b37b9.jpg' },
    { id: '2', imageUrl: 'https://i.pinimg.com/564x/f9/8e/39/f98e393d8a8f9c5e500c661d754d8f3a.jpg' },
    { id: '4', imageUrl: 'https://i.pinimg.com/564x/bb/a7/39/bba739e41749d34588659c1e10b2a214.jpg' },
    { id: '5', imageUrl: 'https://i.pinimg.com/564x/f7/ef/a3/f7efa3f112126b45b5f138675da1b298.jpg' },
    { id: '6', imageUrl: 'https://i.pinimg.com/564x/42/32/3a/42323a975a0942374ade8ba08b679e79.jpg' },
    { id: '7', imageUrl: 'https://i.pinimg.com/564x/17/a2/d4/17a2d468970c2293df8ff373c76a40b4.jpg' },
    { id: '8', imageUrl: 'https://i.pinimg.com/236x/5a/5c/b2/5a5cb22c92cc9bb08915d2e4bdcba9af.jpg' },
    { id: '9', imageUrl: 'https://i.pinimg.com/564x/c9/d8/22/c9d82210a7265396b9b641b8af6c2c0c.jpg' },
    // Tambahkan postingan lainnya sesuai kebutuhan
  ];

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/564x/8a/68/4f/8a684f00f1380d43083d26e8af87dcf1.jpg' }} 
        style={styles.coverImage}
      />
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://i.pinimg.com/236x/51/70/99/517099ad6c383b1cfd5aaf098a7c7415.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Nindi Clarita</Text>
        <Text style={styles.seni}>(~~ Desainer ~~)</Text>
      </View>
      <View style={styles.storiesContainer}>
        <Text style={styles.storiesTitle}>Cerita Sorotan</Text>
        <FlatList
          data={stories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.storyItem}>
              <Image source={{ uri: item.imageUrl }} style={styles.storyImage} />
              <Text style={styles.storyText}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <Text style={styles.postsTitle}></Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  profileContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 100,
    left: '50%',
    marginLeft: -75,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white', 
  },
  seni: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white', 
  },
  storiesContainer: {
    marginTop: 120,
    padding: 10,
  },
  storiesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
    color: 'white', 
  },
  storyItem: {
    margin: 5,
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyText: {
    color: 'white', 
    
  },
  postsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 0,
    textAlign: 'center',
    color: 'white', 
  },
  postContainer: {
    flex: 1,
    alignItems: 'center',
  },
  postImage: {
    width: 120,
    height: 120,
    marginTop: 0,
  },
});

export default Profile;
