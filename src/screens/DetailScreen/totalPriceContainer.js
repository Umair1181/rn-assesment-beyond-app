import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Spacing, Typography} from '../../global';

const TotalPriceContainer = ({price}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.alignment, {flex: 3, alignItems: 'flex-start'}]}>
        <Text style={styles.cobrar}>Total a cobrar:</Text>
        <Text style={styles.tarjeta}>pago con tarjeta</Text>
      </View>
      <View style={[styles.alignment, {flex: 1, alignItems: 'flex-end'}]}>
        <Text style={styles.price}>${price ?? '85'}.00 </Text>
      </View>
    </View>
  );
};

export default TotalPriceContainer;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: Spacing.W_SV_20,
    flexDirection: 'row',
    backgroundColor: '#F6F6FB',
  },
  alignment: {
    justifyContent: 'center',
  },
  cobrar: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.TEXT_COLOR_4,
    color: '#341557',
  },
  tarjeta: {
    fontSize: Typography.FONT_SIZE_13,
    color: Colors.TEXT_COLOR_3,
  },
  price: {
    fontSize: Typography.FONT_SIZE_22,
    color: Colors.TEXT_COLOR_5,
    fontWeight: 'bold',
  },
});
