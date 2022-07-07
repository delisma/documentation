---
eleventyNavigation:
  key: Home
layout: home.njk
title: Home
key: home
homeNav:
  - label: Home
    id: home
    link: /en
    title: Visit Hydrogen's homepage.
  - label: Docs
    link: /en/docs
    title: Visit Hydrogen's documentation.
  - label: Github
    link: https://github.com/hydrogen-design-system/hydrogen
    title: Visit Hydrogen on Github.
  - label: Updates
    link: /en/docs/updates
    title: Learn about Hydrogen's latest stable and beta releases.
  - label: Roadmap
    link: https://github.com/orgs/hydrogen-design-system/projects/1
    title: Visit Hydrogen's feature roadmap to learn what's next.
hero:
  title: Hydrogen
  slogan: An experimental, open-source CSS utility framework powered by data attributes.
  features:
    - title: What is Hydrogen?
      content:
        - Hydrogen is a utility-type CSS framework that allows you to style websites right in your markup. Design settings meet the flexibility of data-attributes to help you create consistent, beautiful experiences.
    - title: How does it work?
      content:
        - Hydrogen watches your markup for any instance of a data-h2 attribute and builds CSS based on its value. It produces a tiny, production-ready file that only contains exactly what you've asked for.
    - title: Why should I use it?
      content:
        - Hydrogen's syntax is clear, legible, and aligns with the CSS you already know - no more naming classes. It works as fast as you do, can be customized to your needs, and best of all, it's open-source!
features:
  - title:
      text: Feature overview
      id: features
      img:
        src: /static/img/icon-robot.svg
        alt: A sticker-style icon of one of Hydrogen's adorable little mascots, Beep. Beep is a robot.
    sections:
      - title:
          text: An easy-to-learn, namespaced syntax
          id: syntax
        content:
          - type: copy
            items:
              - Hydrogen's syntax is deliberately verbose to make understanding your markup as easy as possible. It pulls from existing CSS best practices where possible so that you're not relearning a whole new language, and it won't interfere with your existing CSS thanks to its custom attributes.
          - type: code
            file: index.html
            width: half
            items:
              - '<p data-h2-color="b(primary) b:hover(accent)">'
              - '  Welcome to Hydrogen!'
              - '</p>'
      - title:
          text: Watch it build as you work, in an instant
          id: build
        content:
          - type: copy
            items:
              - By avoiding unnecessary compiling, Hydrogen works incredibly fast to scan your code and build a CSS file. This means you can have it running in the background as you develop and it will provide an up-to-date CSS file for you on the fly.
          - type: code
            file: terminal
            width: half
            items:
              - '⌚ [Hydrogen] Total Hydrogen build time: 166ms'
              - '✅ [Hydrogen] A CSS file was successfully built in ./src/static/css/'
              - '👀 [Hydrogen] Watching for changes to your code...'
      - title:
          text: Your brand, your way, in every line
          id: themes
        content:
          - type: copy
            items:
              - Embracing a design token style approach, Hydrogen encourages you to define decisions like color, typography, radii, and shadows in its configuration file. Use these definitions in your attributes, and update them product-wide in a matter of seconds.
          - type: code
            file: hydrogen.config.json
            width: half
            items:
              - '"colors": []'
              - '"typography": []'
              - '"shadows": []'
subfeatures:
  - label: Inline media queries
    content:
      - Define as many media queries as you need in your settings and then use them right in your markup.
  - label: Inline state styling
    content:
      - Style and manage HTML interaction states like hover and focus right in your attributes.
  - label: Dark mode
    content:
      - Pair queries with dark mode counterparts and toggle them through a class or browser setting.
  - label: CSS overrides
    content:
      - Need to tweak it to perfection? Use raw CSS values in many attributes to get it pixel perfect.
  - label: Variable exports
    content:
      - Export your settings to Sass or CSS variables and use them in your app's CSS file to keep everything consistent.
  - label: Autmated color modifiers
    content:
      - Generate automatic tints, shades, and opacities for your brand colors, or override them for more control.
  - label: Vertical rhythm
    content:
      - Hydrogen takes your base copy line height and produces a typography scale and flexible whitespace system.
  - label: Open-source
    content:
      - The whole framework is provided on Github under an MIT license. Dig into the code and discover the possibilities.
start:
  - title:
      text: Quick start
      id: start
      img:
        src: /static/img/icon-flag.svg
        alt: A sticker-style icon of a race flag.
    sections:
      - title:
          text: Getting up and running in 6 steps
          id: syntax
        content:
          - type: copy
            items:
              - <strong>1. Install Hydrogen using NPM.</strong><br>Before you can install Hydrogen itself, you'll need to ensure you have Node installed on your machine. You can get started with Node by <a href="https://nodejs.org/en/" title="Learn more about Node and NPM." target="_blank" rel="noreferrer">following their installation instructions</a>. Once Node is installed, navigate to your project root in a terminal and run the NPM installation command to install Hydrogen.
          - type: code
            file: terminal
            width: half
            items:
              - 'npm install @hydrogen-design-system/hydrogen.css --save'
          - type: copy
            items:
              - <strong>2. Initialize Hydrogen's configuration.</strong><br>The initialization script will take care of generating a configuration file for you, as well as prompting you to enter your input and output directories. You can learn more about initialization on <a href="en/docs/setup/commands/#init" title="Learn more about the command line options available when using Hydrogen.">the commands page</a>.
          - type: code
            file: terminal
            width: half
            items:
              - 'npx h2-init'
          - type: copy
            items:
              - <strong>3. Add Hydrogen's <code>data-h2</code> attribute to your <code>html</code> element.</strong><br>Hydrogen requires that you add the <code>data-h2</code> attribute to whatever parent element you'll be using Hydrogen attributes inside of. Generally on new projects, it's best to put this attribute on the <code>html</code> element, but you can use it wherever makes sense for your project. Hydrogen's styles will not work outside of this element.
              - <strong>4. Import Hydrogen's CSS file into your document.</strong><br>Like any other CSS file, you'll need to import Hydrogen's CSS into the <code>head</code> of your document.
              - <strong>5. Add a Hydrogen attribute to your markup.</strong><br>Now that the CSS file is ready to be loaded in, you can start going wild with Hydrogen attributes to style your project.
          - type: code
            file: index.html
            width: half
            items:
              - '<!DOCTYPE html>'
              - '<html data-h2>'
              - '  <head>'
              - '    ...'
              - '    <link rel="stylesheet" href="path/to/hydrogen.css">'
              - '    ...'
              - '  </head>'
              - '  <body>'
              - '    <p data-h2-color=”base(primary)”>'
              - '      Hello!'
              - '    </p>'
              - '  </body>'
              - '</html>'
          - type: copy
            items:
              - <strong>6. Run the build script to generate your custom CSS.</strong><br>When you're ready to view your masterpiece, you can run the build (or <a href="en/docs/setup/commands/#watch" title="Learn more about the command line options available when using Hydrogen.">watch</a>) command to compile your custom built CSS file.
          - type: code
            file: terminal
            width: half
            items:
              - 'npx h2-build'
homeAttributes:
  - title:
      text: Find an attribute
      id: attributes
      img:
        src: /static/img/icon-compass.svg
        alt: A sticker-style icon of a compass.
      link:
        link: /en/docs
        title: Head on over to Hydrogen's documentation for more detailed attribute information.
        label: Visit the docs
---
