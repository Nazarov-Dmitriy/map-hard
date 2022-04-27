import Settings from '../Settings';

test('Проверка замены пользовательских настроек', () => {
  let setting = new Settings([{
    'theme': 'red',
  }, {
    'music': 'rock'
  }]);
  setting.getSetting()
  expect(Array.from(setting.defaultSetting)).toEqual([
    ['theme', 'red'],
    ['music', 'rock'],
    ['difficulty', 'easy']
  ]);
});
