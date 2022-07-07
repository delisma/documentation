---
eleventyNavigation:
  key: Configuration
  parent: Setup
layout: docs.njk
key: configuration
title: Configuration
subtitle: Learn about configuring development settings and style options.
sections:
  - title:
      text: The configuration file
      id: basics
    content:
      - type: copy
        width: full
        items:
          - All of Hydrogen's settings can be configured inside of the <code>hydrogen.config.json</code> file in your project root. This file contains a handful of basic development settings and helpful default style configurations that you can change, add to, or remove to produce a look and feel that matches your brand.
          - Hydrogen's configuration follows a similar theory to a <strong>design token</strong> approach, where standardizing design decisions inside of the config allows you to leverage them across the whole project in a consistent, easily-updated way.
          - Each time you run <code>npx h2-build</code> or <code>npx h2-watch</code>, Hydrogen will first validate your configuration file to ensure it has everything it needs for a successful build. If something is missing or improperly formatted, Hydrogen will let you know in the console output.
  - title:
      text: Configuration options
      id: options
    sections:
      - title:
          text: Development settings
          id: settings
        sections:
          - title:
              text: Debug
              id: debug
            content:
              - type: copy
                items:
                  - Debugging is disabled by default, but can be enabled to make exploring and troubleshooting Hydrogen errors easier. Enabling this setting will force Hydrogen to create helpful log files in your output directory that you can then use to find problems such as syntax errors.
              - type: code
                file: hydrogen.config.json
                width: half
                pair: previous
                items:
                  - '"debug": false'
              - type: list
                width: half
                label: '<strong>Options overview:</strong>'
                items:
                  - '<code>debug</code>: <code>true</code>, <code>false</code>'
          - title:
              text: Input
              id: input
            content:
              - type: copy
                items:
                  - The <code>input</code> setting accepts an array of input directory paths. When building, Hydrogen will use these directories to look for attributes. Include any directory you're planning on writing markup in.
              - type: code
                file: hydrogen.config.json
                width: half
                pair: previous
                items:
                  - '"input": ['
                  - '  "path/to/your/markup",'
                  - '  ...'
                  - ']'
          - title:
              text: Output
              id: output
            content:
              - type: copy
                items:
                  - The <code>output</code> setting accepts a single output directory path. This folder will be used by Hydrogen to place it's final CSS file, as well as any logs you've enabled using the debug setting.
              - type: code
                file: hydrogen.config.json
                width: half
                pair: previous
                items:
                  - '"output": "path/to/your/output/css"'
          - title:
              text: Variable files
              id: variables
            content:
              - type: copy
                items:
                  - This option will tell Hydrogen to generate a CSS variable file in your output folder that contains codified versions of your style options set in Hydrogen's config. Importing these variables into your project allows you to access your style settings outside of Hydrogen's CSS.
              - type: code
                file: hydrogen.config.json
                width: half
                pair: previous
                items:
                  - '"variables": false'
              - type: list
                width: half
                label: '<strong>Options overview:</strong>'
                items:
                  - '<code>variables</code>: <code>true</code>, <code>false</code>'
          - title:
              text: Reset styles
              id: reset
            content:
              - type: copy
                items:
                  - This option tells Hydrogen to include some basic reset styling in its output. <strong>These styles might interfere with your existing CSS.</strong> This is enabled by default, but disabling it can help prevent conflicts if you're bringing Hydrogen into an existing project.
              - type: code
                file: hydrogen.config.json
                width: half
                pair: previous
                items:
                  - '"reset_styles": true'
              - type: list
                width: half
                label: '<strong>Options overview:</strong>'
                items:
                  - '<code>reset_styles</code>: <code>true</code>, <code>false</code>'
          - title:
              text: Dark mode
              id: dark_mode
            content:
              - type: copy
                items:
                  - This option tells Hydrogen how you'd like to handle dark mode on your project. By default, it is set to <code>preference</code>, meaning that dark mode will be decided based on your end-user's preferred system or browser setting. Alternatively, you can set this option to <code>toggle</code>, which will enable styling based on modifiable values in JavaScript as well as system preference. <a href="" title="Learn how to implement toggle-based dark mode using Hydrogen and JavaScript.">You can learn more about implementing dark mode's toggle setting here.</a>
              - type: code
                file: hydrogen.config.json
                items:
                  - '"dark_mode": "preference"'
              - type: list
                label: '<strong>Options overview:</strong>'
                items:
                  - '<code>dark_mode</code>: <code>preference</code>, <code>toggle</code>'
      - title:
          text: Style foundations
          id: foundations
        sections:
          - title:
              text: Colors
              id: colors
            content:
              - type: copy
                items:
                  - The <code>colors</code> setting allows you to define as many color options as your project needs. By default, you'll find definitions for a primary brand color, secondary brand color, accent color, black, and white.
              - type: code
                file: hydrogen.config.json
                items:
                  - '"colors": []'
              - type: group
                items:
                  - type: list
                    label: '<strong>Options overview:</strong>'
                    items:
                      - '<code>key</code>: functional name'
                      - '<code>color</code>: color value'
                      - type: sublist
                        content: '<code>scale</code>: tints and shades'
                        items:
                          - '<code>light</code>: <code>auto</code>, color value'
                          - '<code>lighter</code>: <code>auto</code>, color value'
                          - '<code>lightest</code>: <code>auto</code>, color value'
                          - '<code>dark</code>: <code>auto</code>, color value'
                          - '<code>darker</code>: <code>auto</code>, color value'
                          - '<code>darkest</code>: <code>auto</code>, color value'
                  - type: copy
                    items:
                      - The <code>key</code> option lets you set a name for your color. The <code>key</code> name you choose should be unique (including from those you choose for gradients), and it's recommended that you use functional terms such as <code>primary</code> or <code>error</code> rather than the color's name. This will prevent situations where your brand colors change and you suddenly have Hydrogen attributes everywhere that say <code>blue</code> when your new brand color is in fact <code>yellow</code>.
                      - The <code>color</code> option is where you'll set the actual color value you want to use. This value can be set using CSS colors, including <code>HEX</code>, <code>RGBA</code>, <code>HSL</code>, etc.
                      - The <code>scale</code> option provides access to 3 different tints and 3 different shades. By default these options are set to <code>auto</code>, telling Hydrogen to generate tints and shade values for you automatically. You can choose to manually overwrite these values with your own custom colors if you want more control, however the keys for each scale (e.g. <code>lighter</code>, <code>darkest</code>, etc.) must remain the same.
              - type: code
                file: hydrogen.config.json
                items:
                  - '{'
                  - '  "key": "primary",'
                  - '  "color": "#9D5CFF",'
                  - '  "scale": {'
                  - '    "light": "auto",'
                  - '    "lighter": "auto",'
                  - '    "lightest": "auto",'
                  - '    "dark": "auto",'
                  - '    "darker": "auto",'
                  - '    "darkest": "auto"'
                  - '  }'
                  - '}'
          - title:
              text: Media queries
              id: media_queries
            content:
              - type: copy
                items:
                  - The <code>media</code> setting allows you to define and access media queries right in your markup. By default, Hydrogen comes equipped with a basic all-purpose set of queries that allow you to target common devices.
                  - The first and most important query is the <code>base</code> query, which you'll use to set styles that apply to any device. This query is unique in that its <code>query</code> value is set to <code>null</code> and is required for Hydrogen to function. This setting must keep its <code>query</code> option set to <code>null</code> but you can choose to name its <code>key</code> whatever you want.
                  - <strong>Please note that the order of your media query settings matters in the same way they would in CSS' cascade.</strong> Queries should follow a mobile-first order, where the base query is followed by small queries, followed by larger queries, and so on.
              - type: code
                file: hydrogen.config.json
                items:
                  - '"media": ['
                  - '  {'
                  - '    "key": "base",'
                  - '    "query": null'
                  - '  },'
                  - '  ...'
                  - ']'
              - type: group
                items:
                  - type: list
                    label: '<strong>Options overview:</strong>'
                    items:
                      - '<code>key</code>: functional name'
                      - '<code>query</code>: CSS query value'
                  - type: copy
                    items:
                      - The <code>key</code> option allows you to define a name for your query that you'll use in Hydrogen's attributes. The key should be short and descriptive of the query's purpose. Note that there is a small restriction on <code>key</code> values for media queries - they can't end in the same string of text. For example, you can't name one query <code>large</code> and a subsequent query <code>x-large</code>. Hydrogen will warn you if you attempt to use values that violate this rule to avoid unexpected problems.
                      - The <code>query</code> option accepts any CSS media value you'd usually define in an <code>@media</code> rule, meaning you can define screen sizes, color schemes, print media, and more.
              - type: code
                file: hydrogen.config.json
                items:
                  - '{'
                  - '  "key": "laptop",'
                  - '  "query": "screen and (min-width: 80em)"'
                  - '}'
          - title:
              text: Typography
              id: typography
            content:
              - type: copy
                items:
                  - Hydrogen's approach to typography enables you to define different settings for one or more of your media queries. This means you can granularly control how typography is displayed in specific circumstances to create the best experience possible for the space available to you.
              - type: code
                file: hydrogen.config.json
                items:
                  - '"typography": []'
              - type: group
                items:
                  - type: list
                    label: '<strong>Options overview:</strong>'
                    items:
                      - '<code>query_key</code>: media <code>key</code> value'
                      - '<code>size</code>: percentage'
                      - '<code>line_height</code>: integer, decimal'
                      - '<code>type_scale</code>: integer, decimal'
                  - type: copy
                    items:
                      - The <code>query_key</code> option requires a matching <code>key</code> value from your <code>media</code> configuration options. The typography configuration uses this value to determine which of your media queries it needs to use to activate the options you've defined. Hydrogen comes with two default settings for you, one for the <code>base</code> query and another for the <code>desktop</code> query, but you can add to and change these to meet your needs.
                      - The <code>size</code> option allows you to set a percentage, which is applied to the <code>html</code> element. This percentage takes the end user's browser setting (frequently set to 16px by default) and adjusts it accordingly, retaining their ability to control their experience and zoom in and out of content.
                      - The <code>line_height</code> option accepts a whole or decimal number and has a significant impact on how <a href="" title="">Hydrogen generates its vertical rhythm</a>. At its most basic level, this line height value will be used to set the line height of basic elements and paragraphs.
                      - The <code>type_scale</code> option will tell Hydrogen how to generate font sizes (and accompanying line heights) for your heading elements. This value acts as a multiplier for the font size at each heading level, and can be explored using tools such <a href="https://type-scale.com/" title="" target="_blank" rel="noreferrer">Type Scale</a>.
              - type: code
                file: hydrogen.config.json
                items:
                  - '{'
                  - '  "query_key": "base",'
                  - '  "size": "100%",'
                  - '  "line_height": "1.4",'
                  - '  "type_scale": "1.2"'
                  - '}'
      - title:
          text: Other style settings
          id: style
        sections:
          - title:
              text: Containers
              id: containers
            content:
              - type: copy
                items:
                  - The <code>containers</code> setting allows you to define reusable container widths for your project. This can be helpful for ensuring that your page widths are always consistent across the application. Container definitions are integrated with other options inside of the <a href="" title="">container attribute</a> to provide detailed control over alignment, width, and padding at different media queries.
              - type: code
                file: hydrogen.config.json
                items:
                  - '"containers": []'
              - type: group
                items:
                  - type: list
                    label: '<strong>Options overview:</strong>'
                    items:
                      - '<code>key</code>: functional name'
                      - '<code>max_width</code>: CSS unit'
                  - type: copy
                    items:
                      - The <code>key</code> option allows you to set a name for the container that you'll use to access it in your Hydrogen attributes. Like other key options, this name should be functional in nature to ensure that changes to the definition don't need to be reflected in the markup down the road.
                      - The <code>max_width</code> option allows you to set the container's maximum width on screen.
              - type: code
                file: hydrogen.config.json
                items:
                  - '{'
                  - '  "key": "small",'
                  - '  "max_width": "39rem"'
                  - '}'
          - title:
              text: Font families
              id: fonts
            content:
              - type: copy
                items:
                  - The <code>fonts</code> setting allows you to define reusable font families for use in your Hydrogen attributes. These settings allow you to abstract font names behind functional terms like "serif" to help avoid specificity and standardize fonts across your project.
              - type: code
                file: hydrogen.config.json
                items:
                  - '"fonts": []'
              - type: group
                items:
                  - type: list
                    label: '<strong>Options overview:</strong>'
                    items:
                      - '<code>key</code>: functional name'
                      - '<code>family</code>: CSS <code>font-family</code>'
                  - type: copy
                    items:
                      - The <code>key</code> option allows you to set a name for the font family that you'll use to access it in your Hydrogen attributes. Like other key options, this name should be functional in nature to ensure that changes to the definition don't need to be reflected in the markup down the road.
                      - The <code>family</code> option allows you to define the specific CSS values required for the family to work, as well as fallbacks.
              - type: code
                file: hydrogen.config.json
                items:
                  - '{'
                  - '  "key": "sans",'
                  - '  "family": "''Inter'', sans-serif"'
                  - '}'
          - title:
              text: Gradients
              id: gradients
            content:
              - type: copy
                items:
                  - The <code>gradient</code> setting can be used to define reusable gradient values for use in backgrounds, fonts, and overlays. The <code>gradient</code> option is flexible, and will accept any value you'd expect to use in your vanilla CSS.
              - type: code
                file: hydrogen.config.json
                items:
                  - '"gradients": []'
              - type: group
                items:
                  - type: list
                    label: '<strong>Options overview:</strong>'
                    items:
                      - '<code>key</code>: functional name'
                      - '<code>gradient</code>: CSS gradient'
                      - '<code>fallback</code>: color value'
                  - type: copy
                    items:
                      - The <code>key</code> option allows you to set a name for the gradient that you'll use to access it in your Hydrogen attributes. Like other key options, this name should be functional in nature to ensure that changes to the definition don't need to be reflected in the markup down the road.
                      - The <code>gradient</code> option allows you to set a CSS gradient value using the same syntax you would use in the <code>background-image</code> property.
                      - The <code>fallback</code> option allows you to define a fallback color that will be used if the end user's browser doesn't support gradients.
              - type: code
                file: hydrogen.config.json
                items:
                  - '{'
                  - '  "key": "heroRadial",'
                  - '  "gradient": "radial-gradient(rgba(157,92,255, 1), rgba(42, 44, 61, 1))",'
                  - '  "fallback": "rgba(157,92,255, 1)"'
                  - '}'
          - title:
              text: Radii
              id: radii
            content:
              - type: copy
                items:
                  - The <code>radius</code> setting can be used to define reusable radii for use on elements like cards, buttons, and form fields. This setting helps you consolidate your radius decisions into common patterns to help avoid inconsistencies in your interfaces.
              - type: code
                file: hydrogen.config.json
                items:
                  - '"radius": []'
              - type: group
                items:
                  - type: list
                    label: '<strong>Options overview:</strong>'
                    items:
                      - '<code>key</code>: functional name'
                      - '<code>radius</code>: CSS unit'
                  - type: copy
                    items:
                      - The <code>key</code> option allows you to set a name for the radius that you'll use to access it in your Hydrogen attributes. Like other key options, this name should be functional in nature to ensure that changes to the definition don't need to be reflected in the markup down the road.
                      - The <code>radius</code> option allows you to set a CSS <code>border-radius</code> value for one corner. Note that because the <code>data-h2-radius</code> attribute allows you to specify which corners you want the radius to apply to, it's only necessary to specify a single value in the <code>radius</code> option.
              - type: code
                file: hydrogen.config.json
                items:
                  - '{'
                  - '  "key": "rounded",'
                  - '  "radius": "10px",'
                  - '}'
          - title:
              text: Shadows
              id: shadows
            content:
              - type: copy
                items:
                  - The <code>shadows</code> setting can be used to define reusable shadows that can then be used to create depth in your interfaces. Shadow definitions help you ensure that shadows appear realistic and that depths are consistently represented across different interface patterns.
              - type: code
                file: hydrogen.config.json
                items:
                  - '"shadows": []'
              - type: group
                items:
                  - type: list
                    label: '<strong>Options overview:</strong>'
                    items:
                      - '<code>key</code>: functional name'
                      - '<code>shadow</code>: CSS shadow value'
                  - type: copy
                    items:
                      - The <code>key</code> option allows you to set a name for the shadow that you'll use to access it in your Hydrogen attributes. Like other key options, this name should be functional in nature to ensure that changes to the definition don't need to be reflected in the markup down the road.
                      - The <code>shadow</code> option allows you to set a CSS <code>box-shadow</code> value.
              - type: code
                file: hydrogen.config.json
                items:
                  - '{'
                  - '  "key": "small",'
                  - '  "shadow": "0 0.1rem 0.2rem 0 rgba(0, 0, 0, .2)"'
                  - '}'
          - title:
              text: Transitions
              id: transitions
            content:
              - type: copy
                items:
                  - The <code>transitions</code> setting allows you to define specific transition settings that can then be combined in various ways using the <code>data-h2-transition</code> attribute.
              - type: code
                file: hydrogen.config.json
                items:
                  - '"transitions": {}'
            sections:
              - title:
                  text: Durations
                  id: duration
                content:
                  - type: copy
                    items:
                      - The <code>durations</code> option allows you to define specific duration values for your transitions.
                  - type: code
                    file: hydrogen.config.json
                    items:
                      - '"durations": []'
                  - type: group
                    items:
                      - type: list
                        label: '<strong>Options overview:</strong>'
                        items:
                          - '<code>key</code>: functional name'
                          - '<code>duration</code>: time value'
                      - type: copy
                        items:
                          - The <code>key</code> option allows you to set a name for the duration that you'll use to access it in your Hydrogen attributes. Like other key options, this name should be functional in nature to ensure that changes to the definition don't need to be reflected in the markup down the road.
                          - The <code>duration</code> option allows you to set a CSS time value (e.g. <code>.2s</code>, <code>5s</code>).
                  - type: code
                    file: hydrogen.config.json
                    items:
                      - '{'
                      - '  "key": "short",'
                      - '  "duration": ".2s"'
                      - '}'
              - title:
                  text: Functions
                  id: function
                content:
                  - type: copy
                    items:
                      - The <code>functions</code> option allows you to define specific motion functions for your transitions.
                  - type: code
                    file: hydrogen.config.json
                    items:
                      - '"functions": []'
                  - type: group
                    items:
                      - type: list
                        label: '<strong>Options overview:</strong>'
                        items:
                          - '<code>key</code>: functional name'
                          - '<code>function</code>: CSS transition function, <code>cubic-bezier()</code>'
                      - type: copy
                        items:
                          - The <code>key</code> option allows you to set a name for the function that you'll use to access it in your Hydrogen attributes. Like other key options, this name should be functional in nature to ensure that changes to the definition don't need to be reflected in the markup down the road.
                          - The <code>function</code> option allows you to set a CSS transition function value (e.g. <code>linear</code>, <code>ease</code>) or a cubic bezier function.
                  - type: code
                    file: hydrogen.config.json
                    items:
                      - '{'
                      - '  "key": "ease",'
                      - '  "function": "ease"'
                      - '}'
              - title:
                  text: Delays
                  id: delay
                content:
                  - type: copy
                    items:
                      - The <code>delays</code> option allows you to define specific time values that delay your transition from happening.
                  - type: code
                    file: hydrogen.config.json
                    items:
                      - '"delays": []'
                  - type: group
                    items:
                      - type: list
                        label: '<strong>Options overview:</strong>'
                        items:
                          - '<code>key</code>: functional name'
                          - '<code>delay</code>: time value'
                      - type: copy
                        items:
                          - The <code>key</code> option allows you to set a name for the shadow that you'll use to access it in your Hydrogen attributes. Like other key options, this name should be functional in nature to ensure that changes to the definition don't need to be reflected in the markup down the road.
                          - The <code>delay</code> option allows you to set a CSS time value (e.g. <code>.2s</code>, <code>5s</code>).
                  - type: code
                    file: hydrogen.config.json
                    items:
                      - '{'
                      - '  "key": "none",'
                      - '  "delay": "0s"'
                      - '}'
steps:
  previous:
    title: "Learn more about what commands Hydrogen provides and what they'll do for you while you work."
    label: 'Working with commands'
    link: '/en/docs/setup/commands'
  next:
    title: "Learn the basics of Hydrogen's syntax and how to apply styles to elements."
    label: "Using Hydrogen's syntax"
    link: '/en/docs/basics/syntax'
---
