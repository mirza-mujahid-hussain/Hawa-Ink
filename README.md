# Hawa & Ink (hack-and-ink)

Plain HTML, CSS and JavaScript. No framework and no build step.

## Run it
Open `index.html` in a browser, or use the VS Code "Live Server" extension.

## Structure
- `index.html`: home page
- `assets/styling/style.css`: global styles shared by all pages
- `assets/js/main.js`: shared data (poems, poets, quotes), header, footer and poem reader
- `assets/images/`: put your own images here
- `pages/<name>/<name>.html|css|js`: one folder per page (poetry, quotes, categories, poets, journal, about, signup, signin)

## Notes
- Sign up and sign in are a demo: accounts are stored in the browser (localStorage), not on a server.
- All poems, poets and quotes are original sample content. Replace them in `assets/js/main.js`.
