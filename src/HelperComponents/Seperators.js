import React from 'react';
import {View} from 'react-native';
import {gray_light, width} from '../constants';

export const LargeAlertSeperator = () => {
  return (
    <View
      style={{
        borderWidth: 0.5,
        width: width - 55,
        borderColor: gray_light,
      }}
    />
  );
};

export const LargeAlertSpacer = () => {
  return <View style={{paddingBottom: 15}} />;
};
