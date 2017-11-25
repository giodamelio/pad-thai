# Pad Thai

![Pad Thai](pad-thai.jpg)

<sup>[Image CC BY-SA 3.0](https://en.wikipedia.org/wiki/Pad_thai#/media/File:Phat_Thai_kung_Chang_Khien_street_stall.jpg)</sup>

Yum.

### Install

```
$ yarn add pad-thai
# or
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
