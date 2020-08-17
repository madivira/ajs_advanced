export default function orderByProps(obj, arrayKey) {
  const objNew = [];
  const keys = Object.keys(obj);

  // сортировка ключей

  for (const prop in arrayKey) {
    if (Object.prototype.hasOwnProperty.call(arrayKey, prop)) {
      keys.splice(keys.indexOf(arrayKey[prop]), 1);
    }
  }

  keys.sort();

  const objkeys = arrayKey.concat(keys);

  // создание нового массива объектов
  for (const prop of objkeys) {
    if (Object.prototype.hasOwnProperty.call(objkeys, prop)) {
      objNew.push({ key: prop, value: obj[prop] });
    }
  }
  return objNew;
}
