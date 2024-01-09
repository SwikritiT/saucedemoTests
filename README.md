## Run the test
Run following commands to run the tests
```bash
npm install
```

Run all the tests at once
```bash
npm run test:e2e tests/acceptance/features
```

Run particular feature 
```bash
npm run test:e2e tests/acceptance/features/<name-of-feature-file>.feature
```

Run particular scenario in a feature
```bash
npm run test:e2e tests/acceptance/features/<name-of-feature-file>.feature:<scenario-line-number>
```

By default, the tests will run on headed mode but if you want to run the tests in headless then following env can be set
```bash
HEADLESS=true npm run test:e2e tests/acceptance/features
```

Similarly, tests are run a little bit slower to see it being automated in browser. If you don't want the tests to run slowly you can set follwing env variable
```bash
SLOMO=0 npm run test:e2e tests/acceptance/features
```
