// ./src/helpers/randomString.js
// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

export default function (length = 10) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < Number(length); i++ ) {
      result += characters.charAt( Math.floor(Math.random() * charactersLength) );
   }
   return result;
}