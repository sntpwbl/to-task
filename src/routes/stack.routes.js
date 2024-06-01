import { createStackNavigator } from '@react-navigation/stack'
const {Screen, Navigator} = createStackNavigator()

import { Home } from '../views/Home';
import { NewTask } from '../views/NewTask';
import { UpdateTask } from '../views/UpdateTask';
import { GetAllTasks } from '../views/GetAllTasks';
import { TaskScreen } from '../views/TaskScreen';

export function StackRoutes() {
  return (
    <Navigator>
        <Screen name='home' component={Home} options={{headerShown: false}}/>
        <Screen name='new' component={NewTask} options={{headerShown: false}}/>
        <Screen name='update' component={UpdateTask} options={{headerShown: false}}/>
        <Screen name='tasks' component={GetAllTasks} options={{headerShown: false}}/>
        <Screen name='task' component={TaskScreen} options={{headerShown: false}}/>
    </Navigator>
  );
}