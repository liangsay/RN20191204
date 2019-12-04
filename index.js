/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Test from './pages/Test';
import Setup from './pages/Setup';
AppRegistry.registerComponent(appName, () => Test);
