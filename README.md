# Front-End Monorepo 🗿

This is the monorepo of aadvik's frontend projects.

| Packages 📦                                                                                                                        | Tooling 🛠️                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [@frontend-projects/fem-crowdfunding-product-page](./frontendmentor.io/fem-crowdfunding-product-page/)                             | SCSS, JavaScript, Gulp, Junior           |
| [@frontend-projects/fem-expenses-chart-component](./frontendmentor.io/fem-expenses-chart-component/)                               | JavaScript, Webpack, TailwindCSS, Junior |
| [@frontend-projects/fem-github-user-search-app](./frontendmentor.io/fem-github-user-search-app/)                                   | JavaScript, Webpack, TailwindCSS, Junior |
| [@frontend-projects/fem-huddle-landing-page](./frontendmentor.io/fem-huddle-landing-page/)                                         | SCSS, Webpack, PostCSS, Junior           |
| [@frontend-projects/fem-interactive-comments-section](./frontendmentor.io/fem-interactive-comments-section/)                       | SCSS, JavaScript, Webpack, Intermediate  |
| [@frontend-projects/fem-interactive-pricing-component](./frontendmentor.io/fem-interactive-pricing-component/)                     | Html, SCSS, Junior                       |
| [@frontend-projects/fem-intro-section-with-dropdown-navigation](./frontendmentor.io/fem-intro-section-with-dropdown-navigation/)   | JavaScript, Webpack, TailwindCSS, Junior |
| [@frontend-projects/fem-loopstudios-page](./frontendmentor.io/fem-loopstudios-page/)                                               | SCSS, JavaScript, Webpack, Junior        |
| [@frontend-projects/fem-social-dashboard](./frontendmentor.io/fem-social-dashboard/)                                               | SCSS, JavaScript, Webpack, Junior        |
| [@frontend-projects/fem-testemonials-grid](./frontendmentor.io/fem-testemonials-grid/)                                             | Html, SCSS, Junior                       |
| [@frontend-projects/fem-typemaster-prelaunch-landing-page](./frontendmentor.io/fem-typemaster-prelaunch-landing-page/)             | React, Webpack, OpenProps, Junior        |
| [./frontendmentor.io/static-projects/](./frontendmentor.io/static-projects) Static project (not npm packages), can be copied AS-IS | Html, Css, JavaScript                    |

## Install

```shell
$ git clone git@github.com:Aadv1k/frontend-projects.git
$ npm install # Install deps
$ npm run build --ws # Run the build command in the packages
```

Now you can simply load up `./index.html` in a browser.

## Scripts

- `npm run cleanAll`: Purges all files in `@frontend-projects/PACKAGE/design/` except the design preview; Also removes other unwanted files
- `npm run build`: WIP - Copies all the packages to a `./www/` directory and renames them appropriately
- `npm run femFetch`: A utility script to fetch challenge files from [frontendmentor.io](https://frontendmentor.io)

## Structure

- `./config`: Configuration scripts for dev tools - ESLint, Webpack, Prettier
- `./scripts/`: Utility shell scripts to organize, clean and fetch files in the project
- `./frontendmentor.io/`: Primary package directory it contains projects from [frontendmentor.io](https://frontendmentor.io)

## Architecture

This Monorepo is managed using a (minimal) npm workspace config since
currently, I don't feel the need to use something like lerna, but it is a
possibility for the future depending on the complexity of this repo. The
primary package folder is `./frontendmentor.io/`.

_Note: currently there are no inner-deps_
