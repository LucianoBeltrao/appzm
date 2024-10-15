
import { ReactNode } from "react";
import { View, TextInput, TextInputProps } from "react-native";

import { colors } from "@/styles/colors";

type InputProps = {
    children: ReactNode
}


function Input({ children }: InputProps) {
    return ( 
    <View className = "w-ful h-14 bg-gray-200 rounded-lg p-4 flex-row items-center gap-4">
        {children}
    </View >
    )
}



function InputField({ ...rest }: TextInputProps) {
    return (
        <TextInput
            className="flex-1 font-normal text-base
            text-gray-950"
            placeholderTextColor={colors.gray[800]}
            cursorColor={colors.orange[700]}
            {...rest}
        />
    )
}



Input.Field = InputField


export { Input }