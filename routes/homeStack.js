import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ToDoLists from "../screens/ToDoLists";
import Todo from "../screens/todo";

const screens = {
    Home:{
        screen: ToDoLists
    },
    Todo:{
        screen: Todo
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);