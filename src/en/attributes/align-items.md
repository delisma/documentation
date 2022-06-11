---
key: align-items
eleventyNavigation:
  key: Align items
  parent: Attributes
title: Align items
summary: This property controls the alignment of items on the flexbox cross axis and the grid layout block axis.
syntaxStatement: "Align items can be used using the data-h2-align-items attribute and accepts 1 value:"
syntaxCode: data-h2-align-items="media(alignment)"
values:
  - name: Alignment
    key: alignment
    required: true
    keys: false
    css: true
    description: The alignment value accepts any CSS value that align-content will accept. Common examples are listed to give you an idea of the formatting.
    examples:
      - flex-start
      - center
      - flex-end
examples: false
---
{% include "examples/align-items.njk.html" %}