layout: front-page  

_faucet_ makes managing web assets a breeze: Whether **pre-processing CSS** or
**compiling modern JavaScript**, all you need is a few simple lines of
configuration to take advantage of the front-end community's **established
tooling**. It doubles as a framework-independent asset pipeline, fingerprinting
files to take advantage of **HTTP caching**.

Creating a CSS bundle from [Sass](http://sass-lang.com) is trivial:

```javascript
    source: "./styles/index.scss",
    target: "./dist/bundle.css"
```

Similarly, bundling and transpiling JavaScript could hardly be easier:

```javascript
    source: "./src/index.js",
    target: "./dist/bundle.js",
    esnext: true // activates ES6 transpiler
```

Under the hood operates a carefully selected set of proven tools: … - faucet
merely provides some preassembly on top, so all credit goes to the respective
authors.

> given the choice between making something _my_ problem, and making something
> _the user's_ problem, I'll choose to make it my problem every time

— [Jeremy Keith](https://adactio.com/journal/7706)
