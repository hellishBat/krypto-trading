# Krypto Trading

![Imgur](https://i.imgur.com/2IBNPPj.png)

## Features

- Displaying the actual cryptocurrency rate to USD for 6 currencies.
- Parallax animations.

## Technologies Used

- React + TypeScript;
- Styled with [Tailwind CSS](https://www.npmjs.com/package/tailwindcss);
- APIs:
  - [CoinGecko](https://www.coingecko.com/)

## Credits (In order of appearance)

- Libraries: [HeadlessUI](https://www.npmjs.com/package/@headlessui/react),[React Scroll](https://www.npmjs.com/package/react-scroll), [React Scroll Parallax](https://www.npmjs.com/package/react-scroll-parallax), [React Player](https://www.npmjs.com/package/react-player),[Swiper](https://www.npmjs.com/package/swiper)
- Photostock by [Pexels](https://www.pexels.com/) and [Unsplash](https://www.unsplash.com/) videostock by [Pexels](https://www.pexels.com/)
- Ukrainian Heart icon by [Linector](https://www.iconfinder.com/LINECTOR)

## Live Demo

[Live Demo](https://krypto-trading.vercel.app/)

## Local Usage (On your machine)

### Pre-requisites (for local usage)

- Clone this repo;
- You need to get API keys from [Openweather](https://openweathermap.org/) and [Unsplash](https://unsplash.com/developers/);
- Create .env file in the root folder with corresponding variables:
  - `VITE_API_KEY_GEODB`=your-api-key
  - `VITE_API_KEY_OPENWEATHER`=your-api-key
  - `VITE_API_KEY_UNSPLASH`=your-api-key

## This website made with [Vite⚡ React TS Boilerplate (Tailwind CSS Edition)](https://github.com/valentine-samoylov/vite-react-ts-tw-bp)

## Features

- ⚛️ Supports React + TypeScript
- 🔥 React Refresh (HMR) (**Dev mode**)
- 🖌️ Supports styling with
  - Tailwind CSS
  - SASS/SCSS preprocessor
  - PostCSS preprocessor
- 🗜️ Minification of CSS/JS files (**Prod mode**)
- 🖼 Optimization of images with ImageTools (**Prod mode**)
  - 🔁 Images can be converted to WEBP or AVIF formats (**Prod mode**)
- ⭐ SVGR converts SVG into React components and inserts them as inline SVG into HTML.
- 🧰 ESlint, Stylelint and Prettier
- ⚙️ Support of environment variables (aka dotenv, built in Vite, `VITE_` prefix is required.)

## Scripts

To install dependencies:

```sh
yarn install
```

Start development mode:

```sh
yarn run start
```

Create production build:

```sh
yarn run build
```

Lint scripts:

```sh
yarn run lint:scripts
```

Lint styles:

```sh
yarn run lint:styles
```

Format code with Prettier:

```sh
yarn run lint:format
```
