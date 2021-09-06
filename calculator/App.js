import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [result, setResult] = useState(0)
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [data, setData] = useState([])

  const buttonPressed = (operator) => {
    calculate(operator)

    const listItem = `${num1} ${operator} ${num2} = ${result}`

    setData([...data, { key: listItem }])
  }

  const calculate = (operator) => {
    if (operator === '+') {
      setResult(parseFloat(num1) + parseFloat(num2))
    } else {
      setResult(parseFloat(num1) - parseFloat(num2))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Result = {result}</Text>
        <TextInput
          value={num1}
          onChangeText={text => setNum1(text)}
          keyboardType='numeric'
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        />
        <TextInput
          value={num2}
          onChangeText={text => setNum2(text)}
          keyboardType='numeric'
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => buttonPressed('+')} title="+" />
        <Button onPress={() => buttonPressed('-')} title="-" />
      </View>
      <View style={styles.listContainer}>
        <Text style={{ marginBottom: 20 }}>History</Text>
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
  inputContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    width: 100,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  listContainer: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
