# ME-API-Documentation
[![Netlify Status](https://api.netlify.com/api/v1/badges/2b6b7bea-0034-4963-bda1-2e2cce8c25e0/deploy-status)](https://app.netlify.com/sites/gorgeous-starlight-3c4b5c/deploys)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### How to Edit

Here is a [list of guides](https://docusaurus.io/docs/category/guides) on how to make changes in Docusaurus.

Essentially, the documentation lives in `docs/`.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
