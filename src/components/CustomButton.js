import React from "react";
import { Text, View, TouchableWithoutFeedback, StyleSheet, ActivityIndicator } from "react-native";

const CustomButton = (props) => {

    return (

        <TouchableWithoutFeedback
            onPress={props.onPress}>
            {props?.buttonTitle === 'save' ? (
                <View style={styles.saveStyle}>
                    <Text style={styles.buttonTextStyle}>{props.buttonTitle}</Text>
                </View>) : (
                <View style={styles.cancelStyle}>
                    <Text style={styles.buttonTextStyle}>{props.buttonTitle}</Text>
                </View>
            )}
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    saveStyle: {
        borderRadius: 10,
        height: 36,
        width: '25%',
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
    },
    cancelStyle:{
        borderRadius: 10,
        height: 36,
        width: '25%',
        backgroundColor: "lightgrey",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonTextStyle: {
        fontSize: 15,
        color: 'black',
    },
})

export default CustomButton;
