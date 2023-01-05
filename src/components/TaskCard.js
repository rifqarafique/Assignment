import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { checkDateForTask } from '../helpers/DataHelper'
import { EDIT_ICON, REMOVE_ICON } from '../Images'
import { useDispatch, useSelector } from 'react-redux'
import { removeTask } from '../store/Task'

const TaskCard = (props) => {
  const handleDelete = ()=>{
    props.onPressofDeleteButton(props?.item)
  }

  return (

    <View style={styles.cardStyle}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "black", fontSize: 16, marginBottom: 5 }}>{props?.item?.taskTitle}</Text>
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end", flexDirection: "row" }}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate("AddTask", { item: props.item })
          }}>
            <Image style={{ height: 12, width: 12 }} source={EDIT_ICON} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            {props?.item?.status?.name === "Done" && (
              <Image style={{ height: 12, width: 12, marginLeft: 5 }} source={REMOVE_ICON} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View style={{
          borderRadius: 20,
          backgroundColor: props?.item?.priority?.name === "Medium" ? "lightpink" : "lightyellow",
          width: "30%", height: 35, justifyContent: "center", alignItems: "center", marginBottom: 5
        }}>
          <Text style={{ color: "black" }}>
            {props?.item?.priority?.name}
          </Text>
        </View>
        <View style={{
          borderRadius: 20,
          backgroundColor: props?.item?.status?.name === "Pending" ? "lightblue" : "lightgreen",
          width: "30%", height: 35, justifyContent: "center", alignItems: "center", marginLeft: 20
        }}>
          <Text style={{ color: "black", fontSize: 12 }}>{props?.item?.status?.name}</Text>
        </View>
      </View>
      <Text style={{ color: "black", fontSize: 14, marginTop: 15 }}>{props.item?.name}</Text>
      <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
        <Text>{checkDateForTask(props?.item?.time)}</Text>
      </View>
    </View>
  )
}

export default TaskCard
const styles = StyleSheet.create({
  cardStyle: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: "white",
    shadowColor: "#000",
    padding: 20,
    marginBottom: 7,
    borderRadius: 10,
    margin: 5,
  }
});