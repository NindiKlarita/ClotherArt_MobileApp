import React, {useState} from 'react';
import {ScrollView, ImageBackground, Modal, TouchableWithoutFeedback, StyleSheet, TextInput, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {Element3, Receipt21, Clock, Notification, SearchNormal, ArrowRight2} from 'iconsax-react-native';
import {BlogList, CategoryList} from '../../assets/theme';
import { fontType, colors } from '../../assets/theme';
import { ListHorizontal, ItemSmall } from './src/components';

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchPress = (text) => {
    setSearchText(text);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleProfilePress = () => {
    toggleModal();
  };

  const handleEditProfile = () => {
    toggleModal();
    // Tambahkan kode untuk tindakan edit profil di sini
  };

  const handleLogout = () => {
    toggleModal();
    // Tambahkan kode untuk tindakan logout di sini
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageBanner}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              
            </View>
            <View style={styles.notificationContainer}>
              <Notification color={colors.black()} variant="Linear" size={24} />
            </View>
            <View style={styles.profileContainer}>
              <TouchableOpacity onPress={handleProfilePress}>
                <Image
                  source={{
                    uri: 'https://templates.iqonic.design/sofbox-admin/sofbox-dashboard-html/html/images/user/1.jpg',
                  }}
                  style={styles.profileImage}
                />
              </TouchableOpacity>
            </View>


          </View>
          <View style={styles.header}>
            <Text style={styles.title}>CLOTHER ART</Text>
          </View>
          <View style={{ paddingHorizontal: 24, marginTop: 10, }}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.input}
                placeholder="Cari Baju Adat"
                onChangeText={handleSearchPress}
                value={searchText}
                placeholderTextColor="gray"
              />
              
            </View>

          </View>
        </View>  
        <FlatListCategory />  
        <KategoriBaju />  
        <BajuPopuler />
        <JelajahiBerdasarkanDaerah />
        
      </ScrollView>
      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Profil Anda</Text>
              <TouchableOpacity onPress={handleEditProfile}>
                <Text style={styles.modalItem}>Edit Profil</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.modalItem}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.modalItem}>Batal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>

  );
};

const BajuPopuler = () => {
  return (
    <View style={styles.headerSeniPopuler}>
      <View style={styles.seniPopulerTitleContainer}>
        <Text style={styles.textSeni}>Baju Adat Terpopuler</Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
      </View>
     

      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 20 }}>
          <View style={{ ...bajuPopuler.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={bajuPopuler.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/originals/1a/e5/fb/1ae5fb2639db151760b7f9ffb7bac565.jpg',
              }}
            >
              <View style={bajuPopuler.cardContent}>
                <View style={bajuPopuler.textContainer}>
                  <Text style={bajuPopuler.cardTitle}>Adat Manggarai</Text>
                </View>
                <Receipt21
                color={colors.grey(0.6)}
                variant="Linear"
                size={20}
              />
                <Clock
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              </View>
            </ImageBackground>
          </View>
          <View style={bajuPopuler.cardItem}>
            <ImageBackground
              style={bajuPopuler.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/originals/b5/6a/dc/b56adcf9861035a4e47151c0fcc6804d.jpg',
              }}
            >
              <View style={bajuPopuler.cardContent}>
                <View style={bajuPopuler.textContainer}>
                  <Text style={bajuPopuler.cardTitle}>Adat Papua</Text>
               
                </View>
                {/* <View style={bajuPopuler.cardIcon}>
                  <ArrowRight2 color={colors.white()} variant="Linear" size={20} />
                </View> */}
              </View>
            </ImageBackground>
          </View>
          <View style={bajuPopuler.cardItem}>
            <ImageBackground
              style={bajuPopuler.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/originals/fe/96/2f/fe962ff7fe0c8710e0d37942946ad5e4.jpg',
              }}
            >
              <View style={bajuPopuler.cardContent}>
                <View style={bajuPopuler.textContainer}>
                  <Text style={bajuPopuler.cardTitle}>Adat Jawa</Text>
                  
                </View>
                {/* <View style={bajuPopuler.cardIcon}>
                  <ArrowRight2 color={colors.white()} variant="Linear" size={20} />
                </View> */}
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const JelajahiBerdasarkanDaerah = () => {
  return (
    <View style={styles.headerSeniDaerah}>
      <View style={styles.seniPopulerTitleContainer}>
        <Text style={styles.textSeni}>Jelajahi Berdasarkan Provinsi</Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
      </View>

      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 15 }}>
          <View style={{ ...itemSeniDaerah.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemSeniDaerah.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://img.jakpost.net/c/2017/08/02/2017_08_02_30495_1501654303._large.jpg',
              }}
            >
              <View style={itemSeniDaerah.cardContent}>
                <View style={itemSeniDaerah.cardInfo}>
                  <Text style={itemSeniDaerah.cardTitle}>
                    Nusa Tenggara Timur
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemSeniDaerah.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemSeniDaerah.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/originals/6e/f9/c7/6ef9c70e4295957da51c1e015d3b9150.jpg',
              }}
            >
              <View style={itemSeniDaerah.cardContent}>
                <View style={itemSeniDaerah.cardInfo}>
                  <Text style={itemSeniDaerah.cardTitle}>
                    Jawa Timur
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>

        </ScrollView>
      </View>
    </View>
  );
};

