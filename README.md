# Remix Turborepo

## Getting Started

1. [Install pnpm.](https://pnpm.io/installation)
2. `pnpm i`
3. `pnpm run dev`

### Setting up your code Editor

#### Linting/formatting

**VS Code**

The workspace settings for VS Code are set in `./.vscode/settings.json` and a
few recommended extensions are in `./.vscode/extensions.json`. Applying the
recommended settings should enable prettier to format files on save.

## Scripts

There are several ways you can run scripts in the monorepo.

#### Workspace scripts

Workspace scripts are run from the root directory of the repo. These scripts are
often running similar scripts across all relevant packages or scripts that
affect the monorepo as a whole.

**Examples**

- `pnpm run dev` run development server for all apps and packges in parallel.

#### App/Package Scripts

If you want to run a script for a single app/package you can filter with `pnpm`

**Examples**

- `pnpm --filter {package-name} {script-name}`

## Add dependencies

### Adding a dependency on a local package

In order to use code from other packages in this monorepo, they must be
installed as a dependency. To do that, you can run the following command:
`pnpm add {package-to-install-name} --filter {package-installing-into-name} --workspace`

# About

## Monorepo

This repo is a monorepo powered by pnpm workspaces and turborepo.

### Helpful Resources

- https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e#d69f

# TODO

- [ ] eforce single version policy
- [ ] setup eslint config and prettier
