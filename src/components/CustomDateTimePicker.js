import { View, Text, StyleSheet,TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatMyDate } from '../helpers/DataHelper';


const CustomDatePicker = (props) => {


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        props?.formikProps?.setFieldValue(props?.formikKey, {
            ...props?.formikProps?.values[props?.formikKey],
            value: date.toString()

        })

        hideDatePicker();
    };
    return (
        <View style= {{marginBottom:20}}>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <TouchableWithoutFeedback
                onPress={showDatePicker}>
                <View style = {{borderBottomWidth:0.5, borderColor:"grey"}}>
                    <Text style={styles.headingStyle}>{props?.formikProps?.values[props?.formikKey].title}</Text>
                    <Text style={{ fontSize:12, marginVertical:15}}>
                        {props?.formikProps?.values[props?.formikKey].value?.length ? formatMyDate(props?.formikProps?.values[props?.formikKey].value) : props?.formikProps?.values[props?.formikKey].placeholder}
                        </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>

    )
}


const styles = StyleSheet.create({
   
    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
    },
    headingStyle: {
        color: "#082E34",
        fontSize: 15,
    },

})


export default CustomDatePicker