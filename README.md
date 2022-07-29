# front-end monorepo 🗿

this is the monorepo of aadvik's frontend projects. **_[Here is the url to the darhboard](https://aadv1k-frontend.netlify.app)_**

| Packages 📦                                                                                                                       | Tooling 🛠️                           |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [@frontend-projects/fem-inbrowser-markdown-editor](./frontendmentor.io/fem-inbrowser-markdown-editor)                             | ![react] ![webpack] ![openprops]     |
| [@frontend-projects/fem-pricing-component-with-toggle](./frontendmentor.io/fem-pricing-component-with-toggle/)                    | ![react] ![webpack] ![windicss]      |
| [@frontend-projects/fem-typemaster-prelaunch-landing-page](./frontendmentor.io/fem-typemaster-prelaunch-landing-page/)            | ![react] ![webpack] ![openprops]     |
| [@frontend-projects/fem-expenses-chart-component](./frontendmentor.io/fem-expenses-chart-component/)                              | ![tailwindcss] ![webpack] ![postcss] |
| [@frontend-projects/fem-github-user-search-app](./frontendmentor.io/fem-github-user-search-app/)                                  | ![tailwindcss] ![Webpack] ![postcss] |
| [@frontend-projects/fem-intro-section-with-dropdown-navigation](./frontendmentor.io/fem-intro-section-with-dropdown-navigation/)  | ![tailwindcss] ![webpack] ![postcss] |
| [@frontend-projects/fem-interactive-comments-section](./frontendmentor.io/fem-interactive-comments-section/)                      | ![sass] ![webpack]                   |
| [@frontend-projects/fem-loopstudios-page](./frontendmentor.io/fem-loopstudios-page/)                                              | ![sass] ![webpack]                   |
| [@frontend-projects/fem-social-dashboard](./frontendmentor.io/fem-social-dashboard/)                                              | ![sass] ![webpack]                   |
| [@frontend-projects/fem-huddle-landing-page](./frontendmentor.io/fem-huddle-landing-page/)                                        | ![sass] ![webpack] ![postcss]        |
| [@frontend-projects/fem-testemonials-grid](./frontendmentor.io/fem-testemonials-grid/)                                            | ![sass]                              |
| [@frontend-projects/fem-interactive-pricing-component](./frontendmentor.io/fem-interactive-pricing-component/)                    | ![sass]                              |
| [@frontend-projects/fem-crowdfunding-product-page](./frontendmentor.io/fem-crowdfunding-product-page/)                            | ![sass] ![gulp]                      |
| [./frontendmentor.io/static-projects/](./frontendmentor.io/static-projects) static project (not npm packages) can be copied as-is | ![html] ![css] ![javascript]         |

## Install

```shell
$ git clone git@github.com:aadv1k/frontend-projects.git
$ npm install # install deps
$ npm run build # run the build command
```

now you can simply load up the `./site/` in a browser.

## Scripts

- [`npm run clean`](./scripts/cleanUp.sh): purges all files in `@frontend-projects/package/design/` except the design preview; also removes other unwanted files
- [`npm run build`](./scripts/deploy.sh): copies all the packages to the `./site/` directory and renames them appropriately
- [`npm run femfetch`](./scripts/femfetch.sh): a utility script to fetch challenge files from [frontendmentor.io](https://frontendmentor.io)
- `npm run lint`: run `eslint .`
- `npm run lint:fix`: run `eslint . --fix`
- `npm run format`: format using prettier

## Structure

- `./config`: configuration scripts for dev tools - eslint, webpack, prettier
- `./scripts/`: utility shell scripts to organize, clean and fetch files in the project
- `./site/`: The static styles for the main dashboard
- `./frontendmentor.io/`: primary package directory it contains projects from [frontendmentor.io](https://frontendmentor.io)
- `./.husky`: pre-commit hook to format; pre-push hook to lint

## Architecture

This monorepo is managed using [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces), I chose to use
a monorepo for primarily one reason - Organization. I liked the semantics of
having everything in one place, the standard `config` utilities and a single
domain are really good to have and manage.
Alongside this, under this single monorepo, I can test, my code, and setup a CI pipelines.

The site is deployed on netlify via the `npm run build` command This command makes it so that the `./site` folder can be dropped onto any server as a static site.

_note: currently there are no inner-deps_

[react]: https://img.shields.io/badge/-React-282c34?logo=React&logoColor=61dafb&style=classic
[tailwindcss]: https://img.shields.io/badge/-Tailwindcss-282c34?logo=tailwind-css&logocolor=white&style=classic
[sass]: https://img.shields.io/badge/-Sass-282c34?logo=sass&logocolor=white&style=classic
[webpack]: https://img.shields.io/badge/-Webpack-282c34?logo=webpack&logocolor=white&style=classic
[gulp]: https://img.shields.io/badge/-Gulp-282c34?logo=gulp&logocolor=white&style=classic
[postcss]: https://img.shields.io/badge/-PostCSS-282c34?logo=postCSS&logocolor=white&style=classic
[openprops]: https://img.shields.io/badge/-OpenProps-282c34?logo=&logocolor=white&style=classic
[windicss]: https://img.shields.io/badge/-WindiCSS-282c34?logo=windicss&logocolor=white&style=classic
[javascript]: https://img.shields.io/badge/-JavaScript-282c34?logo=javascript&logocolor=white&style=classic
[css]: https://img.shields.io/badge/-CSS-282c34?logo=CSS&logocolor=white&style=classic
[html]: https://img.shields.io/badge/-HTML-282c34?logo=html&logocolor=white&style=classic
