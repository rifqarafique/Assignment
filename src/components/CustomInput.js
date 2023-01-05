import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = (props) => {
    const onChangeText = (text)=>{
        props?.formikProps?.setFieldValue(props?.formikKey,{
            ...props?.formikProps?.values[props?.formikKey],
            value:text
        })
    }
    const onBlur = ()=>{
        props?.formikProps?.setFieldTouched(props?.formikKey)
    }
    return (
        <View style = {{marginBottom:20}}>
            <View>
                <Text style={styles.titleStyle}>{props?.formikProps?.values[props?.formikKey]?.title}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={props?.formikProps?.values[props?.formikKey]?.placeholder}
                    onChangeText={onChangeText}
                    value={props?.formikProps?.values[props?.formikKey]?.value}
                    onBlur={onBlur}
                />
            </View>
            {props?.formikProps?.errors[props?.formikKey] && props?.formikProps?.touched[props?.formikKey] && (
                <Text style={styles.errorTextStyle}>{props?.formikProps?.errors[props?.formikKey]}</Text>
            )}
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    input: {
        fontSize: 12,
        marginVertical:-5,
        borderBottomWidth:0.5,
        borderColor:"grey"
    },
    titleStyle: {
        color: "#082E34",
        fontSize:15 
    },
    errorTextStyle: {
        color: "red"
    }

});