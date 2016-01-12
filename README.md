# API.DATA.GOV Tests

API tests API.DATA.GOV

### Comments
   - Tests were performed against this URL: [https://api.data.gov/nrel/alt-fuel-stations/v1/](https://api.data.gov/nrel/alt-fuel-stations/v1/).  
     The provided URL was incorrect: [https://api.data.gov/docs/nrel/transportation/alt-fuel-stations-v1/](https://api.data.gov/docs/nrel/transportation/alt-fuel-stations-v1/).

### Setting up

These API tests utilize [Chakram](http://dareid.github.io/chakram/) which requires [NodeJS](https://nodejs.org) to be installed.
Check the version of node you have by running `node --version`. It should be greater than v0.10.0.
All other dependencies need to be installed with the following command:

    npm install

### Executing Tests

Run the following command to execute tests:

    npm test

### Static analysis

Run the following command to run static analysis with _eslint_:

    npm run lint


