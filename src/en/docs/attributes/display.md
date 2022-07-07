---
key: display
eleventyNavigation:
  key: Display
  parent: Attributes
title: Display
subtitle: This attribute sets whether the element is treated as inline or block, as well as how its children are displayed.
sections:
  - title:
      text: Syntax
      id: syntax
    content:
      - type: copy
        width: full
        items:
          - Display is set using the <code>data-h2-display</code> attribute and accepts 1 option.
    sections:
      - title:
          text: Standard option
          id: standard
        content:
          - type: code
            width: full
            file: index.html
            items:
              - data-h2-display="media(display)"
          - type: syntax
            key: display
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

summary: This attribute sets whether the element is treated as inline or block, as well as how its children are displayed.
syntaxSummary: Display is set using the <strong>data-h2-display</strong> attribute which accepts 1 value.
syntax:
  - code: data-h2-container="media(display)"
    label: Standard values
    values:
      - key: Display
        required: true
        keys: false
        css: true
        description: This value accepts any valid option that the CSS display property accepts.
        examples:
          - block
          - inline
          - grid
          - none
---
