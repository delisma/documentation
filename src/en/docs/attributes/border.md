---
key: border
eleventyNavigation:
  key: Borders
  parent: Attributes
title: Borders
summary: This attribute applies a border to one or more sides of an element.
syntaxSummary: Borders are set using the <strong>data-h2-border</strong> attribute which accepts 2 or 4 values.
syntax:
  - code: data-h2-border="media(side, width, style, color)"
    label: Standard values
    description: "The standard 4 value syntax requires the following:"
    values:
      - key: Side
        required: true
        keys: true
        css: false
        description: The side value accepts a specific key that defines which sides of the element you'd like the border to apply to.
        examples:
          - all
          - top
          - right
          - left
          - bottom
          - top-bottom
          - right-left
      - key: Width
        required: true
        keys: true
        css: true
        description:
        examples:
      - key: Style
        required: true
        keys: false
        css: true
        description: The style value accepts any value that would normally work as a CSS border-style declaration.
        examples:
          - solid
          - dashed
      - key: Color
        required: true
        keys: true
        css: true
        description: 
        examples:
  - code: data-h2-border="media(side, css)"
    label: Alternative values
    description: "The alternative 2 value syntax allows you to specify a side and apply a CSS border value. It requires the following values:"
    values:
      - key: Side
        required: true
        keys: true
        css: false
        description: The side value accepts a specific key that defines which sides of the element you'd like the border to apply to.
        examples:
          - all
          - top
          - right
          - left
          - bottom
          - top-bottom
          - right-left
      - key: CSS value
        required: true
        keys: false
        css: true
        description: This option allows you to define the border's styles using standard CSS syntax. Note that color keys and space multipliers do not work using this approach.
        examples:
          - 1px solid black
          - ".5rem dashed #FF0000"
examples: false
---