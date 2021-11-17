
import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from 'styles';
import { createClientService } from 'services/Client/api';
import { columns, tables } from 'storage';

// const Clients = database.get<ClientDB>(tables.client).query().observe()

const App = () => {


  const retrieveData = async () => {
    // console.log('Test: ', columns.client)
    const list = await createClientService().list()

    // eslint-disable-next-line no-console
    console.log(list)
  }

  useEffect( () => {
    retrieveData()
  }, [])

  return (
    <SafeAreaView style={styles.root}>
      <Text>Hello</Text>
      {/* <ClientCard client={Clients} /> */}
    </SafeAreaView>
  );
};

export default App;
