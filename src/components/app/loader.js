import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {Colors} from '../../global';

const Loader = ({size, color, loading}) => {
  return (
    <>
      {loading && (
        <View style={styles.container}>
          <ActivityIndicator
            size={size ?? 'large'}
            color={color ?? Colors.PRIMARY}
          />
        </View>
      )}
    </>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
