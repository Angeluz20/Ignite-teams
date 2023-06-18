import { NavigationContainer } from '@react-navigation/native';

import { RouterApp } from './routes';

export function Routes(){
    return(
            <NavigationContainer>
                <RouterApp />
            </NavigationContainer>
        )
}