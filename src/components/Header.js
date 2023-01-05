import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const Header = (props) => {
    return (

        <View style={styles.headerStyle}>
         {props?.filterPress &&(
            <TouchableWithoutFeedback onPress={props.filterPress}>
                <View>
                    <Text>Filters</Text>
                </View>
            </TouchableWithoutFeedback>
            )}
            {props?.backPress &&(
            <TouchableWithoutFeedback onPress={props.backPress}>
                <View>
                    <Text>{"<"}</Text>
                </View>
            </TouchableWithoutFeedback>
            )}
            <Text style={styles.taskStyle}>{props?.title}</Text>
            {props?.backPress &&(<View />)}
            {props?.addTask &&(
            <TouchableWithoutFeedback onPress={props.addTask}>
                <View>
                    <Text>Add Task</Text>
                </View>
            </TouchableWithoutFeedback>
            )}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth:0.8
    },
    taskStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
});