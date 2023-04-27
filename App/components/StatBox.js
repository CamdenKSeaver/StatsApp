import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function StatBox({ title, onPress, onLongPress, width, height, marginTop, marginLeft }) {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
    if (onPress) {
      onPress();
    }
  };

  const handleLongPress = () => {
    setCount(count - 1);
    if (onLongPress) {
      onLongPress();
    }
  };

  return (
    <TouchableOpacity
      style={[styles.cell, { width, height, marginTop, marginLeft }]}
      onPress={handlePress}
      onLongPress={handleLongPress}
      delayLongPress={500}
    >
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderRadius: 8,
  },
  countContainer: {
    marginBottom: 8,
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 16,
    textAlign: 'center', // Center the text horizontally
  },
});

export default StatBox;


