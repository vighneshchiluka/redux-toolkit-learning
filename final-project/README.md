# 🚀 MediaSearch – React + Redux Toolkit

## 📌 Project Overview

MediaSearch is a React application that allows users to search for:

- Photos using Unsplash API
- Videos using Pexels API
- GIFs using GIPHY API

Users can save media to a collection, remove saved items, clear the collection, and keep saved items after refreshing using LocalStorage.

This project demonstrates React, Redux Toolkit, API integration, React Router, Axios, LocalStorage, React Toastify, and Tailwind CSS.


## 🛠️ Tech Stack

- React
- Redux Toolkit
- React Redux
- React Router DOM
- Axios
- Unsplash API
- Pexels API
- GIPHY API
- React Toastify
- Tailwind CSS
- LocalStorage
- Vite


## 📁 Project Structure

src/
│
├── api/
│   └── mediaApi.js
│
├── components/
│   ├── CollectionCard.jsx
│   ├── Navbar.jsx
│   ├── ResultCard.jsx
│   ├── ResultGrid.jsx
│   ├── SearchBar.jsx
│   └── Tabs.jsx
│
├── pages/
│   ├── CollectionPage.jsx
│   └── HomePage.jsx
│
├── redux/
│   ├── features/
│   │   ├── collectionSlice.js
│   │   └── searchSlice.js
│   └── store.js
│
├── App.jsx
├── index.css
└── main.jsx


## 🧭 Application Structure

App
│
├── Navbar
│
├── Routes
│   ├── HomePage
│   └── CollectionPage
│
└── ToastContainer


Routes:

/
→ HomePage

/collection
→ CollectionPage


## 🔌 main.jsx

main.jsx is the entry point of the application.

It wraps the application with:

- Redux Provider
- BrowserRouter

<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>

Provider makes the Redux store available to components.

BrowserRouter enables React Router navigation.


## 🗃️ Redux Store

The Redux store contains two slices:

search
→ query, activeTab, results, loading, error

collection
→ saved media items


Store structure:

store
│
├── search
└── collection


### searchSlice.js

Initial state:

{
  query: "",
  activeTab: "photos",
  results: [],
  loading: false,
  error: null
}


Reducers:

- setQuery()
- setActiveTabs()
- setLoading()
- setResults()
- setError()
- clearResults()


### collectionSlice.js

Manages:

items


It handles:

- Adding media
- Preventing duplicates
- Removing media
- Clearing the collection
- Saving collection to LocalStorage


## 🔄 Redux Data Flow

The main Redux pattern is:

Component
↓
dispatch(action)
↓
Reducer
↓
Redux State
↓
useSelector()
↓
UI updates


Examples:

dispatch(setQuery(text))

dispatch(setActiveTabs(elem))

dispatch(addCollection(item))

dispatch(removeCollection(item.id))


## 🔍 SearchBar.jsx

SearchBar uses local state for the input:

const [text, setText] = useState("")


Typing is handled by local state.

When the user submits:

dispatch(setQuery(text))


So:

Typing
→ useState

Submitted search
→ Redux


## 🏠 HomePage.jsx

HomePage reads the search query from Redux.

If there is no query:

→ Only SearchBar is displayed.

If a query exists:

→ Tabs + ResultGrid are displayed.


Flow:

HomePage
↓
Redux query
↓
Query exists?
├── No → SearchBar
└── Yes → Tabs + ResultGrid


## 🗂️ Tabs.jsx

Tabs contains:

- photos
- videos
- GIPHY


When a tab is clicked:

dispatch(setActiveTabs(elem))


Changing activeTab causes ResultGrid to fetch the corresponding media type.


## 🌐 mediaApi.js

API logic is separated into:

api/mediaApi.js


Functions:

fetchPhotos()
→ Unsplash API

fetchVideos()
→ Pexels API

fetchGIPHY()
→ GIPHY API


Axios is used for API requests.

API keys are stored using environment variables:

VITE_UNSPLASH_KEY
VITE_PEXELS_KEY
VITE_GIPHY_KEY


The real API keys should never be committed to GitHub.


## 📊 ResultGrid.jsx

ResultGrid is responsible for:

- Reading search state
- Fetching API data
- Selecting the correct API
- Handling loading
- Handling errors
- Normalizing API responses
- Storing results in Redux
- Rendering ResultCard


It reads:

query
activeTab
results
loading
error


from:

state.search


### useEffect

The API request runs when:

query

or

activeTab

changes.

Flow:

Search / Tab Change
↓
useEffect()
↓
Check activeTab
↓
Select API
↓
Fetch Data
↓
Normalize Response
↓
dispatch(setResults())
↓
ResultCard


### API Selection

photos
→ Unsplash

videos
→ Pexels

GIPHY
→ GIPHY


