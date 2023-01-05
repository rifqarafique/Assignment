import { View, Text, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import Header from '../components/Header'
import { Formik } from 'formik'
import { getInitialValuesforAddTask } from '../helpers/DataHelper'
import CustomInput from '../components/CustomInput'
import CustomChip from '../components/CustomChip'
import CustomButton from '../components/CustomButton'
import CustomDateTimePicker from '../components/CustomDateTimePicker'
import { useDispatch, useSelector } from "react-redux";
import { setTask } from '../store/Task'


const AddTask = ({ navigation, route }) => {
    console.log("route", route)
    const formikRef = useRef(null)
    const dispatch = useDispatch()
    const data = useSelector(state => state.task.taskData)


    const onBackPress = () => {
        navigation.goBack()

    }
    const onSavePress = () => {
        formikRef.current.handleSubmit()
    }
    const onCancelPress = () => {
        navigation.goBack()
    }
    return (
        <View style={{ flex: 1 }} >
            <Header title={route?.params?.item ? "Edit Task" : "Add Task"} backPress={onBackPress} />
            <Formik
                innerRef={formikRef}
                initialValues={getInitialValuesforAddTask(route?.params?.item)}
                onSubmit={(values) => {
                    // console.log("values", values)
                    let obj = {
                        taskTitle: values.taskTitle.value,
                        priority: values.priority.value[0],
                        name: values.userName.value,
                        time: values.time.value,
                        status: values.status.value[0]
                    }
                    if (route?.params?.item) {
                        let arr = [...data] // deep copy (my data will be saved)// spread operator
                        let newIndex
                        arr.map((value, index) => {
                            if (value?.taskTitle === route?.params?.item?.taskTitle) {
                                newIndex = index
                            }
                        })
                        arr[newIndex] = obj
                        dispatch(setTask({ taskData: arr }))
                        navigation.goBack()
                    }
                    else {
                        let arr = [obj]
                        let newarr = arr.concat(data)
                        dispatch(setTask({ taskData: newarr }))
                        navigation.goBack()
                    }

                    // console.log("obj", obj)
                }}
            >
                {(formikProps) => (

                    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                        {console.log("formik props", formikProps)}
                        <CustomInput
                            formikProps={formikProps}
                            formikKey={"taskTitle"}
                        />
                        <CustomChip
                            formikProps={formikProps}
                            formikKey={"priority"}
                        />
                        <CustomInput
                            formikProps={formikProps}
                            formikKey={"userName"}
                        />
                        <CustomDateTimePicker
                            formikProps={formikProps}
                            formikKey={"time"}
                        />
                        <CustomChip
                            formikProps={formikProps}
                            formikKey={"status"}
                        />
                    </View>
                )}
            </Formik>
            <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-end", flex: 1, justifyContent: "space-between", margin: 20 }}>

                <CustomButton onPress={onCancelPress}
                    buttonTitle="cancel"
                />
                <CustomButton onPress={onSavePress}
                    buttonTitle="save"
                />
            </View>
        </View>
    )
}

export default AddTask

const styles = StyleSheet.create({


});