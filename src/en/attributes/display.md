---
key: display
eleventyNavigation:
  key: Display
  parent: Attributes
title: Display
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
examples: false
---