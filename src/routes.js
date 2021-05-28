import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Search from './pages/Search';

const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home"
                component={Home}//Aqui vai ser o componente que vai ser renderizado
                options={{
                    title: 'Minha Cidade'
                }}
            />

            <Drawer.Screen 
                name="Search"
                component={Search}//Aqui vai ser o componente que vai ser renderizado
                options={{
                    title: 'Procurar'
                }}
            />
        </Drawer.Navigator>
    );
}

export default Routes;
