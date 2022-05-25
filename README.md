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
- [x] Add the content with basic colours, padding and margin
- [x] Use HTML5 semantic tags for accessibility (see note below)
- [x] Build the responsive grid
- [x] Add the colour overlay to the image using blend modes
- [x] Think about responsive images - is this the way to do it (see note below)?
- [x] Add line heights using the leading utlity classes
- [x] Changed font size to 15px by using rem (see note below)
- [x] Sort padding of main element
- [x] Change font size of the stat text and change letter spacing
- [x] Add border radius on edges and make responsive
- [x] Add mobile padding and flex-direction styles

## JavaScript

- [x] create a js file, link it in the script tag, console.log('it works) to check
- [x] Write some javascript to animate the numbers so they count up (see notes)
- [] Install GSAP
- [] Refactor code using GSAP

## Deployment

[] Look into how to use autoprefixer with tailwind
[] Setup a Gulpfile to copy index to dist and minify Javascript
[] Deploy to netlify

## Notes on the build process

- I have used the section tag for the main outer wrapper of the card, the article tag that wraps all the content and the main tag to wrap the left hand side of the card which contains the text which could be described as the main content of the card.

- The main title I made an h2 heading because this card would likely be a component for a larger site and for SEO there should only be one h1 on each page, but you can have multiple h2 headings.

- I have put the font weight, font size and font family utitiles for the body copy on the body tag to take advantage of the cascading nature of CSS so that I won't have to put font-inter etc on each p tag.

- I spent some time on the image overlay. First I tried the technique of using an empty div as a background and then setting the opacity. However, even when adjusting the opacity and the colour, this still didn't look close enough to the design. Therefore I tried using the Tailwind utitilies for mix-blend-mode and adjusted the overlay colour slightly until I found a combination that was close enough to the design.

- As you gave me two images, one for mobile and one for desktop, I am guessing you want me to use both. Usually I would have just used one and set the height and width with object-fit: cover. However, I knew there was a way to use srcset to serve different versions of the same image depending on screen size. I read into this and tried to implement it [using this article for help.](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/) I would like to learn more about this as I am not fully confident with it yet.

- The other way to handle images would be the aspect-ratio utilties from Tailwind.

- I was using the built in font size utilites from Tailwind, but these go up in increments of 4 and in the style guide it said the body text should be 15px. By looking at the docs I could see text-sm equates to 14px (0.875rem). So I divided 15px by 16px (the default font size of the browser) to get 0.9375, which is the value you use for rem. Then I updated the text-sm utility in the config file. I also removed the rest of the font sizes from the object, just keeping the ones I am using.

- My idea for the JavaScript was to animate the numbers so they count up from zero.

- I initially researched how to do this with vanilla JS but I wasn't happy with the implementation. It worked, but the numbers didn't stop at the same time - 314 kept going after 10 and 12 had finished.

## Final Reflections
