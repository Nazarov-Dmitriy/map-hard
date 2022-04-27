import Settings from '../Settings';

test('Проверка замены пользовательских настроек', () => {
  let setting = new Settings([{
    'theme': 'red',
  }, {
    'music': 'chillout'
  }]);
  
  expect(setting.getSetting()).toEqual({
    theme: 'red',
    music: 'chillout',
    difficulty: 'easy'
  });
});
