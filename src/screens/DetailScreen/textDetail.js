import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Spacing, Typography} from '../../global';

const HALF_WIDTH_SCREEN =
  Dimensions.get('screen').width / 2 - Spacing.W_SV_20 * 2;
const TextDetail = ({product, setQuantity}) => {
  const [quantity, setLocalQuantity] = useState(1);
  const handlePressCounter = type => {
    if (type == '+') {
      setLocalQuantity(quantity + 1);
    } else {
      setLocalQuantity(quantity - 1 >= 1 ? quantity - 1 : quantity);
    }
  };

  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);

  return (
    <View
      style={{paddingHorizontal: Spacing.W_SV_20, marginTop: Spacing.W_SV_20}}>
      <View style={styles.wrapper}>
        <View style={{flex: 3.7}}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}.00</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              height: 25,
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => handlePressCounter('-')}
              style={[
                styles.roundButton,
                {
                  backgroundColor: Colors.SECONDARY,
                  borderColor: Colors.ORANGE,
                },
              ]}>
              <Text
                style={{
                  color: Colors.PRIMARY,
                  fontSize: Typography.FONT_SIZE_16,
                  fontWeight: '500',
                }}>
                -
              </Text>
            </TouchableOpacity>
            <View
              style={{
                height: 25,
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}>
              <Text style={styles.quantity}>{quantity}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handlePressCounter('+')}
              style={[
                styles.roundButton,
                {
                  backgroundColor: Colors.PRIMARY,
                  borderColor: Colors.PRIMARY,
                },
              ]}>
              <Text
                style={{
                  color: Colors.SECONDARY,
                  fontSize: Typography.FONT_SIZE_16,
                  fontWeight: '500',
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.description}>{product.description}</Text>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignSelf: 'center',
        }}>
        <View style={styles.tagOuter}>
          <Text style={styles.tagLabel}>{product.discountPercentage}%</Text>
          <Text style={styles.tageText}>Discount</Text>
        </View>
        <View style={styles.tagOuter}>
          <Text style={styles.tagLabel}>{product.rating}</Text>
          <Text style={styles.tageText}>rating</Text>
        </View>
        <View style={styles.tagOuter}>
          <Text style={styles.tagLabel}>{product.stock}</Text>
          <Text style={styles.tageText}>stock</Text>
        </View>
        <View style={styles.tagOuter}>
          <Text style={styles.tagLabel}>${product.price}.00</Text>
          <Text style={styles.tageText}>price</Text>
        </View>
        <View style={styles.tagOuter}>
          <Text style={styles.tagLabel}>{product.discountPercentage}%</Text>
          <Text style={styles.tageText}>Discount</Text>
        </View>
        <View style={styles.tagOuter}>
          <Text style={styles.tagLabel}>{product.rating}</Text>
          <Text style={styles.tageText}>rating</Text>
        </View>
      </View>
    </View>
  );
};

export default TextDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: Typography.FONT_SIZE_22,
    color: Colors.PRIMARY,
  },
  price: {
    color: Colors.ORANGE,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: 'bold',
  },
  description: {
    fontSize: Typography.FONT_SIZE_11,
    color: Colors.TEXT_COLOR_2,
    marginVertical: Spacing.W_SV_20,
  },
  wrapper: {
    flexDirection: 'row',
  },
  roundButton: {
    height: 25,
    width: 25,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  quantity: {
    textAlignVertical: 'center',
    color: Colors.PRIMARY,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: '500',
  },
  tagOuter: {
    height: 80,
    width: HALF_WIDTH_SCREEN,
    backgroundColor: '#F6F6FB',
    borderRadius: 20,
    marginBottom: Spacing.W_SV_20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagLabel: {
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.ORANGE,
    fontWeight: '500',
  },
  tageText: {
    fontSize: Typography.FONT_SIZE_13,
    color: Colors.ORANGE,
    fontWeight: '500',
  },
});
