import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Map = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../assets/ahs-map-zones.jpg')}
        style={styles.staticMap}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    staticMap: {
        flex: 1,
        transform: [{ scale: 0.90 }],
        resizeMode: 'contain',
      },
});

export default Map;