<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->

<!--
This README is a slimmed down version of the original one.
Removed sections:
- Screenshots
- Running Test
- Deployment
- FAQ
-->

<div align="center">

  <!-- <img src="https://raw.githubusercontent.com/skamansam/webfont-importer/sveltekit/screenshot.png" alt="screenshot" width="200" height="auto" /> -->
  <h1>WebFont Importer</h1>
  
  <p>
    A (svelte) component for using fonts from google fonts or bunny fonts (GDPR-compatible).
  </p>

  
<!-- Badges -->
<p>
  <a href="https://github.com/skamansam/webfont-importer/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/skamansam/webfont-importer" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/skamansam/webfont-importer" alt="last update" />
  </a>
  <a href="https://github.com/skamansam/webfont-importer/network/members">
    <img src="https://img.shields.io/github/forks/skamansam/webfont-importer" alt="forks" />
  </a>
  <a href="https://github.com/skamansam/webfont-importer/stargazers">
    <img src="https://img.shields.io/github/stars/skamansam/webfont-importer" alt="stars" />
  </a>
  <a href="https://github.com/skamansam/webfont-importer/issues/">
    <img src="https://img.shields.io/github/issues/skamansam/webfont-importer" alt="open issues" />
  </a>
  <a href="https://github.com/skamansam/webfont-importer/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/skamansam/webfont-importer.svg" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://github.com/skamansam/webfont-importer/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/skamansam/webfont-importer">Documentation</a>
  <span> · </span>
    <a href="https://github.com/skamansam/webfont-importer/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/skamansam/webfont-importer/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
  * [Color Reference](#art-color-reference)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)
- [Usage](#eyes-usage)
- [Roadmap](#compass-roadmap)
- [Contributing](#wave-contributing)
  * [Code of Conduct](#scroll-code-of-conduct)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)
  

<!-- About the Project -->
## :star2: About the Project

<div align="center"> 
  <img src="https://raw.githubusercontent.com/skamansam/webfont-importer/sveltekit/screenshot.png" alt="screenshot" />
</div>


<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Library</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://sveltejs.org/">Svelte</a></li>
  </ul>
</details>

<details>
  <summary>Demo App</summary>
  <ul>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  </ul>
</details>

<!-- Features -->
### :dart: Features

- Import any font from Google Fonts
- Use bunny fonts API for GDPR compliance
- Import any variant


<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites
### :bangbang: Prerequisites

This project uses `pnpm` as package manager

```bash
 npm install --global pnpm
```
 -->

<!-- Installation -->
### :gear: Installation

Install webfont-importer with pnpm

```bash
  pnpm add webfont-importer
```
Install webfont-importer with npm

```bash
  npm install webfont-importer
```
Install webfont-importer with yarn

```bash
  pnpm add webfont-importer
```


<!-- Run Locally 
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/skamansam/webfont-importer.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```
-->

<!-- Usage -->
## :eyes: Usage

Webfont-importer is designed to be super easy to use and a convenient method to switch from google fonts to the more GDPR-friendly bunny fonts.

It is recommended to use this in the `svelte:head` special element. This library has types, so feel free to use those if you wish.

> NOTE: There is no validation on the fonts yet, neither typescript nor runtime. I may add that in the future depending on how many users there are.

```javascript
<script lang="ts">
  import type { Font, WebfontImporterSource } from 'webfont-importer';
  import WebfontImporter from 'webfont-importer';

  let fontSource: WebfontImporterSource = 'bunny';

  let fonts: Font[] = [
    {
      family: 'Roboto'
    },
    {
      family: 'Playball',
      variants:[{
        variant: '400', 
      },
      {
        variant: '400',
        italics: true 
      }]
    }
  ];
</script>

<svelte:head>
	<WebfontImporter source={fontSource} fonts/>
</svelte:head>

<p>Rest of component goes here.</p>
```

<!-- Roadmap -->
## :compass: Roadmap

* [X] Add working version for use in [sveltemeacoffee](https://github.com/skamansam/sveltemeacoffee)
* [ ] Add typescript validation for fonts.
* [ ] Add runtime validation for fonts. (maybe print errors/warnings to console)


<!-- Contributing -->
## :wave: Contributing

<a href="https://github.com/skamansam/webfont-importer/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=skamansam/webfont-importer" />
</a>


Contributions are always welcome!

See `contributing.md` for ways to get started.


<!-- Code of Conduct -->
### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/skamansam/webfont-importer/blob/master/CODE_OF_CONDUCT.md)


<!-- License -->
## :warning: License

Distributed under the MIT License. See LICENSE.txt for more information.


<!-- Contact -->
## :handshake: Contact

Samuel C Tyler - [@skamansam](https://twitter.com/skamansam) - skamansam@gmail.com

Project Link: [https://github.com/skamansam/webfont-importer](https://github.com/skamansam/webfont-importer)

<!-- Acknowledgments -->
## :gem: Acknowledgements

Use this section to mention useful resources and libraries that you have used in your projects.

 - [Shields.io](https://shields.io/)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#travel--places)
 - [Readme Template](https://github.com/othneildrew/Best-README-Template)
