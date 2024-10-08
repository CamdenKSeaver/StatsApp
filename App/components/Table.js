import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const Table = () => {
  const [data, setData] = useState(Array(54).fill(0));

  const renderItem = ({ item, index }) => {
    const onPress = () => {
      const newData = [...data];
      newData[index]++;
      setData(newData);
    };

    const onLongPress = () => {
      const newData = [...data];
      if (newData[index] > 0) {
        newData[index]--;
        setData(newData);
      }
    };

    return (
      <TouchableOpacity style={styles.cell} onPress={onPress} onLongPress={onLongPress}>
        <Text style={styles.cellText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={9}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = {
  container: {},
  cell: {
    width: '10%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderWidth: 1,
  },
  cellText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export default Table;
