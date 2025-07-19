import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const AddTaskScreen = ({ navigation }) => {
  const [taskText, setTaskText] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task description"
        value={taskText}
        onChangeText={setTaskText}
        autoFocus
      />
      <Button 
        title="Add Task" 
        onPress={handleAddTask} 
        disabled={!taskText.trim()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});

export default AddTaskScreen;
