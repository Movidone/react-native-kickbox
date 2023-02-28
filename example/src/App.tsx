import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Kickbox from 'react-native-kickbox';

export default function App() {
  const [result, setResult] = React.useState<string>();

  React.useEffect(() => {
    const kb = new Kickbox('API_KEY_TEST');
    kb.verify('bill.lumbergh@gamil.com')
      .then((r) => {
        setResult(JSON.stringify(r));
      })
      .catch((err) => {
        setResult(JSON.stringify(err));
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
