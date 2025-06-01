import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const convertToQueryParams = (params = {}) => {
  let queryString = '';
  Object.keys(params).forEach((key, index) => {
    if (index === 0) queryString += `?${key}=${params[key]}`;
    else queryString += `&${key}=${params[key]}`;
  });
  return queryString;
};

export const GET = (endpoint = '', params = {}) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('auth_token');
    let url = Constants?.expoConfig?.api?.url;
    if (Constants?.expoConfig?.api?.port)
      url += `:${Constants?.expoConfig?.api?.port}`;
    url += '/api' + endpoint + convertToQueryParams(params);
    const options = {
      method: 'GET',
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
    fetch(url, options)
      .then(async (response) => {
        if (response.status === 401) {
          const error = new Error((await response.json()).message);
          reject(error);
        }
        if (response.status === 418 || response.status === 503) {
          const error = new Error(response.status);
          reject(error);
        }
        if (!response.ok) {
          reject(
            new Error(`${response.statusText || 'FETCH_DATA_ERROR'}\n${url}`)
          );
        }

        const json = await response.json();
        resolve(json);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const POST = (endpoint = '', data = {}, customHeaders = null) => {
  return new Promise(async (resolve, reject) => {
    let url = Constants?.expoConfig?.api?.url;
    const token = await AsyncStorage.getItem('auth_token');
    if (Constants?.expoConfig?.api?.port)
      url += `:${Constants?.expoConfig?.api?.port}`;
    url += '/api' + endpoint;

    const isFormData = data instanceof FormData;
    const body = isFormData ? data : JSON.stringify(data);
    const options = {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
        ...customHeaders,
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      },
      body,
    };

    try {
      const response = await fetch(url, options);

      if (response.status === 401) {
        const error = new Error((await response.json()).message);
        reject(error);
      }
      if (response.status === 418 || response.status === 503) {
        const error = new Error(response.status);
        reject(error);
      }
      if (!response.ok) {
        reject(
          new Error(
            `${
              response.statusText || 'POST_DATA_ERROR'
            }\n${url}\n${JSON.stringify(data)}`
          )
        );
      }
      const json = await response.json();
      resolve(json);
    } catch (e) {
      reject(e);
    }
  });
};
