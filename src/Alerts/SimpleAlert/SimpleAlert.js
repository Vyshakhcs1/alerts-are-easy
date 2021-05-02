import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  width,
  fontSize,
  success_medium,
  warning_medium,
  error_medium,
  Icons,
  AlertStyleMap,
  PositionStyleMap,
  IconsMap,
  white,
  success_dark,
  warning_dark,
  error_dark,
  info_dark,
  info_medium,
} from '../../constants';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
const ICON_SIZE = 25;
export default class SimpleAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: true,
    };
  }
  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };
  render() {
    const {showAlert} = this.state;
    const {type, position, message, showIcon} = this.props;
    return (
      <SafeAreaView
        style={[styles.wrapper, styles[PositionStyleMap[position]]]}>
        {showAlert && (
          <View style={[styles.content, styles[AlertStyleMap[type]]]}>
            <View style={styles.firstFlex}>
              <View style={styles.leftIconTextWrap}>
                {showIcon && (
                  <View style={{marginRight: 15}}>
                    <Icon
                      name={IconsMap[type]}
                      size={ICON_SIZE}
                      color={white}
                    />
                  </View>
                )}
                <View>
                  <Text style={[styles.textMessage, styles.textDefault]}>
                    {message}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.nextFlex}>
              <TouchableOpacity onPress={this.hideAlert}>
                <Icon
                  name={Icons.Feather.close}
                  size={ICON_SIZE}
                  color={white}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
