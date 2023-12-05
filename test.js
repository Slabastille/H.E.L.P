const axios = require('axios');
let data = JSON.stringify({
  fields: {
    project: {
      key: 'MS',
    },
    summary: ' Sixth API Test - SAMUEL ',
    issuetype: {
      name: 'Support Request',
    },
    description: 'Postman API TESTING',
  },
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://jira.signifyhealth.com/rest/api/2/issue/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer OTk1MDA0ODY1NDMxOpuOAUgiGKyA7hF05i9twFp2hzqq',
  },
  data: data,
};

async function makeRequest() {
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}

makeRequest();
