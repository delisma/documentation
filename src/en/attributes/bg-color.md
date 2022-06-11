---
key: bg-color
eleventyNavigation:
  key: Background colors
  parent: Attributes
title: Background color
summary: This property sets a color or gradient as an element’s background value.
syntaxStatement: "Background color can be used using the data-h2-background-color attribute and accepts 1 value:"
syntaxCode: data-h2-background-color="media(color/gradient)"
values:
  - name: Color/gradient
    key: color/gradient
    required: true
    keys: true
    css: true
    description: null
    examples:
      - primary
      - accent
      - rgba(40, 30, 60)
      - "#4d2680"
examples: true
---
{% include "examples/bg-color.njk.html" %}