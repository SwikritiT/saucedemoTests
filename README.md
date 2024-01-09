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
