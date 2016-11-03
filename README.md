
![](http://i.imgur.com/epeP715.png)
# react-pinky-promise

[![npm version](https://badge.fury.io/js/react-pinky-promise.svg)](https://badge.fury.io/js/react-pinky-promise)

[**Demo**](http://react-pinky-promise.surge.sh/)

**Installation**

```
npm install --save react-pinky-promise
```

or

```
yarn add react-pinky-promise
```

**How to use it**

```js
<Pinky promise={new Promise((resolve, reject) => setTimeout(() => resolve('Yay after 3s'), 3000))}>
  {({pending, resolved, rejected}) => (
    <div>
      {pending && <div>pending</div>}
      {resolved && <div>resolved: {resolved}</div>}
      {rejected && <div>rejected: {rejected}</div>}
    </div>
  )}
</Pinky>
```
