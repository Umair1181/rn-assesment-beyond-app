import {StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, Typography} from '../../global';
import SvgContainer from './svgContainer';
import SVG_STRINGS from '../../assets/svgs';
const Header = ({leftIcon, leftPress, headerText, rightIcon}) => {
  return (
    <>
      <View style={{height: 70}} />
      <View
        style={[
          styles.container,
          Platform.OS == 'android' ? styles.iosShadow : styles.androidShadow,
        ]}>
        {/* Left Box --START-- */}
        <TouchableOpacity
          style={[styles.alignment, {flex: 1}]}
          onPress={leftPress}>
          {leftIcon && <SvgContainer svg={SVG_STRINGS.backIcon()} size={18} />}
        </TouchableOpacity>
        {/* Left Box --END-- */}

        {/* Center BOX --START-- */}
        <View style={[styles.alignment, {flex: 4}]}>
          {headerText && <Text style={styles.label}>{headerText}</Text>}
        </View>
        {/* Center BOX --END-- */}

        {/* Right Box --START-- */}
        <View style={[styles.alignment, {flex: 1}]}>{rightIcon && <></>}</View>
        {/* Right Box --END-- */}
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: Colors.PRIMARY,
    position: 'absolute',
    // zIndex: 1,
  },
  label: {
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.SECONDARY,
  },
  alignment: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosShadow: {
    shadowColor: Colors.ORANGE,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    zIndex: 9999,
  },
  androidShadow: {
    shadowColor: Colors.PRIMARY,
    elevation: 5,
    zIndex: 1,
  },
});
