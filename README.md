# Writing Sites

Writing Sites is a national survey of collegiate writing programs undertaken by researchers at UC Davis. It aims to increase program success and sustainability by analyzing gathered data on existing programs, initiatives, and outcomes.

## Getting Started

Setup an env.local file, in order to see any data results from the providing survery api. Required fields include:

```
DATACENTER_ID = placeholder
QUALTRICS_CLIENT = placeholder
QUALTRICS_SECRET = placeholder
WAC_SURVEY = placeholder
WID_SURVEY = placeholder
```

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
