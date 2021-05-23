export const config = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        methid: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
    },
  },
};

export default config;
