const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3001;
const cors = require('cors');
// const authToken = process.env.AUTH_TOKEN

// const history = require('connect-history-api-fallback');
// app.use(history());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

app.post('/createJiraIssue', async (req, res) => {
  let data = JSON.stringify({
    // fields: {
    //   project: {
    //     key: 'TI',
    //   },
    //   summary: req.body.summary,
    //   issuetype: {
    //     name: 'Service Request',
    //   },
    //   description: req.body.description,
    // },
    fields: {
      project: {
        key: req.body.projectName,
      },
      summary: `Provider Hardware Request: ${req.body.name}`,
      issuetype: {
        name: 'Hardware Request',
      },
      customfield_20100: req.body.npi,
      customfield_18343: req.body.name,
      customfield_12412: req.body.name,
      customfield_22714: req.body.address1,
      customfield_22712: req.body.address2,
      customfield_20905: req.body.city,
      customfield_12213: { value: req.body.state },
      customfield_12208: req.body.zip,
      customfield_13103: req.body.phone,
      customfield_18192: req.body.email,

      customfield_22315: { value: req.body.isAssetsVerified },

      // security: { name: 'Hardware Requests' },
    },
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://jira.dev.signifyhealth.com/rest/api/2/issue/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${devToken}`,
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
    maxResults: 15,

    fields: [
      'key',
      'summary',
      'reporter',
      'status',
      'created',
      'updated',
      'description',
    ],
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://jira.dev.signifyhealth.com/rest/api/2/search/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${devToken}`,
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

app.post('/createJiraIssuev2', async (req, res) => {
  let data = JSON.stringify({
    fields: {
      project: {
        key: req.body.project,
      },
      // customfield_20100: req.body.npi,
      // customfield_18343: req.body.name,
      // customfield_12412: req.body.name,
      // customfield_22714: req.body.address1,
      // customfield_22712: req.body.address2,
      // customfield_20905: req.body.city,
      // customfield_12213: { value: req.body.state },
      // customfield_12208: req.body.zip,
      // customfield_13103: req.body.phone,
      // customfield_18192: req.body.email,

      customfield_22315: req.body.isAssetsVerified,

      summary: 'Provider Hardware Request: ' + req.body.name,
      issuetype: {
        name: req.body.issueType,
      },

      security: { name: 'Hardware Requests' },
    },
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://jira.dev.signifyhealth.com/rest/api/2/issue/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${devToken}`,
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
    console.log(error.data);
  }
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../dist/index.html'))
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
