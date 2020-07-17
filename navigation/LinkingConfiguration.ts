import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Notes: {
            screens: {
              Notes: 'notes',
            },
          },
          Note: {
            screens: {
              Note: 'note',
            },
          },
          Settings: {
            screens: {
              Settings: 'note',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
