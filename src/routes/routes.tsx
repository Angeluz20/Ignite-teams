
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { Groups } from "@screens/Groups"
import { NewGroup } from "@screens/NewGroup"
import { Players } from "@screens/Players"

// export type StackParamsList = {
//     groups: undefined,
//     newGroup: undefined,
//     players: undefined,
// }

const Stack = createNativeStackNavigator()

export function RouterApp() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            animation: "slide_from_right",
        }}>
            <Stack.Screen
                name={'groups'}
                component={Groups}
            />

            <Stack.Screen
                name={'newGroup'}
                component={NewGroup}
            />

            <Stack.Screen
                name={'players'}
                component={Players}
            />
        </Stack.Navigator>
    )
}