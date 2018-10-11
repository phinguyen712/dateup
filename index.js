import './App/Config/ReactotronConfig';
import { AppRegistry } from 'react-native';
import App from './App/Containers/App';
import './ReactotronConfig';

console.disableYellowBox = true;
AppRegistry.registerComponent('dateup', () => App);
