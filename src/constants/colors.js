import {SUCCESS, WARNING, ERROR, INFO} from './messageTypes';
import {TOP, CENTER, BOTTOM} from './positions';
import {Icons} from './icons';

export const success = '#51B87C';
export const warning = '#D1A939';
export const error = '#CD3F3F';

export const success_light = '#75D00F';
export const warning_light = '#FFF7DF';
export const error_light = '#FFE4E4';

export const success_dark = '#75D00F';
export const warning_dark = '#FFB70A';
export const error_dark = '#f22e2e';
export const info_dark = '#36C4FC';
export const gray_dark = '#738CAB';
export const gray_light = '#d8d8d8';

export const success_border = '#7cf2ad';
export const warning_border = '#7cf2ad';
export const error_border = '#7cf2ad';
export const info_border = '#56ccf7';

export const success_medium = '#75D00F';
export const warning_medium = '#f5cc5b';
export const error_medium = '#f58484';
export const info_medium = '#56ccf7';

export const white = '#FFFFFF';
export const black = '#000000';

export const ColorsMap = {
  [SUCCESS]: success,
  [WARNING]: warning,
  [ERROR]: error,
};

export const AlertStyleMap = {
  [SUCCESS]: 'successAlert',
  [WARNING]: 'warningAlert',
  [ERROR]: 'errorAlert',
  [INFO]: 'infoAlert',
};

export const PositionStyleMap = {
  [TOP]: 'topAlert',
  [CENTER]: 'centerAlert',
  [BOTTOM]: 'bottomAlert',
};

export const IconsMap = {
  [SUCCESS]: Icons.Feather.success,
  [WARNING]: Icons.Feather.warning,
  [ERROR]: Icons.Feather.error,
  [INFO]: Icons.Feather.info,
};

export const IconsColorMap = {
  [SUCCESS]: success_dark,
  [WARNING]: warning_dark,
  [ERROR]: error_dark,
  [INFO]: info_dark,
};
