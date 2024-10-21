import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import clsx from 'clsx'

export function DrawerButton(){
    const isDividir = true
    return (
        <Pressable className={clsx("py-2 w-full", {
            "border-b ml-10 border-gray-950": isDividir
        })}>
            <View>
                <MaterialIcons name="email" size={20} color={colors.orange[300]} />
                <Text>Todas as cixas de e-mail</Text>
            </View>
        </Pressable>
    )
}