# Allencell nav bar

Nav bar for subdomain applications that matches our navbar on allencell.org

---

## Description

Main features in a brief descriptive text.

## Installation

Gradle tasks:

| script | comments |
| ------ | -------- |
| build  | create CommonJS, ES module, and UMD builds |
| bundle | run Webpack to create a UMD bundle |
| clean | remove generated artifacts |
| format | run prettier on `src` directory |
| generateTypes | generate type declarations |
| lint | run eslint on `src` directory |
| transpileCommonJs | run babel on `src` directory; transpile `import/export` statements for a CommonJS compatible build |
| transpileES |  run babel on `src` directory; *do not* transpile `import/export` statements for an ES module compatible build (used by bundlers for tree-shaking) |
| test | run `mocha`; searches for any files matching the pattern "src/**/*.test.js" |
| typeCheck | run `tsc` in type-check only mode |
| start  | runs an example app from `examples` for testing. Runs at `localhost:8080/public/` |

## Documentation

If you have more extensive technical documentation (whether generated or not), ensure they are published to the following address:
For full package documentation please visit
[organization.github.io/projectname](https://organization.github.io/projectname/index.html).

## Quick Start

Describe the most common operations, step by step, that a first time user would want to know, here.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for information related to developing the code.
