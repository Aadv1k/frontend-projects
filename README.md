# front-end monorepo 🗿

![test workflow](https://github.com/aadv1k/frontend-projects/actions/workflows/test.js.yml/badge.svg)
![build workflow](https://github.com/aadv1k/frontend-projects/actions/workflows/deploy.yml/badge.svg)

this is the monorepo of aadvik's frontend projects. **_[Here is the url to the dashboard](https://aadv1k-frontend.netlify.app)_**

| Packages 📦                                                                                                                                   | Tooling 🛠️                                                |
|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [@frontend-projects/fem-multi-step-form](./packages/frontendmentor/fem-multi-step-form)                                                       | ![react] ![TypeScript] ![vite] ![tailwindcss] ![postcss] |
| [@frontend-projects/fem-password-generator-app](./packages/frontendmentor/fem-password-generator-app)                                         | ![react] ![vite] ![sass]                                 |
| [@frontend-projects/fem-fylo-dark-theme-landing-page](./packages/frontendmentor/fem-fylo-dark-theme-landing-page)                             | ![react] ![materialui] ![styledcomponents] ![webpack]    |
| [@frontend-projects/uidd-product-info-ui-design-card-day-1575](./packages/uidesigndaily/uidd-product-info-ui-design-card-day-1575)            | ![tailwindcss] ![parcel]                                 |
| [@frontend-projects/fem-interactive-card-details-form](./packages/frontendmentor/fem-interactive-card-details-form)                           | ![react] ![styledcomponents] ![webpack]                  |
| [@frontend-projects/fem-single-page-design-portfolio](./packages/frontendmentor/fem-single-page-design-portfolio)                             | ![react] ![cssmodules] ![sass] ![webpack]                |
| [@frontend-projects/uidd-stores-list-card-dark-mode-day-1563](./packages/uidesigndaily/uidd-stores-list-card-dark-mode-day-1563)              | ![sass] ![jest] ![parcel]                                |
| [@frontend-projects/uidd-product-review-modal-rating-day-1565](./packages/uidesigndaily/uidd-product-review-modal-rating-day-1565)            | ![jest] ![parcel]                                        |
| [@frontend-projects/fem-inbrowser-markdown-editor](./packages/frontendmentor/fem-inbrowser-markdown-editor)                                   | ![react] ![cssmodules] ![openprops] ![webpack]           |
| [@frontend-projects/fem-pricing-component-with-toggle](./packages/frontendmentor/fem-pricing-component-with-toggle/)                          | ![react] ![windicss] ![webpack]                          |
| [@frontend-projects/fem-typemaster-prelaunch-landing-page](./packages/frontendmentor/fem-typemaster-prelaunch-landing-page/)                  | ![react] ![openprops] ![webpack]                         |
| [@frontend-projects/fem-expenses-chart-component](./packages/frontendmentor/fem-expenses-chart-component/)                                    | ![tailwindcss] ![postcss] ![webpack]                     |
| [@frontend-projects/fem-github-user-search-app](./packages/frontendmentor/fem-github-user-search-app/)                                        | ![tailwindcss] ![postcss] ![Webpack]                     |
| [@frontend-projects/fem-intro-section-with-dropdown-navigation](./packages/frontendmentor/fem-intro-section-with-dropdown-navigation/)        | ![tailwindcss] ![postcss] ![webpack]                     |
| [@frontend-projects/fem-interactive-comments-section](./packages/frontendmentor/fem-interactive-comments-section/)                            | ![sass] ![webpack]                                       |
| [@frontend-projects/fem-loopstudios-page](./packages/frontendmentor/fem-loopstudios-page/)                                                    | ![sass] ![webpack]                                       |
| [@frontend-projects/fem-social-dashboard](./packages/frontendmentor/fem-social-dashboard/)                                                    | ![sass] ![webpack]                                       |
| [@frontend-projects/fem-huddle-landing-page](./packages/frontendmentor/fem-huddle-landing-page/)                                              | ![sass] ![postcss] ![webpack]                            |
| [@frontend-projects/fem-testemonials-grid](./packages/frontendmentor/fem-testemonials-grid/)                                                  | ![sass]                                                  |
| [@frontend-projects/fem-interactive-pricing-component](./packages/frontendmentor/fem-interactive-pricing-component/)                          | ![sass]                                                  |
| [@frontend-projects/fem-crowdfunding-product-page](./packages/frontendmentor/fem-crowdfunding-product-page/)                                  | ![sass] ![gulp]                                          |
| [./packages/frontendmentor/static-projects/](./packages/frontendmentor/static-projects) static project (not npm packages) can be copied as-is | ![html] ![css] ![javascript]                             |

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


[jest]: https://img.shields.io/badge/-Jest-282c34?logo=jest&logoColor=C21325&style=classic
[react]: https://img.shields.io/badge/-React-282c34?logo=React&logoColor=61dafb&style=classic
[vite]: https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat
[cssmodules]: https://img.shields.io/badge/-CSS%20Modules-282c34?logo=cssmodules&logoColor=61dafb&style=classic
[tailwindcss]: https://img.shields.io/badge/-Tailwindcss-282c34?logo=tailwind-css&logocolor=white&style=classic
[materialui]: https://img.shields.io/badge/-MaterialUi-282c34?logo=MUI&logocolor=007FFF&style=classic
[sass]: https://img.shields.io/badge/-Sass-282c34?logo=sass&logocolor=white&style=classic
[webpack]: https://img.shields.io/badge/-Webpack-282c34?logo=webpack&logocolor=8DD6F9&style=classic
[parcel]: https://img.shields.io/badge/-📦%20Parcel-282c34?logo=parcel&logocolor=white&style=classic
[styledcomponents]: https://img.shields.io/badge/-💅%20Styled%20Components-282c34?&style=classic
[gulp]: https://img.shields.io/badge/-Gulp-282c34?logo=gulp&logocolor=CF4647&style=classic
[postcss]: https://img.shields.io/badge/-PostCSS-282c34?logo=postCSS&logocolor=DD3A0A&style=classic
[openprops]: https://img.shields.io/badge/-🅿%20OpenProps-282c34?logo=&logocolor=white&style=classic
[windicss]: https://img.shields.io/badge/-WindiCSS-282c34?logo=windicss&logocolor=48B0F1&style=classic
[javascript]: https://img.shields.io/badge/-JavaScript-282c34?logo=JavaScript&logocolor=F7DF1E&style=classic
[css]: https://img.shields.io/badge/-CSS3-282c34?logo=CSS3&logocolor=1572B6&style=classic
[html]: https://img.shields.io/badge/-HTML5-282c34?logo=HTML5&logocolor=E34F26&style=classic
[TypeScript]: https://img.shields.io/badge/-TypeScript-282c34?logo=TypeScript&logoColor=3178C6&style=classic
