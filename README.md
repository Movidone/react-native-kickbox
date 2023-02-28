# react-native-kickbox

React-native library for https://kickbox.com

## Installation

```sh
npm install react-native-kickbox
```

## Usage

```js
import Kickbox from 'react-native-kickbox';

// ...

const kb = new Kickbox('API_KEY_TEST');
kb.verify('bill.lumbergh@gamil.com')
  .then((r) => {
    setResult(JSON.stringify(r));
  })
  .catch((err) => {
    setResult(JSON.stringify(err));
  });
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
