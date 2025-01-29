# Read it somewhere

It's exactly as it sounds - I read this stuff somewhere. I probably have forgotten it by now, but I'm sure it was interesting.

So this is my collection of things I once knew. I hope you find it interesting too.

### Table of Contents

- [About this repo](#about-this-repo)
- [Spinning up the docs](#spinning-up-the-docs)
- [Folder Structure](#folder-structure)
- [What next?](#what-next)

## About this repo

It's a mono-repo using [PNPM workspaces](https://pnpm.io/workspaces). The `pnpm-workspace.yaml` file needs to have a `package.json` that contains the correct name matching. For example:

```json
{
  "name": "@read-it-somewhere/docs",
  "version": "0.0.0",
  "scripts": {
    "start": "docusaurus start"
  },
  "dependencies": {}
}
```

matches

```yaml
packages:
  - "docs"
```

which can be called in the root `package.json` by adding:

```json
{
  "scripts": {
    "start": "pnpm run --filter docs start"
  }
}
```

## Spinning up the docs

Check the `package.json` in the root of the repo for the available commands. The `start` command is the most useful for local development:

```bash
pnpm run --filter docs start
```

## Folder Structure

This repo has a main `docs` folder that contains the Docusaurus project. This is where I write the documentation.

There is a `examples` folder that contains example repos where I was playing around with things to try to get them to work. If needed, these can be linked repos using git modules.

`templates` contains project templates so that I can use my tooling from previous projects.

## What next?

Well... you should probably read the docs for that... 🤓

I will be eventually hosting them at [rits.bertramdesigns.com](https://rits.bertramdesigns.com) but for now, you can run them locally.
