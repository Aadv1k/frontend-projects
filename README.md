# front-end monorepo 🗿

![test workflow](https://github.com/aadv1k/frontend-projects/actions/workflows/test.js.yml/badge.svg)
![build workflow](https://github.com/aadv1k/frontend-projects/actions/workflows/deploy.yml/badge.svg)

this is the monorepo of aadvik's frontend projects. **_[Here is the url to the darhboard](https://aadv1k-frontend.netlify.app)_**

| Packages 📦                                                                                                                                   | Tooling 🛠️                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [@frontend-projects/fem-single-page-design-portfolio](./packages/frontendmentor/fem-single-page-design-portfolio)                             | ![react] ![webpack] ![sass] ![cssmodules]      |
| [@frontend-projects/uidd-stores-list-card-dark-mode-day-1563](./packages/uidesigndaily/uidd-stores-list-card-dark-mode-day-1563)              | ![sass] ![parcel]                              |
| [@frontend-projects/uidd-product-review-modal-rating-day-1565](./packages/uidesigndaily/uidd-product-review-modal-rating-day-1565)            | ![parcel]                                      |
| [@frontend-projects/fem-inbrowser-markdown-editor](./packages/frontendmentor/fem-inbrowser-markdown-editor)                                   | ![react] ![cssmodules] ![webpack] ![openprops] |
| [@frontend-projects/fem-pricing-component-with-toggle](./packages/frontendmentor/fem-pricing-component-with-toggle/)                          | ![react] ![webpack] ![windicss]                |
| [@frontend-projects/fem-typemaster-prelaunch-landing-page](./packages/frontendmentor/fem-typemaster-prelaunch-landing-page/)                  | ![react] ![webpack] ![openprops]               |
| [@frontend-projects/fem-expenses-chart-component](./packages/frontendmentor/fem-expenses-chart-component/)                                    | ![tailwindcss] ![webpack] ![postcss]           |
| [@frontend-projects/fem-github-user-search-app](./packages/frontendmentor/fem-github-user-search-app/)                                        | ![tailwindcss] ![Webpack] ![postcss]           |
| [@frontend-projects/fem-intro-section-with-dropdown-navigation](./packages/frontendmentor/fem-intro-section-with-dropdown-navigation/)        | ![tailwindcss] ![webpack] ![postcss]           |
| [@frontend-projects/fem-interactive-comments-section](./packages/frontendmentor/fem-interactive-comments-section/)                            | ![sass] ![webpack]                             |
| [@frontend-projects/fem-loopstudios-page](./packages/frontendmentor/fem-loopstudios-page/)                                                    | ![sass] ![webpack]                             |
| [@frontend-projects/fem-social-dashboard](./packages/frontendmentor/fem-social-dashboard/)                                                    | ![sass] ![webpack]                             |
| [@frontend-projects/fem-huddle-landing-page](./packages/frontendmentor/fem-huddle-landing-page/)                                              | ![sass] ![webpack] ![postcss]                  |
| [@frontend-projects/fem-testemonials-grid](./packages/frontendmentor/fem-testemonials-grid/)                                                  | ![sass]                                        |
| [@frontend-projects/fem-interactive-pricing-component](./packages/frontendmentor/fem-interactive-pricing-component/)                          | ![sass]                                        |
| [@frontend-projects/fem-crowdfunding-product-page](./packages/frontendmentor/fem-crowdfunding-product-page/)                                  | ![sass] ![gulp]                                |
| [./packages/frontendmentor/static-projects/](./packages/frontendmentor/static-projects) static project (not npm packages) can be copied as-is | ![html] ![css] ![javascript]                   |

## Install

```shell
$ git clone git@github.com:aadv1k/frontend-projects.git
$ npm install # install deps
$ npm run build # run the build command
```

now you can simply load up the `./site/` in a browser.

## Scripts

- [`npm run build`](./scripts/deploy.sh): copies all the packages to the `./site/` directory and renames them appropriately
- [`npm run femfetch`](./scripts/femfetch.sh): a utility script to fetch challenge files from [frontendmentor.io](https://frontendmentor.io)
- `npm run lint`: run `eslint .`
- `npm run lint:fix`: run `eslint . --fix`
- `npm run test:ws`: run tests in packages where they are present
- `npm run format`: format using prettier

## Structure

- `./packages`: Directory with all the primary packages of the project
  - `./packages/frontendmentor/`: Front-end challenges from [frontendmentor.io](https://frontendmentor.io)
  - `./packages/uidesigndaily/`: Random design to code challenges from [uidesigndaily](https://uidesigndaily.com/)
- `./config`: configuration scripts for dev tools - eslint, webpack, prettier
- `./scripts/`: utility shell scripts to organize, clean and fetch files in the project
- `./site/`: The static site for the main dashboard

## Architecture

This monorepo is managed using [npm
workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces), I chose to use
a monorepo for primarily one reason - Organization. I liked the semantics of
having everything in one place, the standard `config` utilities and a single
domain are really good to have and manage. Alongside this, under this single
monorepo, I can test, my code, and setup a CI pipelines. The site is deployed
on netlify via the `npm run build` command This command makes it so that the
`./site` folder can be dropped onto any server as a static site.

_note: currently there are no inner-deps_

[react]: https://img.shields.io/badge/-React-282c34?logo=React&logoColor=61dafb&style=classic
[cssmodules]: https://img.shields.io/badge/-CSS%20Modules-282c34?logo=cssmodules&logoColor=61dafb&style=classic
[tailwindcss]: https://img.shields.io/badge/-Tailwindcss-282c34?logo=tailwind-css&logocolor=white&style=classic
[sass]: https://img.shields.io/badge/-Sass-282c34?logo=sass&logocolor=white&style=classic
[webpack]: https://img.shields.io/badge/-Webpack-282c34?logo=webpack&logocolor=white&style=classic
[parcel]: https://img.shields.io/badge/-📦%20Parcel-282c34?logo=parcel&logocolor=white&style=classic
[gulp]: https://img.shields.io/badge/-Gulp-282c34?logo=gulp&logocolor=white&style=classic
[postcss]: https://img.shields.io/badge/-PostCSS-282c34?logo=postCSS&logocolor=white&style=classic
[openprops]: https://img.shields.io/badge/-🅿%20OpenProps-282c34?logo=&logocolor=white&style=classic
[windicss]: https://img.shields.io/badge/-WindiCSS-282c34?logo=windicss&logocolor=white&style=classic
[javascript]: https://img.shields.io/badge/-JavaScript-282c34?logo=javascript&logocolor=white&style=classic
[css]: https://img.shields.io/badge/-CSS-282c34?logo=CSS&logocolor=white&style=classic
[html]: https://img.shields.io/badge/-HTML-282c34?logo=html&logocolor=white&style=classic