### API Response Normalization

Each API has a different response structure.

ResultGrid converts them into one common structure:

{
  id,
  type,
  title,
  thumbnail,
  src,
  url
}


This allows ResultCard to work with all three APIs using the same data format.


### Loading & Error Handling

Before the request:

dispatch(setLoading())


Success:

dispatch(setResults(data))


Error:

dispatch(setError(err.message))


ResultGrid displays the loading or error state accordingly.


## 🖼️ ResultCard.jsx

ResultCard receives:

<ResultCard item={item} />


It displays:

- <img /> for photos and GIFs
- <video /> for videos

It also provides the Save button.


### Saving Media

When Save is clicked:

dispatch(addCollection(item))

dispatch(addedToast())


collectionSlice checks the item ID to prevent duplicates, adds the item, and saves the updated collection to LocalStorage.


## 📚 CollectionPage.jsx

CollectionPage reads:

state.collection.items


It displays each saved item using:

<CollectionCard item={item} />


If there are no items:

Collection is Empty


If items exist:

Your Collection
+
CollectionCard components
+
Clear Collection button


## 🃏 CollectionCard.jsx

CollectionCard receives the saved item through props.

It displays:

- <img /> for photos/GIFs
- <video /> for videos

It also provides the Remove button.


### Removing Media

When Remove is clicked:

dispatch(removeCollection(item.id))

The item is removed from Redux and LocalStorage.

A toast is also displayed.


### Clearing Collection

CollectionPage dispatches:

dispatch(clearCollection())


This:

- Sets items to []
- Removes the collection from LocalStorage


## 💾 LocalStorage

The collection is stored using the key:

"collection"


This allows saved media to remain after a browser refresh.

Flow:

Redux Collection
↓
LocalStorage
↓
Refresh
↓
Read LocalStorage
↓
Restore Collection


## 🔔 React Toastify

React Toastify provides user feedback.

App.jsx contains:

<ToastContainer />


Collection actions use:

addedToast()
→ "Added to Collection✅"

removeToast()
→ "Removed from Collection"


## 🔄 Props vs Redux

### Props

Used for parent-to-child data.

Example:

<ResultCard item={item} />

The parent passes item to ResultCard.


### Redux

Used for shared application state.

Examples:

- query
- activeTab
- results
- loading
- error
- collection


Easy rule:

Props
→ Parent to Child data

Redux
→ Shared application state


## 🧠 Local State vs Redux State

useState
→ Local component state

Redux
→ Shared application state


In this project:

SearchBar input
→ useState

Search query
→ Redux

Active tab
→ Redux

Results
→ Redux

Loading/Error
→ Redux

Collection
→ Redux + LocalStorage


## 🧩 File Responsibilities

main.jsx
→ Redux Provider + BrowserRouter

App.jsx
→ Main structure + routes + ToastContainer

Navbar.jsx
→ Navigation

HomePage.jsx
→ Search page

SearchBar.jsx
→ Local input + search query

Tabs.jsx
→ Active media tab

ResultGrid.jsx
→ API fetching + normalization + results

ResultCard.jsx
→ Display result + save

CollectionPage.jsx
→ Display collection + clear

CollectionCard.jsx
→ Display saved item + remove

mediaApi.js
→ Unsplash + Pexels + GIPHY API requests

searchSlice.js
→ Search state

collectionSlice.js
→ Collection state + LocalStorage

store.js
→ Redux store configuration


## 📚 Important Concepts Learned

- React component architecture
- Props
- useState
- useEffect
- Conditional rendering
- Array map()
- Redux Toolkit
- createSlice()
- configureStore()
- Provider
- useSelector()
- useDispatch()
- Actions and reducers
- API integration
- Axios
- API response normalization
- Loading and error handling
- React Router
- LocalStorage persistence
- React Toastify
- Tailwind CSS
- Environment variables


## ⭐ Complete Project Flow

SEARCH

SearchBar
↓
Redux Query
↓
ResultGrid
↓
Unsplash / Pexels / GIPHY
↓
Normalize Data
↓
Redux Results
↓
ResultCard


SAVE

ResultCard
↓
addCollection()
↓
Redux Collection
↓
LocalStorage


COLLECTION

CollectionPage
↓
CollectionCard


REMOVE

CollectionCard
↓
removeCollection()
↓
Redux + LocalStorage


NAVIGATION

Link
↓
React Router
↓
Page


## 🚀 Final Summary

MediaSearch is a practical React + Redux Toolkit project that combines:

- API integration
- Shared state management
- Reusable components
- Client-side routing
- LocalStorage persistence
- Toast notifications
- Tailwind CSS

The main architecture is:

React UI
↓
Redux State
↓
API / Collection Logic
↓
Redux Updates
↓
UI Re-renders