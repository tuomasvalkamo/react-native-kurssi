import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [randomNumber, setRandomNumber] = useState(0)
  const [guess, setGuess] = useState(0)
  const [text, setText] = useState('Guess a number between 1-100')
  const [numberOfGuesses, setNumberOfGuesses] = useState(1)

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1)
    console.log(randomNumber)
  }, [])

  const checkNumber = (guess, numberOfGuesses) => {
    setNumberOfGuesses(numberOfGuesses + 1)
    guess = parseFloat(guess)

    if (guess > randomNumber) {
      setText(`Your guess ${guess} is too high`)
    } else if (guess < randomNumber) {
      setText(`Your guess ${guess} is too low`)
    } else {
      setText(`Your guess ${guess} was right!`)
      alert(`You guessed the number in ${numberOfGuesses} guesses`)
    }
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
        onChangeText={text => setGuess(text)}
        keyboardType='numeric'
        style={{ width: 50, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button title="Make guess" onPress={() => checkNumber(guess, numberOfGuesses)} />
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
});
