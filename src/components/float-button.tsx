import { Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";



export function FloatButton() {
    return (<TouchableOpacity className="px-8 py-4 bg-gray-600 rounded-full absolute bottom-4 right-4 gap-1 flex-row items-center"
        activeOpacity={0.7}>
        <MaterialIcons name="edit" size={22} color={colors.orange[200]} />
        <Text className="font-subtitle text-orange-200">Escrever</Text>
    </TouchableOpacity>
    )
}