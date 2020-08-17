import orderByProps from '../orderByProps';

describe('Test orderByProps', () => {
  test('doing name, level', () => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };

    expect(orderByProps(obj, ['name', 'level'])).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });
  test('doing []', () => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };

    expect(orderByProps(obj, [])).toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
  });
  test('doing defence, level, attack, health, name', () => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };

    expect(orderByProps(obj, ['defence', 'level', 'attack', 'health', 'name'])).toEqual([
      { key: 'defence', value: 40 },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
      { key: 'name', value: 'мечник' },
    ]);
  });
});
