import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: object, dynamicPath?: string): Promise<T> {
  const prepareUrl = getUrlWithParamsConfig(endpoint, query);
  if (dynamicPath) {
    prepareUrl.pathname += `/${dynamicPath}`;
  }
  const uri = Url.format(prepareUrl);
  const result = await fetch(uri).then((res) => res.json());

  return result;
}

export default req;
