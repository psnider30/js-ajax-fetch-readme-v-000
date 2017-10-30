// Learn.co peronal github token: 63c4b2373743462d95d592d579f6bad60f5573c5
const app = "I don't do much.";
const token = '63c4b2373743462d95d592d579f6bad60f5573c5'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
