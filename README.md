# react-native-multitap

> React Native multi tap component with the ability to handle single tap, double tap, triple tap, long press.

[![](https://img.shields.io/npm/v/react-native-multitap.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-multitap)  
[![](https://img.shields.io/bundlephobia/min/react-native-multitap.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-multitap)  
[![](https://img.shields.io/github/license/eonyxio/react-native-multitap.svg?style=for-the-badge)](LICENSE.md)

## Install

```bash
npm i -S react-native-multitap
```

## Usage

```js
import MultiTap from 'react-native-multitap'

...

<MultiTap
    onDoubleTap={() => console.log("double tapped")}
    onSingleTap={() => console.log("single tapped")}
    onTripleTap={() => console.log("triple tapped")}
    onNTap={(no) => { console.log("I was clicked ", no) }}
    onLongPress={() => console.log("long pressed")}
    delay={1000}>
    
</MultiTap>

```

## License

[MIT](LICENSE)