const KategoriBaju = () => {
  return (
    
    <View style={styles.headerSeniDaerah}>
      <View style={styles.seniPopulerTitleContainer}>
        <Text style={styles.textSeni}>Kategori Pakaian Adat Indonesia</Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
      </View>
      
      <View style={kategoriBaju.listCard}>
        <View style={kategoriBaju.cardItem}>
          <Image
            style={kategoriBaju.cardImage}
            source={{
              uri: 'https://i.pinimg.com/originals/1d/1d/ca/1d1dcab71227c4042b68114a60094b18.jpg',
            }}
          />
          <View style={kategoriBaju.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{ gap: 5, width: '70%' }}>
               
                <Text style={kategoriBaju.cardTitle}>
                  Pakaian Adat Kebaya atau Surjana
                </Text>
              </View>
              <Receipt21
                color={colors.grey(0.6)}
                variant="Linear"
                size={20}
              />
            </View>
            <View style={kategoriBaju.cardInfo}>
              <Clock
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={kategoriBaju.cardText}>Jawa Timur</Text>
              {/* <Message
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={kategoriBaju.cardText}>89</Text> */}
            </View>
          </View>
        </View>

      </View>
      <View style={kategoriBaju.listCard}>
        <View style={kategoriBaju.cardItem}>
          <Image
            style={kategoriBaju.cardImage}
            source={{
              uri: 'https://i.pinimg.com/originals/e1/31/12/e13112b320f142638275e0157ea481ca.jpg',
            }}
          />
          <View style={kategoriBaju.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{ gap: 5, width: '70%' }}>
                <Text style={kategoriBaju.cardTitle}>
                 Payes Agung Pakaian adat Bali
                </Text>
              </View>
              <Receipt21
                color={colors.grey(0.6)}
                variant="Linear"
                size={20}
              />
            </View>
            <View style={kategoriBaju.cardInfo}>
              <Clock
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={kategoriBaju.cardText}>Bali</Text>
              {/* <Message
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={kategoriBaju.cardText}>89</Text> */}
            </View>
          </View>
        </View>

      </View>
    </View>

  );
};

const kategoriBaju = StyleSheet.create({
  listCard: {
    paddingVertical: 10,
  },
  cardItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: 'white',
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: 'black',
  },
  cardImage: {
    width: 100,
    height: 'auto',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});

const bajuPopuler = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 200,
    height: 300,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    padding: 15,
    position: 'absolute',
    bottom: 0,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '100%',
  },
  cardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 8,
  },
  textContainer: {
    flex: 1,
    paddingRight: 8,
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.black(0.5),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
    width: 30,
    height: 30,
  },
})
const itemSeniDaerah = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 200,
    height: 100,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:('black'),
  },
  imageBanner: {
    backgroundColor: ('black'),
    width: 'auto',
    height: 200,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  headerSeniPopuler: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerSeniDaerah: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginRight: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
  },
  textSeni: {
    fontSize: 20,
    marginRight: 8,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
  },
  notificationContainer: {
    // backgroundColor: 'white',
    // padding: 8,
    // borderRadius: 100
  },
  profileContainer: {
    marginLeft: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButtonContainer: {
    paddingLeft: 14,
  },
  searchButton: {
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    backgroundColor: 'rgba(180, 131, 61, 0.4)',
  },
  icon: {
    margin: 8,
    // marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    paddingHorizontal: 14,
    paddingVertical: 2,
    color: 'black',
    height: 45,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    position: 'absolute',
    top: 60,
    right: 25,
    backgroundColor: 'black',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',

  },
  modalItem: {
    fontSize: 16,
    marginBottom: 12,
    color: 'black',
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 0,
  },
  seniPopulerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})


const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.blue() : colors.white();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default HomeScreen;