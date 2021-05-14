import {StyleSheet} from 'react-native';
import {
  width,
  fontSize,
  white,
  success_dark,
  warning_dark,
  error_dark,
  info_dark,
  gray_dark,
} from '../../constants';
export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: width,
  },
  successAlert: {
    backgroundColor: success_dark,
  },
  warningAlert: {
    backgroundColor: warning_dark,
  },
  errorAlert: {
    backgroundColor: error_dark,
  },
  infoAlert: {
    backgroundColor: info_dark,
  },
  actionTextDefault: {
    fontSize: fontSize + 2,
    lineHeight: 20,
    color: white,
  },
  centerAlert: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  content: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: white,
  },
  topWrapper: {
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize + 4,
    fontWeight: '500',
  },
  message: {
    fontSize: fontSize + 1,
    color: gray_dark,
  },
  bottomWrapper: {
    marginTop: 20,
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: width / 2,
  },
});
