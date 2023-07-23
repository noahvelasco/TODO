import {useState} from 'react';
import {View, Button, TextInput, StyleSheet, Modal, Image} from 'react-native';

// Where the input will be taking place
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal_logo.png')}
          style={styles.image}
        />
        <TextInput
          placeholder="Finish math homework..."
          placeholderTextColor={'#B9B9B9'}
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View
            style={{
              width: '30%',

              marginRight: 5,
            }}>
            <Button title="Cancel" onPress={props.onCancel} color="gray" />
          </View>
          <View
            style={{
              width: '30%',
              marginLeft: 5,
            }}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#34773A" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  image: {
    marginBottom: 20,
    width: 200,
    height: 200,
  },
  inputContainer: {
    backgroundColor: '#3A3A3A',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInput: {
    color: 'white',
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: '#AAA9A9',
    borderRadius: 6,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
