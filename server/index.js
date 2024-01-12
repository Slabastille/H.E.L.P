const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
const cors = require('cors');
// const authToken = process.env.AUTH_TOKEN
const authToken = 'INSERT_TOKEN_HERE';

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post('/createJiraIssue', async (req, res) => {
  let data = JSON.stringify({
    fields: {
      project: {
        key: 'TI',
      },
      summary: req.body.summary,
      issuetype: {
        name: 'Service Request',
      },
      description: req.body.description,
    },
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://jira.signifyhealth.com/rest/api/2/issue/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    data: data,
  };

  try {
    console.log('Checking now......');
    console.log(config);
    console.log('after config');
    const response = await axios.request(config);
    console.log(response);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.post('/findTickets', async (req, res) => {
  let data = JSON.stringify({
    jql: req.body.jql,
    startAt: 0,
    maxResults: 10,

    fields: ['key', 'summary', 'reporter', 'status', 'created', 'updated'],
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://jira.signifyhealth.com/rest/api/2/search/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    data: data,
  };

  try {
    console.log('Checking now......');
    console.log('Here is the token: ' + authToken);
    //console.log(config);
    //console.log('after config');
    const response = await axios.request(config);

    console.log(response.data.issues);
    await res.json(response.data.issues);
  } catch (error) {
    console.log(error);
  }
});
