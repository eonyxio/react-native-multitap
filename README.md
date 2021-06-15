# react-native-multitap

React Native multi tap component with the ability to handle single tap, double tap, triple tap, long press and all other props accepted by the `Pressable` component.


[![](https://img.shields.io/npm/v/react-native-multitap.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-multitap)
[![](https://img.shields.io/bundlephobia/min/react-native-multitap.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-multitap)
[![](https://img.shields.io/github/license/eonyxio/react-native-multitap.svg?style=for-the-badge)](LICENSE.md)

## Install

```bash
npm i -S react-native-multitap
```

## Usage

```js
import React from 'react'
import { Text, View } from 'react-native'
import MultiTap from 'react-native-multitap'

export default App() => {
    return (
        <MultiTap
            onDoubleTap={() => alert("Double tapped")}
            onSingleTap={() => alert("Single tapped")}
            onTripleTap={() => alert("Triple tapped")}
            onNTaps={(n) => { alert("I was tapped " + n + " times") }}
            onLongPress={() => alert("Long pressed")}
            delay={300}>
            <View>
                <Text>Tap Me</Text>
            </View>
        </MultiTap>
    )
}

```
## Props

| Property    | Type     | Default      | Description                           |
| ----------- | -------- | ------------ | ------------------------------------- |
| delay       | number   | 200          | Time for maximum delay between taps   |
| onSingleTap | function | `() => {}`   | Callback for single tap event         |
| onDoubleTap | function | `() => {}`   | Callback for double tap event         |
| onTripleTap | function | `() => {}`   | Callback for triple tap event         |
| onNTaps     | function | `() => {}`   | Callback for more than 3 tap event    |

## License

[MIT](LICENSE)
