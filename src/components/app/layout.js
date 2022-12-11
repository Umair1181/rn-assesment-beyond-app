import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Layout = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
