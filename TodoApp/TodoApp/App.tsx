import React,{useState} from "react";
import { SafeAreaView,View,Text, StyleSheet, KeyboardAvoidingView, TextInput, Touchable, TouchableOpacity, Keyboard } from 'react-native'
import Task from "./components/Task";
import { Platform } from 'react-native';


const App = () => {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([""]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  };

  const completeTask = (index:number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return(
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <Text style={styles.explain}>(If you complete your task,click on the ttask.)</Text>
        <View style={styles.items}>
        {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
           
        </View>
      </View>
      


      <KeyboardAvoidingView
       behavior={Platform.OS === 'android' ? 'padding' : 'height'}
       style={styles.writeTaskWrapper}
      >
      <TextInput style={styles.input} placeholder="Write a task..." value={task} onChangeText={text=>setTask(text)}/>

      <TouchableOpacity onPress={()=> handleAddTask()}>
        <View style={styles.addWrapper}>
           <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>

    

      </KeyboardAvoidingView>

    </View>
  )
}

export default App;


const styles=StyleSheet.create({
  container:{
     flex:1,
     backgroundColor:"#E8EAED"
  },
  taskWrapper:{
     paddingTop:80,
     paddingHorizontal:20
  },
  sectionTitle:{
     fontSize:30,
     fontWeight:"bold",
     marginBottom:15
  },
  items:{
    
  },
  input:{
    fontSize:15,
    backgroundColor:"#FFF",
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    marginLeft:12
  },
  writeTaskWrapper:{
    position:"absolute",
    bottom:60,
    width:100,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#FFF",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    marginLeft:70
  },
  addText:{},
  explain:{
    marginBottom:15
  }
})