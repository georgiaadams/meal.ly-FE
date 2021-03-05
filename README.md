# FoodSharing App

### Description

This is an app that helps to reduce food waste. Everyday restaurants and supermarkets are throwing away tons of edible food. The app connects food providers such as restaurants and supermarkets to people in need, so they can give away the food they have left.

### User Stories

- **404:** As a user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.

- **User Signup:** As a user I can sign up in the platform so that I can start browsing the offers from food providers.

- **User Login:** As a user I can login to the platform so that I can request to pickup food from providers.

- **User Homepage:** I can view some of the available offers and my pending requests.

- **User Current Offers:** As a user I can view all available offers from different providers.

- **User Offer Details:** As a user I can see more details of a particular offer and make a request to pick it up.

- **User Pending Requests:** As a user I can view all the offers that are request and pending provider response and all offers that are ready to pick up. Once I've collected the offer, I confirm it by clicking on the button "collected".

- **User Completed Offers:** As a user I can view all my completed requests.

- **Provider Signup:** As a food provider I can sign up in the platform so I can place my offers.

- **Provider Login** As a provider I can login to the platform so I can create new offers and see user requests

- **Provider Homepage:** I can add a new offer and view my pending offers.

- **Provider Add Offer:** As a food provider I can add a new offer, providing the details on quantity and the type of food I am giving away.

- **Provider Offer Details:** As a food provider I can see the details of the offer I've posted and see the users that have requested to pick them up.

- **Provider All Offers:** As a provider I can view all completed, pending collection, requested user pickup and new offers.

- **Logout:** Both users and providers can logout and close their browsing session.

### Backlog

User view:

- Map with all provider locations
- Searchbar

# Client / Frontend

## React Router Routes (React App)

| Path                        | Component            | Permissions                | Behavior                                                                        |
| --------------------------- | -------------------- | -------------------------- | ------------------------------------------------------------------------------- |
| `/`                         | SplashPage           | public `<Route>`           | Landing page, user and provider login and signup                                |
| `/user/signup`              | UserSignup           | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup                   |
| `/user/login`               | UserLogin            | anon only `<AnonRoute>`    | Login form, navigate to homepage after login                                    |
| `/provider/signup`          | ProviderSignup       | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup                   |
| `/provider/login`           | ProviderLogin        | anon only `<AnonRoute>`    | Login form, navigate to homepage after login                                    |
| `/user/homepage`            | UserHomepage         | user only `<PrivateRoute>` | List of current offers and pending collections                                  |
| `/user/offers`              | UserCurrentOffers    | user only `<PrivateRoute>` | List of all current offers                                                      |
| `/user/offers/:id`          | UserOfferDetails     | user only `<PrivateRoute>` | Single offer details and pickup request                                         |
| `/user/offers/pending`      | UserRequests         | user only `<PrivateRoute>` | List of all user's requested and ready offers, "collected" button               |
| `/user/offers/completed`    | UserCompletedOffers  | user only `<PrivateRoute>` | List of all user's completed offers                                             |
| `/provider/homepage`        | ProviderHomepage     | user only `<PrivateRoute>` | "Add a new offer" button, list of requested offers                              |
| `/provider/offers/new`      | ProviderNewOffer     | user only `<PrivateRoute>` | Form to add a new offer                                                         |
| `/provider/offers/:id`      | ProviderOfferDetails | user only `<PrivateRoute>` | Single offer details and list of pickup requests. Delete/edit offer options.    |
| `/provider/offers/edit/:id` | ProviderEditOffer    | user only `<PrivateRoute>` | Edit offer form                                                                 |
| `/provider/offers`          | ProviderRequests     | user only `<PrivateRoute>` | List of provider's offers: new, pending collection, requested pickup, completed |

### Components

- UserLogin
- ProviderLogin
- UserSignup
- ProviderSignup
- SplashPage
- Navbar
- UserHomepage
- ProviderHomepage

### Services

Auth Service

- authService.login(username, password)
- authService.signup(username, password)
- authService.logout()
- authService.me()

## Server / Backend

## Models

User model

```js
{
	firstName: {type: String, required: true},
  lastName: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
  offers: [{type: Schema.Types.ObjectId, ref:'Offer'}]
}
```

Provider model

```js
{
  companyName: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
  phoneNumber: {type: Number, required: true}
  address: {type: String, required: true}
	offers: [{type: Schema.Types.ObjectId, ref:'Offer'}]
}
```

Offer model

```js
{
  status: {type: String, enum:["new", "requested","ready","completed"]}
  companyName:{type: String, required: true},
  content: {type: String, required: true}
	quantity: {type: String, required: true}
	date: {type: Date, default: Date.now, required: true}
	pickupSlot: {type: String, required: true}
}
```

## API Endpoints (backend routes)

| HTTP Method | URL                                       | Request Body                                           | Success status | Error Status | Description                                                                                                                     |
| ----------- | ----------------------------------------- | ------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| POST        | `/auth/signup`                            | {company name, address, phone number, email, password} | 201            | 404          | Checks if fields not empty (400) and user not exists (400), then create user with encrypted password, and store user in session |
| POST        | `/auth/user/signup`                       | {name, email, password}                                | 201            | 404          | Checks if fields not empty (400) and user not exists (400), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                             | {email, password}                                      | 200            | 401          | Checks if fields not empty (400), if user exists (404), and if password matches (401), then stores user in session              |
| POST        | `/auth/user/login`                        | {email, password}                                      | 200            | 401          | Checks if fields not empty (400), if user exists (404), and if password matches (401), then stores user in session              |
| GET         | `/auth/logout`                            | (empty)                                                | 204            | 400          | Logs out the user                                                                                                               |
| GET         | `/api/user/offers/status/new`             |                                                        | 200            | 400          | Show all current offers                                                                                                         |
| GET         | `/api/user/offers/:id`                    | {id}                                                   | 200            | 400          | Show specific offer details                                                                                                     |
| GET         | `/api/user/offers/status/completed`       | {}                                                     | 200            | 400          | Show all user completed offers                                                                                                  |
| GET         | `/api/user/offers/status/ready-requested` | {}                                                     | 200            | 400          | Showing all requested and ready offers                                                                                          |
| GET         | `/api/provider/offers`                    | {}                                                     | 200            | 400          | Show all new, requested, ready and completed offers for the current provider                                                    |
| POST        | `/api/provider/offers`                    | {content, quantity, date, pickupSlot, companyName}     | 201            | 404          | Add a new offer                                                                                                                 |
| GET         | `/api/provider/offers/:id`                | {id}                                                   | 200            | 400          | Show offer details (it's the same as in the user route)                                                                         |
| PUT         | `/api/provider/offers/:id`                | {id, content, quantity, date, pickupSlot, companyName} | 201            | 400          | edit an offer                                                                                                                   |
| DELETE      | `/api/provider/offers/:id`                | (empty)                                                | 201            | 400          | delete an offer                                                                                                                 |

## Links

### Trello

https://trello.com/b/hU59tlkJ/project-3

### Git

https://github.com/georgiaadams/finalProject
https://github.com/georgiaadams/finalProjectFE
