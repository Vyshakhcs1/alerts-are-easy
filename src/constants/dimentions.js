import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const DEFAULT_FONT_SIZE = 15;
const fontSize = Math.trunc(width / (width / DEFAULT_FONT_SIZE));
export {width, height, fontSize};
