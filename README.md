# To-Do List with REST API

A **React** to-do list that loads and saves tasks to a remote REST API, so the list persists between visits.

**Tech:** React (hooks) · Fetch API · Bootstrap · Webpack

## How it works

- `useEffect` loads the list with a `GET` request when the page opens
- Adding or deleting a task updates React state with `useState` and syncs the full list back with a `PUT` request
- Components: `Input` (add a task), `List` (show and delete tasks), `Counter` (tasks left) — see [`src/js/component`](src/js/component)

## Run it

```bash
npm install
npm run start     # http://localhost:3000
```

Built as part of the 4Geeks Academy Full Stack Software Development program (2023), starting from the academy's React boilerplate (original notes in [`docs/BOILERPLATE_README.md`](docs/BOILERPLATE_README.md)).
