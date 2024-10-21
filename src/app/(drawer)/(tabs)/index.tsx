import { Email, } from "@/components/email"
import { Avatar } from "@/components/avatar"
import { Input } from "@/components/input"
import { MenuButton } from "@/components/menu-button"
import { View, FlatList, Text } from "react-native"
import { EMAILS } from "@/utils/emails"
import { FloatButton } from "@/components/float-button"


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

            <FlatList data={EMAILS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Email data={item}/>}
                contentContainerClassName="gap-6"
                ListHeaderComponent={() => <Text className="uppercase text-gray-950 text-sm font-subtitle mt-6">Entrada</Text>}
            />

            <FloatButton icon="edit" />
        </View>
    )
}