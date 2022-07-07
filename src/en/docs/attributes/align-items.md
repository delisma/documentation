---
key: align-items
eleventyNavigation:
  key: Align items
  parent: Attributes
title: Align items
summary: This attribute controls the alignment of items on the flexbox cross axis and the grid layout block axis.
syntaxSummary: Align items is set using the <strong>data-h2-align-items</strong> attribute which accepts 1 value.
syntax:
  - code: data-h2-align-items="media(alignment)"
    label: Standard values
    description: 'The standard syntax requires the following:'
    values:
      - key: Alignment
        required: true
        keys: false
        css: true
        description: The alignment value accepts any CSS value that align-items will accept. Common examples are listed to give you an idea of the formatting.
        examples:
          - flex-start
          - center
          - flex-end
examples: false
---

{% include "examples/align-items.njk" %}
