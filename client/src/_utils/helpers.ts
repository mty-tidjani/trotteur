/* eslint-disable max-len */
export const isEmail = (str: string) => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(str);
};


export const strRandom = (val: number): string => {
  let str = '';
  const possible = 'BCDFGHIJKLMNPQRSTUVWXYZ0123456789';
  for (let i = 0; i < val; i += 1)
    str += possible.charAt(Math.floor(Math.random() * possible.length));
  return str;
};
