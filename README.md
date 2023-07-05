# Pad Thai
[![GitHub Workflow Status for Node.js](https://img.shields.io/github/actions/workflow/status/giodamelio/pad-thai/node.yml?style=flat-square&label=Node.js%20Build)](https://github.com/giodamelio/pad-thai/actions/workflows/node.yml)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/pad-thai?style=flat-square)](https://libraries.io/npm/pad-thai)
[![Codacy grade](https://img.shields.io/codacy/grade/804521530f134a7eaff3e4c192b8089c?style=flat-square)](https://app.codacy.com/gh/giodamelio/pad-thai/dashboard)
[![Codacy coverage](https://img.shields.io/codacy/coverage/804521530f134a7eaff3e4c192b8089c?style=flat-square)](https://app.codacy.com/gh/giodamelio/pad-thai/coverage/dashboard)
[![npm](https://img.shields.io/npm/v/pad-thai?style=flat-square)](https://www.npmjs.com/package/pad-thai)
[![NPM](https://img.shields.io/npm/l/pad-thai.svg?style=flat-square)](https://opensource.org/licenses/MIT)

![Pad Thai](pad-thai.jpg)

<sup>[Image CC BY-SA 3.0](https://en.wikipedia.org/wiki/Pad_thai#/media/File:Phat_Thai_kung_Chang_Khien_street_stall.jpg)</sup>

Yum.

## Install

### Node.js

```
$ npm install pad-thai
```

### Deno

```typescript
import { padThai, padThaiStart, padThaiEnd } from 'https://github.com/giodamelio/pad-thai/raw/master/src/index.ts';
```

## Usage

### Node.js

```javascript
import { padThai, padThaiStart, padThaiEnd } from 'pad-thai';

console.log(padThai(' Hello World ', 21)); // prints "thai Hello World thai"
console.log(padThaiStart(' Hello World', 16)); // prints "thai Hello World"
console.log(padThaiEnd('Hello World ', 16)); // prints "Hello World thai"
```

### Deno

```typescript
import { padThai, padThaiStart, padThaiEnd } from 'https://github.com/giodamelio/pad-thai/raw/master/src/index.ts';

console.log(padThai(' Hello World ', 21)); // prints "thai Hello World thai"
console.log(padThaiStart(' Hello World', 16)); // prints "thai Hello World"
console.log(padThaiEnd('Hello World ', 16)); // prints "Hello World thai"
```

## Why?

I was hungry and bored one night.
