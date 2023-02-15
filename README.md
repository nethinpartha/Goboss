#C-PaaS Front End code base

##Libraries used

- `React` for view components
- `Redux` for state management
- `fetch` API polyfill for HTTP requests
- `Axios` API calls and interceptors

##Adding a new dependency

- run `yarn add <Dependency-name> ` in root folder of frontend code where
  +package.json is located. use `--dev` if it is a development dependency
- This will result in mainly three changes which must be checked-in to repo
- changes in offline-mirror
- changes in yarn.lock ( according to git it is a binary file )
- changes in package.json

##Development Environment Setup

##Build and Run

##Requirements

- env config
- `REACT_APP_STOREENCRYPTOR` = to encrypt the entire store for persistant gate
- `REACT_APP_ENV=development` ( or it can be production to remove redux dev tool)
- `REACT_APP_STRIPE_PUBLISHABLE_KEY` =
- `REACT_APP_THEMETYPE` = classic / or modern
- `REACT_APP_TENANTNAME` = tenantname (for ex. tentkotta/dorm)
- `REACT_APP_GEOLOCATION_DB_API_KEY=` = API key for https://geolocation-db.com/ geolocation realted details
- `nodejs version 6 and above`
- `yarn latest`
- If you are behind proxy make sure you have proxy settings for `npm`

##Build

- open terminal in `~CPASS-WEB-APP/src/` directory
- run `yarn install` to install packages
- run `yarn run build` to build source code

##Run unit test cases

- run `yarn install`
- run `yarn test`
- run `npm run test -- --coverage --watchAll=false`

##Source code directory structure
Note: This directory structure may not be found in current source
This is placed here to make open for discussion so we can ammend the changes and implement the same

```
src
|--API //An API for all business logic, validation logic etc can go in isolated from framework
|--Components
|  |--AccountInformationPopOver component
|  |--AccountDetails component
|  |--Authentication component
    |  |--Forgot password component
    |  |--Payment options
    |  |--Sign in component
    |  |--Sign up component
|  |--Billing Details component
|  |--Carosal
    |  |--Hover screen component // can be used only on desktop view
|  |--Content details
    |  |--Controlled tab // used for tabination of details and other related information section within the details page
|  |--Jumbotron component
|  |--Dialogs
|  |--Footer component
|  |--Full side bar navigation component
|  |--Header component
|  |--HeroBanner
|  |--Hero banner with icons and content component
|  |--My list component
|  |--partials
|  |--Player
|  |--Router // has the various switch cases for pages routes and also contains protected route to prevent unauthenticated routes access
|  |--Stripe checkout debit/credit card details form
|  |--Tray component
|  |--Tray component with filter
|  |--Tray component with text
|  |--Trending Now component
|  |....
|--Pages
|  |--App
|  |--HomePage
|  |--SignUpPage
|  |--VideoInfoPage
|  |....
|--frontend-library
|  |--atoms
|  |--molecules
|  |--icons
|  |....
|--Testing-utils
|  |--Utils
|--context
|--styles
|  |--layouts
   |  |--components
      |  |--scss
      |  |--styled-component
    |  |--page
|  |--selectors
.  .....
....

```

##Page Composition

```
+-----------------------------------------------+
|                                               |
|        PAGE / An Instance of application      |
|                                               |
| +-------------------------------------------+ |
| |                                           | |
| |               COMPONENTS                  | |
| |                                           | |
| | Buttons, Cards, Carousels,Search panel..  | |
| |                                           | |
| +-------------------------------------------+ |
|                                               |
| +-------------------------------------------+ |
| |                                           | |
| |              Integrations                 | |
| |                                           | |
| |  Action creators, Epics,Business logic... | |
| |                                           | |
| +-------------------------------------------+ |
| +-------------------------------------------+ |
| |                                           | |
| |                  Store                    | |
| |                                           | |
| |  State, Reducers, Middlewares ....        | |
| |                                           | |
| +-------------------------------------------+ |
|                                               |
+-----------------------------------------------+
```

##Unit testing
###Libraries for unit testing

- `jest`
- `enzyme` for shallow rendering react components
- `jest-fetch-mock` for mocking fetch HTTP API ??
