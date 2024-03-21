# ASAC-website

this is a simple page for asac department. it has highlight information about asac and its programs (what is making ASAC a bettre choice over any collage?).

it is a simple and basic website using vanilla javascript, HTML and CSS.

the content that inside the pages is a dump content till Wednesday 27th of March 2024.

## project Tree

```bash
.
|-- ASAC
|   |-- FAQ.html
|   |-- about.html
|   |-- applicationCriteria.html
|   |-- contactUs.html
|   `-- programs.html
|-- all_plans
|   |-- BA
|   |   |-- AI.pdf
|   |   `-- cloud.pdf
|   `-- diploma
|       |-- AI.pdf
|       |-- cyber.pdf
|       `-- software.pdf
|-- assets
|   |-- icon
|   |   |-- AI.svg
|   |   |-- arrow-up-solid.svg
|   |   |-- building.svg
|   |   |-- cloud.svg
|   |   |-- cyber.svg
|   |   |-- email.svg
|   |   |-- facebook-f.svg
|   |   |-- facebook.svg
|   |   |-- flag.svg
|   |   |-- house-solid.svg
|   |   |-- instagram.svg
|   |   |-- java.svg
|   |   |-- light.svg
|   |   |-- linkedin-in.svg
|   |   |-- location-dot-solid.svg
|   |   |-- pdf-icon.html
|   |   |-- phone.svg
|   |   |-- python.svg
|   |   |-- softwareE.svg
|   |   `-- x-twitter.svg
|   |-- images
|   |   |-- LTUCLogo.png
|   |   |-- asac-logo.png
|   |   `-- asac_ltuc_logo.jpg
|   `-- note.md
|-- data
|   |-- news.json
|   `-- programs.json
|-- index.html
`-- public
    |-- css
    |   |-- reset_default.css
    |   `-- style.css
    `-- js
        `-- app.js

```

- all_plans: has the plans for bacholer and diploma degrees.(all plans are old version)
- ASAC: has the HTML files for asac.
- assets: include the images and icons that used in the project.
- data: includes the json files for news and programs.(as API).
- public: include the js and css files.
- index.html: have the home and main page.

## how to set up?

there are 2 versions of this project. the final and approved version is on `main` branch. you just need to clone this repo. (that's it😅)

the second version have a login/lougout approach using [Auth0](https://auth0.com/) authentication system. so you should after cloning the repo:

1. open the terminal
2. go to the directory (where package.json) live.
3. type `npm i` to install the packages.
4. type `node server.js` and then open the live server and start playing around 😎.

## tools, technologies, languages that used?

1. tools: VSCode, Github, Email.js, Animate.css, Bootstrap, Owl carousel, Auth0, trello, github pages, netlify, fontawsome, jquery.
2. languages: HTML, CSS, Javascript.

[>>>](./assets/note.md)

## important notes

- `final-fixes` branch hold the v2 with different styling. this branch merged with the `main` branch.
- `old-version` branch hold another styling with another functionality.
- this project have english version only.
- all the content is a dump data, because no data provided.
- this project is an open project so you can add your touch if you want.
- there is no backend or databases connection, it is only a basic and static content.
- this project deployed on [github pages](https://ltuc.github.io/ASAC-website/) and [netlify](https://asac-abrar.netlify.app/), githun pages contains the `main` branch version-1, and netlify contains `login` branch version-2.
