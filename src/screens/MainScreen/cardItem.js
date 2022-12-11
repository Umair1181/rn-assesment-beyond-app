import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors, Spacing, Typography} from '../../global';

const CardItem = ({item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        Platform.OS == 'android' ? styles.androidShadow : styles.iosShadow,
      ]}>
      {/* image container --START-- */}
      <View style={styles.imageOuter}>
        <Image source={{uri: item?.thumbnail}} style={styles.imagestyles} />
      </View>
      {/* image container --END-- */}
      {/* Text Detail */}
      <View style={styles.detailOuter}>
        <Text numberOfLines={1} style={styles.title}>
          {item?.title}
        </Text>
        <Text numberOfLines={1} style={styles.text}>
          {item?.description}
        </Text>
        <Text style={styles.price}>${item?.price}.00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY,
    height: 100,
    marginBottom: Spacing.W_SV_20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#572D86',
    flexDirection: 'row',
  },
  iosShadow: {
    shadowColor: '#572D86',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  androidShadow: {
    shadowColor: '#572D86',
    elevation: 5,
  },
  imageOuter: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
  },
  imagestyles: {
    width: 80,
    height: 80,
    borderRadius: 15,
    overflow: 'hidden',
  },
  detailOuter: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 10,
    height: 80,
  },
  title: {
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.PRIMARY,
  },
  price: {
    color: Colors.ORANGE,
    fontSize: Typography.FONT_SIZE_16,
  },
});
