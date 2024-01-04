// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const jiraApiUrl = 'https://jira.signifyhealth.com/rest/api/2/issue/';

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
      Authorization: 'Bearer ODA3NDc3NTQyMjg1OmxrUbya5gfF5baBvg7uMlXqBYwh',
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//OTk1MDA0ODY1NDMxOpuOAUgiGKyA7hF05i9twFp2hzqq
