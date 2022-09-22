import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Ladrao de  frango</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#af1414',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'black',
    fontSize: 99,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
