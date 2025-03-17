import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, PixelRatio, Button, TouchableOpacity, Pressable } from 'react-native';
import { theme } from './theme';


export default function App() {

  const handleDelete = ()=>{
      Alert.alert("Are you sure to delete?", "It will be gone for good!",
        [
          {
            text: "Yes",
            onPress: () => console.log("On Yes"),
            style: "destructive"
          },
          {
            text: "Cancel",
            onPress: () => console.log("On Yes"),
            style: "cancel"
          }
        ]
      )
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{PixelRatio.get()} - Coffee !</Text>
          <TouchableOpacity style={styles.button} onPress={()=>handleDelete()} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f", 
    paddingHorizontal: 8, 
    paddingVertical:16},
  itemText: {fontSize: 18, fontWeight: 200},
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1
  }
});
