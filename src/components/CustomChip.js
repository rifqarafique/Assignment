import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const CustomChip = (props) => {
    const selectedChip = (value) => {
        if (props?.formikProps?.values[props?.formikKey]?.value?.length) {
            if (props?.formikProps?.values[props?.formikKey]?.value[0].id === value.id) {
                return true
            }
        }
        return false
    }
    return (
        <View style={{ marginBottom: 20 }}>
            <View style={{ borderBottomWidth: 0.5, borderColor: "grey" }}>
                <Text style={styles.titleStyle}>{props?.formikProps?.values[props?.formikKey]?.title}</Text>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    {props?.formikProps?.values[props?.formikKey]?.options.map((value, index) => {

                        return (
                            <View key={index}>
                            <TouchableWithoutFeedback onPress={() => {
                                props?.formikProps?.setFieldValue(props.formikKey, {
                                    ...props.formikProps.values[props.formikKey],
                                    value: [value]
                                })
                            }}>
                                <View  style={selectedChip(value) ? styles.selectedChipstyle : styles.chipStyle}>
                                    <Text>
                                        {value.name}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            </View>
                        )
                    })}
                </View>
            </View>
            {props?.formikProps?.errors[props?.formikKey] && props?.formikProps?.touched[props?.formikKey] && (
                <Text style={styles.errorTextStyle}>{props?.formikProps?.errors[props?.formikKey]}</Text>
            )}
        </View>
    )
}

export default CustomChip

const styles = StyleSheet.create({
    titleStyle: {
        color: "#082E34",
        fontSize: 15
    },
    errorTextStyle: {
        color: "red"
    },
    chipStyle: {
        marginVertical: 7,
        marginRight: 7,
        borderRadius: 10,
        borderColor: "Black",
        borderWidth: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "lightgrey"
    },
    selectedChipstyle: {
        marginVertical: 7,
        marginRight: 7,
        borderRadius: 10,
        borderColor: "Black",
        borderWidth: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "lightblue"
    }

});