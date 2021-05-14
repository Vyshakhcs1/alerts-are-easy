# alerts-are-easy

This package will help you to show success, warning, error and info messages in your react-native application with a beautiful UI.

![downloads](https://img.shields.io/npm/dt/alerts-are-easy.svg)
[![npm-version](https://img.shields.io/npm/v/alerts-are-easy.svg)](https://www.npmjs.com/package/alerts-are-easy)
[![github-tag](https://img.shields.io/github/tag/Vyshakhcs1/alerts-are-easy.svg?maxAge=1800)](https://github.com/Vyshakhcs1/alerts-are-easy/)

**SimpleAlert**

![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/sc-1.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/wr-1.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/er-1.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/inf-1.png)

![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/sc-2.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/wr-2.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/er-2.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/inf-2.png)

**LargeAlert**

![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/lsc.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/lwr.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/ler.png)
![N|Solid](https://raw.githubusercontent.com/Vyshakhcs1/alerts-are-easy/main/.github/images/linf.png)

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

```js
import {LargeAlert} from 'alerts-are-easy';
```

```js
<LargeAlert
  title="Successful"
  message="You have successfully registered."
  actionText="Go to login screen"
  type="success"
  actionTriggered={this.actionTriggered}
/>
```

## Props

**SimpleAlert**
| Prop | Description | Value |
| ------ | ------ |------ |
| **`position`** | Helps to position your alert |`top`, `center`, `bottom` |
| **`message `** | The message you want to show | eg: "This is a sample message..." |
| **`type `** | The type of alert |`success`, `warning`, `error`, `info` |
| **`showIcon `** | Helps to show left icon |`true`, `false` |

**LargeAlert**
| Prop | Description | Value |
| ------ | ------ |------ |
| **`title `** | The title you want to show | eg: "Successful" |
| **`message `** | The message you want to show | eg: "You have successfully registered." |
| **`actionText `** | The text you want to show on button | eg: "Go to login screen" |
| **`type `** | The type of alert |`success`, `warning`, `error`, `info` |
| **`actionTriggered `** | The button click action | You can define the function and pass it in this prop. |

## Under way

- [ ] Detailed Alerts

## License

ISC

## Donation

Buy me a cup of coffee :)

<a href="https://www.buymeacoffee.com/vyshakh.vj" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
