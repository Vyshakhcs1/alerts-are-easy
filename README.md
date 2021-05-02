# alerts-are-easy

This package will help you to show success, warning, error and info messages in your react-native application with a beautiful UI.

**Examples**

![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/sc-1.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/wr-1.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/er-1.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/inf-1.png)

![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/sc-2.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/wr-2.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/er-2.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/inf-2.png)

## Installation

```bash
npm install --save alerts-are-easy
```

alerts-are-easy requires [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons/) to show the icons.
Install this peer dependency and start using alerts-are-easy.

## Usage

```js
import {SimpleAlert} from 'alerts-are-easy';
```

```js
<SimpleAlert
  position="top" // -> Can be top,center or bottom
  message="This is a sample message..." // The message you want to show
  type="success" // -> Can be success, warning, error or info
  showIcon={true} // -> Can be true or false
/>
```

## Props

**<SimpleAlert />**
| Prop | Description | Value |
| ------ | ------ |------ |
| **`position`** | Helps to position your alert |`top`, `center`, `bottom` |
| **`message `** | The message you want to show | eg: "This is a sample message..." |
| **`type `** | The type of alert |`success`, `warning`, `error`, `info` |
| **`showIcon `** | Helps to show left icon |`true`, `false` |

## Under way

- [ ] Detailed Alerts
- [ ] Large Alerts

## License

ISC
