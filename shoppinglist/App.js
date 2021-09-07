import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [data, setData] = useState([])
  const [text, setText] = useState('')

  const addItem = () => {
    setData([...data, { key: text }])
    setText('')
  }

  const clearItems = () => {
    setData([])
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput onChangeText={text => setText(text)} value={text} style={{ width: 200, borderWidth: 1, borderColor: 'gray' }} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={() => addItem()} />
        <Button title="Clear" onPress={() => clearItems()} />
      </View>
      <View>
        <Text style={{ color: 'blue', fontWeight: 700 }}>Shopping List</Text>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={({ item }) =>
            <Text>{item.key}</Text>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  }
});
