import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import TaskCard from '../components/TaskCard'
import { useDispatch, useSelector } from "react-redux";
import { setTask } from '../store/Task';


const TaskListing = ({ navigation }) => {
    const data = useSelector(state => state.task.taskData)
    const dispatch = useDispatch();


    const keyExtractor = (item, index) => String(index)

    const onFilterPress = () => {
        navigation.navigate("Filters")
    }
    const onAddTaskPress = () => {
        navigation.navigate("AddTask")

    }

    const onPressofDeleteButton = (item) => {
        let arr = []
        data.map((value) => {
            if (value.taskTitle !== item.taskTitle) {
                arr.push(value)
            }
        })
        dispatch(setTask({ taskData: arr }))
    }
    return (
        <View>
            <Header title={"Tasks"} filterPress={onFilterPress} addTask={onAddTaskPress} />
            <FlatList contentContainerStyle={{ paddingBottom: 70 }}
                keyExtractor={keyExtractor}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <TaskCard
                            onPressofDeleteButton={onPressofDeleteButton}
                            item={item}
                            navigation={navigation}
                        />
                    )
                }}

            />
        </View>
    )
}

export default TaskListing