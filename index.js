/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
export {defaultr} from './src/screens/SingnInScreen/SignInScreen';
export {defaultt} from './src/components/CustomInput/CustomInput';
export {defaulte} from './src/components/CustomButton/CustomButton';
export {defaulthh} from './src/screens/SingnUpScreen/SignUpScreen';
export {defaultk} from './src/components/SocialSignInButtons/SocialSignInButtons';
export {defaultj} from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
export {defaultet} from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
export {defaultp} from './src/screens/NewPasswordScreen/NewPasswordScreen';

AppRegistry.registerComponent(appName, () => App);
