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
     let newSetting = Object.fromEntries(this.defaultSetting.entries());
     this.userSettings.forEach(item => {
       if (this.defaultSetting.has(Object.keys(item)[0]) && this.configurationSetteng[Object.keys(item)[0]].includes(Object.values(item)[0])) {
         newSetting[Object.keys(item)[0]] = Object.values(item)[0];
       }

     });
     return newSetting;
   }
 }


