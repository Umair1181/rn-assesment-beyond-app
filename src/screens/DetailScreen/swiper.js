import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {Colors} from '../../global';
const SwiperImages = ({images}) => {
  return (
    <>
      {images?.length > 0 ? (
        <Swiper
          key={'images_swiper_products'}
          index={0}
          horizontal={true}
          dot={<View style={styles.dotStyle} />}
          dotColor={Colors.SECONDARY}
          activeDot={<View style={styles.dotActive} />}
          loop={false}
          automaticallyAdjustContentInsets={true}
          removeClippedSubviews={false}
          scrollEnabled={true}>
          {images?.map((item, index) => (
            <View style={styles.slide1} key={`image_1_${index}`}>
              <Image
                key={`_image_1_${index}`}
                source={{uri: item}}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
          ))}
        </Swiper>
      ) : (
        false
      )}
    </>
  );
};

export default SwiperImages;

const styles = StyleSheet.create({
  // wrapper: {flex: 1},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  dotStyle: {
    backgroundColor: Colors.SECONDARY,
    opacity: 0.5,
    width: 10,
    height: 10,
    borderRadius: 15,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 0,
    marginBottom: -20,
  },
  dotActive: {
    backgroundColor: Colors.SECONDARY,
    opacity: 0.9,
    width: 10,
    height: 10,
    borderRadius: 15,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: -20,
  },
});
