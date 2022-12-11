import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Loader from '../../components/app/loader';

const FooterItem = ({loading}) => {
  return (
    <View style={[styles.container, {height: loading ? 100 : 0}]}>
      <Loader loading={loading} />
    </View>
  );
};

export default FooterItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
