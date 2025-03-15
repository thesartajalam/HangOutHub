import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({children, onPress, style}) {
    return <View style={[styles.buttonContainer, style]}>
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    </View>
}

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        minWidth: 120,
        marginHorizontal: 8
    },
    pressed: {
        opacity: 0.75,
        borderRadius: 4,
        backgroundColor: GlobalStyles.colors.softPeach
    },
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.deepCoffee2
    },
    buttonText: {
        color: 'white',
        textAlign: "center"
    }
});