import destructuringObject from '../destructuring';

describe('Test destructuring', () => {
  test('doing', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };

    expect(destructuringObject(character)).toEqual([{
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    }]);
  });

  test('doing description undefined all', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
        {
          id: 10,
          name: 'Прыжок',
          icon: 'http://...',
        },
      ],
    };

    expect(destructuringObject(character)).toEqual([{
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
    {
      id: 10,
      name: 'Прыжок',
      icon: 'http://...',
      description: 'Описание недоступно',
    }]);
  });

  test('doing description', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [{
        id: 1,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 2,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Нокаутирующий удар наносит двойной урон',
      },
      {
        id: 3,
        name: 'Прыжок',
        icon: 'http://...',
        description: 'Прыжок наносит двойной урон',
      }],
    };

    expect(destructuringObject(character)).toEqual([{
      id: 1,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 2,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Нокаутирующий удар наносит двойной урон',
    },
    {
      id: 3,
      name: 'Прыжок',
      icon: 'http://...',
      description: 'Прыжок наносит двойной урон',
    }]);
  });
});
