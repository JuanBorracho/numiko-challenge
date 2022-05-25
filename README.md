# Numiko Challenge

## Think before you code!

For this challenge I have decided to use Tailwind css. I am aware of Tailwind and have watched some tutorials on it before, but I have never actually used it in a project. This will be the first time.

In my current role I am using Bootstrap 5 and Sass, but I am keen to try Tailwind as I like the utilty first approach and the fact you can build entire projects with little or none custom css.

I will be reading the documentation for how to implement it.

I will just use HTML for this project, rather than a framework such as React.

I will outline the steps I have gone through in the build section below. I will also write some notes in a notes section to explain my code.

## Setup

- [x] Make new directory
- [x] npm init
- [x] npm i -D tailwindcss
- [x] npx tailwindcss init
- [x] add tailwind directives to css file
- [x] Git init
- [x] .gitignore node_modules
- [x] change branch name to main - git branch -m master main
- [x] Initial commit
- [x] Link to github
- [x] Create dev script and build script for tailwind in package.json
- [x] Create index.html file with emmet
- [x] Link to the compiled tailwind file in the head tag
- [x] Install tailwind intellisense vs code extension
- [x] Test that it works with Hello World and commit

## HTML & CSS Build

- [x] Handle the colours - add our colours to the config file in the theme object
- [x] Handle the fonts - from google, link to the head, add to the config file
- [x] Add the background colour to the body
- [x] Added the content with basic colours, padding and margin
- [x] Used HTML5 semantic tags for accessibility (see note below)
- [x] Built the responsive grid
- [] Think about responsive design by using the built in Tailwind breakpoints
- [] Build the UI
- [] Think about responsive images

## JavaScript

[] Write some javascript to animate the numbers so they count up

## Notes

- I have used the section tag for the main outer wrapper of the card, the article tag that wraps all the content and the main tag to wrap the left hand side of the card which contains the text which could be described as the main content of the card.

- The main title I made an h2 heading because this card would likely be a component for a larger site and for SEO there should only be one h1 on each page, but you can have multiple h2 headings.

- I have put the font weight, font size and font family utitiles for the body copy on the body tag to take advantage of the cascading nature of CSS so that I won't have to put font-inter etc on each p tag.
