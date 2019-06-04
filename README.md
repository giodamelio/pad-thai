# Pad Thai
[![Travis (.org)](https://img.shields.io/travis/giodamelio/pad-thai.svg?style=flat-square)](https://travis-ci.org/giodamelio/pad-thai) [![Coveralls github](https://img.shields.io/coveralls/github/giodamelio/pad-thai.svg?style=flat-square)](https://coveralls.io/github/giodamelio/pad-thai) [![npm](https://img.shields.io/npm/v/pad-thai.svg?style=flat-square)](https://www.npmjs.com/package/pad-thai) [![NPM](https://img.shields.io/npm/l/pad-thai.svg?style=flat-square)](https://opensource.org/licenses/MIT)

![Pad Thai](pad-thai.jpg)

<sup>[Image CC BY-SA 3.0](https://en.wikipedia.org/wiki/Pad_thai#/media/File:Phat_Thai_kung_Chang_Khien_street_stall.jpg)</sup>

Yum.

### Install

```
$ npm install pad-thai
```

### Usage

```javascript
const { padThai, padThaiStart, padThaiEnd } = require('pad-thai');

console.log(padThai(' Hello World ', 21)); // prints "thai Hello World thai"
console.log(padThaiStart(' Hello World', 16)); // prints "thai Hello World"
console.log(padThaiEnd('Hello World ', 16)); // prints "Hello World thai"
```

### Why?

I was hungry and bored one night.
