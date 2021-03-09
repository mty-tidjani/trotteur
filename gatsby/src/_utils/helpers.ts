export const strRandom = (val: number): string => {
  let str = '';
  const possible = 'BCDFGHIJKLMNPQRSTUVWXYZ0123456789';
  for (let i = 0; i < val; i += 1)
    str += possible.charAt(Math.floor(Math.random() * possible.length));
  return str;
};