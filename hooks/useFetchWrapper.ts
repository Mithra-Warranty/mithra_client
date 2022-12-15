interface fetchAPIDataInterface {
  method: 'GET' | 'POST';
  headers: any;
  body?: string | null;
}

export const useFetchWrapper = async () => {
  return {
    get: request('GET'),
    post: request('POST'),
  };

  function request(method: 'GET' | 'POST') {
    return (url: string | Promise<any>, data: any = null) => {
      const protocol = process.env.ENVIRONMENT === 'prod' ? 'https' : 'http';
      const domain =
        process.env.ENVIRONMENT === 'prod'
          ? process.env.DOMAIN
          : 'localhost:5050';

      let endpoint: string | Promise<any>;
      if (typeof url === 'string') {
        if (url[0] === '/') url = url.substring(1);
        const finalUrl = `${protocol}://${domain}/${url}`;
        endpoint = finalUrl;
      } else endpoint = url;

      const apiData: fetchAPIDataInterface = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: null,
      };

      if (method == 'POST') apiData.body = JSON.stringify(data);
      return safeFetch(endpoint, apiData);
    };
  }

  async function safeFetch(
    endpoint: string | Promise<any>,
    apiData: any = null
  ) {
    try {
      const promise =
        typeof endpoint === 'string' ? fetch(endpoint, ...apiData) : endpoint;
      const response = await promise;

      if (!response.ok) throw new Error('Server Error');

      const data = response.json();

      return [data, null];
    } catch (err) {
      return [null, err];
    }
  }
};
