---
key: background-color
eleventyNavigation:
  key: Background colors
  parent: Attributes
title: Background color
summary: This attribute sets a color or gradient as an element’s background value.
syntaxSummary: Background colors are set using the <strong>data-h2-background-color</strong> attribute which accepts 1 value.
syntax:
  - code: data-h2-background-color="media(color/gradient)"
    label: Standard values
    description: 'The standard syntax requires the following:'
    values:
      - key: Color/gradient
        required: true
        keys: true
        css: true
        description:
        examples:
          - primary
          - accent
          - rgba(40, 30, 60)
          - '#4d2680'
examples: true
---

{% include "examples/bg-color.njk" %}
