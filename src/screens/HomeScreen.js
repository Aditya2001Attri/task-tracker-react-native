import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const HomeScreen = ({ navigation }) => {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  const renderItem = ({ item }) => (
    <View style={styles.taskCard}>
      <TouchableOpacity onPress={() => toggleTask(item.id)}>
        <Text style={[styles.taskText, item.done && styles.completed]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <Button title="Delete" onPress={() => deleteTask(item.id)} color="#ff5252" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>📋 My Task Tracker</Text>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet!</Text>}
      />

      <View style={styles.addButtonWrapper}>
        <Button 
          title="+ Add Task" 
          onPress={() => navigation.navigate('AddTask')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f8' },
  header: { backgroundColor: '#4a90e2', padding: 20 },
  headerText: { color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  taskCard: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  taskText: { fontSize: 16 },
  completed: { textDecorationLine: 'line-through', color: '#aaa' },
  emptyText: { textAlign: 'center', marginTop: 20, color: '#888' },
  addButtonWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40, // <-- extra space from bottom
  },
});

export default HomeScreen;
