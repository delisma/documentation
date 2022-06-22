---
eleventyNavigation:
  key: Configuration
  parent: Setup
layout: installation.njk
key: configuration
title: Configuration
subtitle: Learn about configuring development settings and style options.
new:
  - title:
      text: Test title
      id: test
    content:
      - type: copy
        items:
          - Things
          - Things
      - type: list
        items:
          - Item 01
          - Item 02
      - type: code
        width: full
        items: 
          - data-h2-test
    sections:
      - title:
          text: Test subtitle
          id: test-subtitle
        content:
          - type: copy
            items:
              - Sub copy things
              - Sub copy things
          - type: list
            items:
              - Sub Item 01
              - Sub Item 02
          - type: code
            width: half
            items:
              - test code 01
              -   test code 02
              - test code 03
sections:
  - title: 
      text: The configuration file
      id: basics
    content: 
      - copy: 
          - You might have been introduced to this command on the <a href="/en/docs/setup/installation" title="Learn about installing Hydrogen on your project.">installation page</a>, but let's dive into what the initialization script does for you in detail. You'll only ever need to run this script once when you first install Hydrogen on your project.
  - title: 
      text: Configuration options
      id: options
    content: 
      - copy: 
          - You might have been introduced to this command on the <a href="/en/docs/setup/installation" title="Learn about installing Hydrogen on your project.">installation page</a>, but let's dive into what the initialization script does for you in detail. You'll only ever need to run this script once when you first install Hydrogen on your project.
      - title: 
          text: Development settings
          id: settings
      - copy: 
          - The <code>debug</code> setting can be set to either <code>true</code> or <code>false</code>
          - Debugging is disabled by default, but can be enabled to make exploring and troubleshooting Hydrogen errors easier. Enabling this setting will force Hydrogen to create helpful log files in your output directory that you can then use to find problems such as syntax errors.
        list:
          - Item 01
          - Item 02
        code:
          type: block
          content: 
            - "\"debug\": false"
      - copy: 
          - The <code>input</code> setting accepts an array of input file paths.
          - 
        code:
          type: block
          content: 
            - "\"input\": ["
            - "  \"path/to/your/markup\","
            - "  \"other/path/to/your/markup\","
            - "  ..."
            - "]"
      - copy: 
          - Output
        code:
          type: block
          content: 
            - "\"output\": \"path/to/your/output/css/folder\""
      - copy: 
          - Variables
        code:
          type: block
          content: 
            - "\"variables\": {"
            - "  \"css\": false,"
            - "  \"sass\": false,"
            - "}"
      - copy: 
          - Reset styles
        code:
          type: block
          content: 
            - "\"resetStyles\": false"
      - title: 
          text: Style options
          id: style
      - copy: 
          - You might have been introduced to this command on the <a href="/en/docs/setup/installation" title="Learn about installing Hydrogen on your project.">installation page</a>, but let's dive into what the initialization script does for you in detail. You'll only ever need to run this script once when you first install Hydrogen on your project.
        code:
          type: block
          content: 
            - npx h2-init
steps:
  previous:
    title: "Learn about what options are available to your when configuring Hydrogen's output."
    label: "Configuring Hydrogen"
    link: "/en/docs/setup/configuration"
  next: 
    title: "Learn the basics of Hydrogen's syntax and how to apply styles to elements."
    label: "Using Hydrogen's syntax"
    link: "/en/docs/setup/syntax"
---