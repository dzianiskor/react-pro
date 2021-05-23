import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string) {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  };
}

export default getUrlWithParamsConfig;
