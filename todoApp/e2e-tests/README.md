# End-to-End Tests with Playwright

This directory contains end-to-end (e2e) tests for TodoApp using [Playwright](https://playwright.dev/). These tests ensure the application works correctly from a user's perspective by simulating real user interactions.

## Test Structure

```
e2e-tests/
├── tests/                      # Test files
│   ├── demoAppTests.spec.ts   # Demo app functionality tests
│   ├── landingPageTests.spec.ts # Landing page tests
│   ├── pricingPageTests.spec.ts # Pricing page tests
│   └── utils.ts               # Shared test utilities
├── playwright.config.ts       # Playwright configuration
├── ci-start-app-and-db.js    # CI environment setup
└── package.json              # Test dependencies
```

## Prerequisites

- Node.js (16.x or higher)
- PostgreSQL database
- [Wasp CLI](https://wasp-lang.dev/docs/quick-start)
- [Stripe CLI](https://stripe.com/docs/stripe-cli) (for payment-related tests)

## Setup & Installation

1. Install test dependencies:
```bash
cd e2e-tests
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests Locally

### 1. Start the Database
```bash
cd ../app
wasp db start
```

### 2. Start the Application
In a new terminal, start the app with email verification disabled:
```bash
cd ../app
SKIP_EMAIL_VERIFICATION_IN_DEV=true wasp start
```

> [!IMPORTANT]  
> Setting `SKIP_EMAIL_VERIFICATION_IN_DEV=true` is crucial for e2e tests as it bypasses email verification
> which would otherwise cause tests to hang waiting for verification.

### 3. Run the Tests
In a new terminal:
```bash
cd e2e-tests
npm run local:e2e:start
```

This launches Playwright's UI mode, allowing you to:
- View tests running in real-time
- Debug test failures
- Inspect test steps
- Run individual tests or test files

## Test Scripts

- `npm run local:e2e:start` - Run tests in UI mode
- `npm run test` - Run tests in headless mode
- `npm run test:headed` - Run tests with browser visible
- `npm run test:debug` - Run tests in debug mode

## CI/CD Integration

To set up CI/CD:

1. Copy the GitHub Actions workflow:
```bash
mkdir -p ../.github/workflows
cp /path/to/open-saas/.github/workflows/e2e-tests.yml ../.github/workflows/
```

2. Update the workflow configuration:
- Set `WASP_VERSION` to match your project's Wasp version
- Configure GitHub Secrets for environment variables

Required GitHub Secrets:
```
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
DATABASE_URL
JWT_SECRET
```

The tests will automatically run on:
- Push to main branch
- Pull requests targeting main branch

## Test Files Overview

- `demoAppTests.spec.ts` - Tests core app functionality
- `landingPageTests.spec.ts` - Tests landing page elements and interactions
- `pricingPageTests.spec.ts` - Tests pricing page and payment flows
- `utils.ts` - Shared test utilities and helper functions

## Best Practices

1. **Test Organization**
   - Group related tests using `describe` blocks
   - Use clear, descriptive test names
   - Keep tests independent and isolated

2. **Page Objects**
   - Use page object pattern for maintainable tests
   - Encapsulate page-specific selectors and actions

3. **Test Data**
   - Use dynamic test data generation
   - Clean up test data after tests
   - Avoid dependencies between tests

4. **Assertions**
   - Make assertions specific and meaningful
   - Check both positive and negative scenarios
   - Verify visual and functional aspects

## Debugging

To debug failing tests:

1. Run in headed mode:
```bash
npm run test:headed
```

2. Use debug mode:
```bash
npm run test:debug
```

3. Add `await page.pause()` in your test code

## Contributing

1. Create descriptive test files
2. Follow existing test patterns
3. Update documentation for new test scenarios
4. Run tests locally before submitting PR

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Wasp Testing Guide](https://wasp-lang.dev/docs/testing/e2e-tests)
- [Stripe Testing](https://stripe.com/docs/testing)
