 export default class Settings {
   constructor(userSettings) {
     this.userSettings = userSettings;
     this.defaultSetting = new Map([
       [
         'theme', 'dark'
       ],
       [
         'music', 'trance'
       ],
       [
         'difficulty', 'easy'
       ]
     ])
     this.configurationSetteng = {
       theme: ['light', 'grey', 'red'],
       music: ['pop', 'rock', 'chillout', 'off'],
       difficulty: ['normal', 'hard', 'nightmare'],
     }
   }

   getSetting() {
     this.userSettings.forEach(item => {
       if (this.defaultSetting.has(Object.keys(item)[0])) {
         console.log('sod');
         this.defaultSetting.set(Object.keys(item)[0], Object.values(item)[0]);
       }
     });
   }
 }

