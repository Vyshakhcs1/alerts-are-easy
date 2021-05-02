import {StyleSheet} from 'react-native';
import {
  width,
  fontSize,
  success_medium,
  warning_medium,
  error_medium,
  white,
  success_dark,
  warning_dark,
  error_dark,
  info_dark,
  info_medium,
} from '../../constants';
export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: width,
  },
  successAlert: {
    backgroundColor: success_dark,
    borderColor: success_medium,
  },
  warningAlert: {
    backgroundColor: warning_dark,
    borderColor: warning_medium,
  },
  errorAlert: {
    backgroundColor: error_dark,
    borderColor: error_medium,
  },
  infoAlert: {
    backgroundColor: info_dark,
    borderColor: info_medium,
  },
  textMessage: {
    fontSize: fontSize,
  },
  textDefault: {
    lineHeight: 20,
    color: white,
  },
  topAlert: {
    top: 20,
  },
  centerAlert: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  bottomAlert: {
    bottom: 20,
  },
  content: {
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    minHeight: 50,
    paddingVertical: 10,
    borderWidth: 0.5,
  },
  firstFlex: {
    justifyContent: 'flex-start',
    flex: 1,
  },
  nextFlex: {
    justifyContent: 'flex-end',
  },
  leftIconTextWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
