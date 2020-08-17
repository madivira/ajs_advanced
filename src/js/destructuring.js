export default function destructuringObject(obj) {
  const returnObj = [];

  for (const {
    id, name, description = 'Описание недоступно', icon,
  } of obj.special) {
    returnObj.push({
      id, name, description, icon,
    });
  }

  return returnObj;
}
