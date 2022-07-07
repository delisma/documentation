---
key: background-color
eleventyNavigation:
  key: Background colors
  parent: Attributes
title: Background color
subtitle: This attribute sets a color or gradient as an element’s background value.
sections:
  - title:
      text: Syntax
      id: syntax
    content:
      - type: copy
        width: full
        items:
          - Background colors are set using the <code>data-h2-background-color</code> attribute and accepts 1 option.
    sections:
      - title:
          text: Standard option
          id: standard
        content:
          - type: code
            width: full
            file: index.html
            items:
              - data-h2-background-color="media(color/gradient)"
          - type: syntax
            key: color_gradient
            width: full
            required: true
examples:
  state: false
  sections:
    - title:
        text: Examples
        id: examples
      content:
        - type: copy
          width: full
          items:
            - Below are a few examples of <code>background-color</code> in action.
---

{% include "examples/bg-color.njk" %}
