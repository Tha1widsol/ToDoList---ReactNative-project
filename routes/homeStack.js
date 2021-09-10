import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ToDoLists from "../screens/ToDoLists";
import Todo from "../screens/Todo";


const screens = {
    ToDoLists:{
        screen: ToDoLists,
        navigationOptions:{
            headerTitleAlign: 'left'
        }

    },
    Tasks:{
        screen: Todo,
      
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);