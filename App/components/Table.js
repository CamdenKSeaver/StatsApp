import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList,_ } from 'react-native';

const Table = () => {
  const [data, setData] = useState(Array(54).fill(0));

  const renderItem = ({ item, index }) => {
    const onPress = () => {
      const newData = [...data];
      newData[index]++;
      setData(newData);
    };

    return (
      <TouchableOpacity style={styles.cell} onPress={onPress}>
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
  container: {
   
  },
  cell: {
    
    width: '10%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  cellText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export default Table;
