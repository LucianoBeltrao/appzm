import { Email } from "@/components/email"
import { Avatar } from "@/components/avatar"
import { Input } from "@/components/input"
import { MenuButton } from "@/components/menu-button"
import { View } from "react-native"


export default function Home() {
    return (
        <View className="flex-1 bg-gray-500 pt-16 p-5">
            <Input>
            <MenuButton />
                <Input.Field placeholder="Pesquisar no e-mail" />
                <Avatar source={{ uri: "https://github.com/LucianoBeltrao.png" }}
                size="small"
                />
            </Input>
           
           <Email />

        </View>
    )
}