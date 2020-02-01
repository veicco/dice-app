import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Dice = ({value, roll}) => (
  <TouchableOpacity onPress={roll}>
    <View style={styles.container}>
      <View style={styles.value}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    zIndex: 1,
  },
  value: {
    
  },
  valueText: {
    color: '#222222',
    fontSize: 72,
  }
});

export default Dice;