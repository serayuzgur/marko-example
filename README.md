# Marko Example.
An example project with markojs and apoll-fetch.
This repo extends [`marko-starter`](https://github.com/marko-js/marko-starter). 
Aims to demonstrate a real-life demo.

* [marko](https://github.com/marko-js/marko) for ui and configuration (marko-cli).
* [apollo-fetch](https://github.com/apollographql/apollo-fetch) for easier graphql fetching.


![marko](./marko.gif)

* All `*.marko.js` files are auto generated.
* You can see a detailed overview of the `src` folder below. Makes easier to see what is necessary.

```bash
src/
├── components             # where you put your components
│   ├── page-search.marko  # holds search-box and product-list. coordinates them.
│   ├── product-list.marko # lists products using graph.js
│   ├── search-box.marko   #  :)
│   └── site-layout        # layout from marko-starter with minor changes. 
│       ├── index.marko
│       ├── logo.svg
│       └── style.css
├── data
│   ├── graph.js          # apollo connection codes.
│   └── queries           # where you put  your graph queries
│       └── index.js
└── index.marko           # default route. mounts page-search.
```


## Install

```bash
npm install
```

## Starting the server

```bash
npm start
```

Start the server in production mode (minification enabled, etc.):

```bash
NODE_ENV=production npm start
```

## Build a static site
Build the project in production mode:

```bash
npm run build
```

By default, the generated static site will be placed in `dist/`.

