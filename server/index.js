const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
const cors = require('cors');
require('dotenv').config();
const authToken = process.env.AUTH_TOKEN;

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

app.post('/findAssigned', async (req, res) => {
  let data = JSON.stringify({
    jql: "assignee = 'slabastille@signifyhealth.com' AND status not in (Canceled, Closed, Done, Resolved, 'Task Complete', 'Task Verified (Accepted)')",
    startAt: 0,
    maxResults: 3,

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
    console.log(config);
    console.log('after config');
    const response = await axios.request(config);

    console.log(response.data.issues);
    await res.json(response.data.issues);
  } catch (error) {
    console.log(error);
  }
});

//OTk1MDA0ODY1NDMxOpuOAUgiGKyA7hF05i9twFp2hzqq
