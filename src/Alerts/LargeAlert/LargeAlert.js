import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  AlertStyleMap,
  PositionStyleMap,
  IconsMap,
  IconsColorMap,
  black,
  CENTER,
} from '../../constants';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {
  LargeAlertSeperator,
  LargeAlertSpacer,
} from '../../HelperComponents/Seperators';
const ICON_SIZE = 55;
export default class LargeAlert extends Component {
  render() {
    const {type, title, message, actionText, actionTriggered} = this.props;
    return (
      <SafeAreaView style={[styles.wrapper, styles[PositionStyleMap[CENTER]]]}>
        <View
          style={[styles.content]}
          shadowOffset={{width: 0, height: 4}}
          shadowColor={black}
          shadowOpacity={0.2}
          shadowRadius={10}
          elevation={10}>
          <View style={styles.topWrapper}>
            <Icon
              name={IconsMap[type]}
              size={ICON_SIZE}
              color={IconsColorMap[type]}
            />
            <LargeAlertSpacer />
            <Text style={styles.title}>{title}</Text>
            <LargeAlertSpacer />
            <Text style={styles.message}>{message}</Text>
            <LargeAlertSpacer />
          </View>
          <LargeAlertSeperator />
          <View style={styles.bottomWrapper}>
            <View>
              <TouchableOpacity
                style={[styles[AlertStyleMap[type]], styles.actionButton]}
                onPress={actionTriggered}>
                <Text style={[styles.actionTextDefault]}>{actionText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
