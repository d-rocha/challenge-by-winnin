const snoowrap = require('snoowrap');

//Definindo os dados de Proxy para fazer as requisições a API
const credentialReddit = new snoowrap({
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
  clientId: 'vJknr3isp7RbNQ',
  clientSecret: 'fzLKlXvtiWEnE3Eli0IEBvggkxQ',
  refreshToken: '339608565646-099Cv8BYeZLQnb8l13d49XM344U'
});

export default credentialReddit;
