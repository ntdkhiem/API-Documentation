# Testing

## Overview

This page contains guides on how to run tests in all platforms.

Each project has different methods of testing but we host a testing party every month (usually on Friday) to test how well each platform communicate with each other.

Here is an example of the sheet that tracks every test cases: [Google Sheet](https://docs.google.com/spreadsheets/d/10iCxcx_Tx-_WtGdQ_FbNeF4W6kmJFX8Q4KIOAjaGP54/edit#gid=448471238)



## API

### Unit Testing
:::info
All unit test cases can be found in [api/src/api/tests](https://github.com/massenergize/api/tree/development/src/api/tests)
:::

Run the following command to test all test cases (make sure that you are in `src/`):

```
python .\manage.py test api.tests
```

Run the following command to test individual test case:

```
python .\manage.py test api.tests.{name of test file}.{class name}.{function name}
```

Example:

```
python .\manage.py test api.tests.test_communities.CommunitiesTestCase.test_list
```

Learn how to write and run your own test in Django: https://docs.djangoproject.com/en/4.2/topics/testing/

## Frontend Portal, Frontend Admin
### End2End
TBA: how to run cypress

## Frontend Mobile
TBA: add tests
