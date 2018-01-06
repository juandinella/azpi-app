![PennyFramework](penny.png)

#### Tiny but powerful

Many thanks to [**@mpalau**](http:///twitter.com/mpalau) & [**@necsoft**](http:///twitter.com/necsoft)


Frontend Boilerplate

## Prerequisites
- NodeJS (^4.5 Recommended) - [How to install](https://nodejs.org/es/download/package-manager/)
- Yarn (^0.17 Recommended) [How to install](https://yarnpkg.com/en/docs/install)

## Install all dependencies

```
yarn start
```

## Usage

```
gulp
```
- This will run everything on development mode (source maps, expanded, etc)

```
gulp build
```
- When the project is done

## Features

- **Autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.

- **Csscomb**: CSScomb is a coding style formatter for CSS.

- **Cssnano**: A modular minifier, built on top of the PostCSS ecosystem.

- **Group-css-media-queries** :CSS postprocessing: group media queries. Useful for postprocessing preprocessed CSS files.

- **Imagemin**: Minify images seamlessly

- **Modular**: Each gulp task is on its own file so can assemble or play with them at your will.

- **Pug**: robust, elegant, feature rich template engine for Node.js

- **Sass**: Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a web-framework plugin

- **Penny Mixins**: A set of awesome Sass Mixins `https://github.com/juandinella/penny-mixins`

- **BrowserSync**: Keep multiple browsers & devices in sync when building websites.

- **SVG Power**: Drop all yours svg icons into `src/svg` and this will generate a sprite with all the icons. The way to use it is:

```Pug
svg.icon.icon-name
  use(xlink:href='#icon-name')
```

```Sass
.icon-name{
  width: width in px;
  height: height in px;
  color: fill color;
}
```
