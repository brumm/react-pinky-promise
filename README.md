# react-pinky-promise

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[Demo](http://react-pinky-promise.surge.sh/)

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

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
