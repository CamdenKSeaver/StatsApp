import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TableCell = ({ onPress, value }) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

export default TableCell;
