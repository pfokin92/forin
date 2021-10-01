export default function orderByProps(obj, order) {
  const keysArr = [];
  const sortArr = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (order.includes(key)) {
      keysArr.push({
        key,
        value: obj[key],
      });
    } else {
      sortArr.push({
        key,
        value: obj[key],
      });
    }
  }
  sortArr.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    }
    return 0;
  });
  return [...keysArr, ...sortArr];
}
