---
eleventyNavigation:
  key: Installation
  parent: Setup
layout: installation.njk
key: installation
title: Installation
subtitle: Learn how to get started with Hydrogen on your project.
sections:
  - title: 
      text: Installing the package
      id: install
    content: 
      - title:
          text: Latest release
          id: latest
        copy: 
          - Hydrogen runs behind the scenes using Node.js. In order to install Hydrogen on your project, you'll need to have Node and NPM installed on your machine. From there, inside of a command prompt/terminal window, navigate to the root of your project and run the installation command.
          - Once the command finishes, you'll be able to run Hydrogen's commands from your project. If you'd like to dig a little deeper into Hydrogen's code, you'll be able to find the installation inside of your project's <code>node_modules</code> folder.
        code:
          type: command
          content: 
            - npm install @hydrogen-design-system/hydrogen.css --save-dev
      - title:
          text: Beta releases
          id: beta
        copy: 
          - Depending on what's next in the roadmap, Hydrogen offers occasional beta releases for testing upcoming features. You can view the most recent beta releases on <a href="https://www.npmjs.com/package/@hydrogen-design-system/hydrogen.css" title="Visit Hydrogen on NPM." target="_blank" rel="noreferrer">Hydrogen's NPM package page</a>. If you'd like to install a beta release on your project, you can do so using a modified version of the installation command.
        code:
          type: command
          content: 
            - npm install @hydrogen-design-system/hydrogen.css@beta --save-dev
  - title:
      text: Initialization
      id: initialization
    content:
      - copy: 
          - Once Hydrogen has successfully installed, you can run the initialization command from the root folder of your project. This command will prompt you to enter a few details about your project's markup and output directory, after which it will automatically create a configuration file for you. This configuration file contains everything you'll need to customize Hydrogen to your brand, including examples and default values.
        code:
          type: command
          content:
            - npx h2-init
  - title:
      text: Loading Hydrogen
      id: load
    content:
      - copy: 
        - Finally, you'll need to add Hydrogen's CSS file to your project's <code>head</code> tag. The path you use here should reflect the path you specified as your output directory, followed by <code>hydrogen.css</code>.
        - You're all set to start developing with Hydrogen.
        code:
          type: block
          content:
            - "<head>"
            - "  ..."
            - "  <link rel=\"stylesheet\" href=\"path/to/hydrogen.css\">"
            - "  ..."
            - "</head>"
steps:
  previous: null
  next: 
    title: "Learn more about what commands Hydrogen provides and what they'll do for you while you work."
    label: "Working with commands"
    link: "/en/docs/setup/commands"
---