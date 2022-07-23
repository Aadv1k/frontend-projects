# front-end monorepo 🗿

this is the monorepo of aadvik's frontend projects. **_[Here is the url to the darhboard](https://aadv1k-frontend.netlify.app)_**

| Packages 📦                                                                                                                       | Tooling 🛠️                   |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [@frontend-projects/fem-crowdfunding-product-page](./frontendmentor.io/fem-crowdfunding-product-page/)                            | ![sass] Gulp🥤               |
| [@frontend-projects/fem-expenses-chart-component](./frontendmentor.io/fem-expenses-chart-component/)                              | ![tailwindcss] Webpack       |
| [@frontend-projects/fem-github-user-search-app](./frontendmentor.io/fem-github-user-search-app/)                                  | ![tailwindcss] Webpack       |
| [@frontend-projects/fem-huddle-landing-page](./frontendmentor.io/fem-huddle-landing-page/)                                        | ![sass] Webpack PostCss      |
| [@frontend-projects/fem-interactive-comments-section](./frontendmentor.io/fem-interactive-comments-section/)                      | ![sass] Webpack              |
| [@frontend-projects/fem-interactive-pricing-component](./frontendmentor.io/fem-interactive-pricing-component/)                    | ![sass]                      |
| [@frontend-projects/fem-intro-section-with-dropdown-navigation](./frontendmentor.io/fem-intro-section-with-dropdown-navigation/)  | ![tailwindcss] Webpack       |
| [@frontend-projects/fem-loopstudios-page](./frontendmentor.io/fem-loopstudios-page/)                                              | ![sass] Webpack              |
| [@frontend-projects/fem-social-dashboard](./frontendmentor.io/fem-social-dashboard/)                                              | ![sass] Webpack              |
| [@frontend-projects/fem-testemonials-grid](./frontendmentor.io/fem-testemonials-grid/)                                            | ![sass]                      |
| [@frontend-projects/fem-typemaster-prelaunch-landing-page](./frontendmentor.io/fem-typemaster-prelaunch-landing-page/)            | ![react] Webpack OpenProps   |
| [@frontend-projects/fem-pricing-component-with-toggle](./frontendmentor.io/fem-pricing-component-with-toggle/)                    | ![react] Webpack WindiCSS    |
| [./frontendmentor.io/static-projects/](./frontendmentor.io/static-projects) static project (not npm packages) can be copied as-is | ![html] ![css] ![javascript] |

## Install

```shell
$ git clone git@github.com:aadv1k/frontend-projects.git
$ npm install # install deps
$ npm run build --ws # run the build command in the packages
```

now you can simply load up `./index.html` in a browser.

## Scripts

- [`npm run cleanAll`](./scripts/cleanUp.sh): purges all files in `@frontend-projects/package/design/` except the design preview; also removes other unwanted files
- [`npm run build`](./scripts/deploy.sh): wip - copies all the packages to a `./www/` directory and renames them appropriately
- [`npm run femfetch`](./scripts/femfetch.sh): a utility script to fetch challenge files from [frontendmentor.io](https://frontendmentor.io)

## Structure

- `./config`: configuration scripts for dev tools - eslint, webpack, prettier
- `./scripts/`: utility shell scripts to organize, clean and fetch files in the project
- `./frontendmentor.io/`: primary package directory it contains projects from [frontendmentor.io](https://frontendmentor.io)

## Architecture

this monorepo is managed using a (minimal) npm workspace config since
currently, i don't feel the need to use something like lerna, but it is a
possibility for the future depending on the complexity of this repo. the
primary package folder is `./frontendmentor.io/`.

_note: currently there are no inner-deps_

[react]: https://img.shields.io/badge/react-20232a?style=flat&logo=react&logocolor=61dafb
[tailwindcss]: https://img.shields.io/badge/tailwind_css-38b2ac?style=flat&logo=tailwind-css&logocolor=white
[sass]: https://img.shields.io/badge/sass-cc6699?style=flat&logo=sass&logocolor=white
[html]: https://img.shields.io/badge/html-239120?style=flat&logo=html5&logocolor=white
[css]: https://img.shields.io/badge/css-239120?&style=flat&logo=css3&logocolor=white
[javascript]: https://img.shields.io/badge/javascript-323330?style=flat&logo=javascript&logocolor=f7df1e
