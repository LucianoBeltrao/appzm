import { View, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"
import { EmailDataProps } from "@/utils/emails"

import { Avatar } from "./avatar"

type EmailProps = {
    data: EmailDataProps
}

export function Email({ data }: EmailProps) {
    return (
        <View className="w-full flex-row gap-4">
            <Avatar source={{ uri: data.avatar }} />

            <View className="flex-1">
                <View className="flex-row items-center gap-1">
                    {
                        data.marker && (
                        <MaterialIcons
                            name="label-important"
                            size={16}
                            color={colors.yellow[600]}
                        />
                    )}
                    <Text className="text-lg font-subtitle text-gray-900 flex-1">
                        {data.name}
                    </Text>

                    <Text className="text-sm font-body text-gray-900">
                        12 de fev.
                    </Text>
                </View>
                <Text className="text-base font-body text-gray-900"
                    numberOfLines={1}
                    lineBreakMode="tail"
                >
                    {data.subject}
                </Text>
                <View className="flex-row items-center gap-4">
                    <Text className="text-base font-body text-gray-800 flex-1"
                        numberOfLines={1}
                        lineBreakMode="tail"
                    >
                        {data.message}
                    </Text>

                    <MaterialIcons 
                    name={data.start ? "star" : "star-outline"} 
                    size={22} 
                    color={data.start ? colors.orange[800] : colors.purple} />
                </View>
            </View>
        </View>
    )
}
