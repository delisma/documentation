---
key: align-content
eleventyNavigation:
  key: Align content
  parent: Attributes
title: Align content
summary: This attribute sets the distribution of space between and around content items in a flexbox or grid context.
syntaxSummary: Align content is set using the <strong>data-h2-align-content</strong> attribute which accepts 1 value.
syntax:
  - code: data-h2-align-content="media(alignment)"
    label: Standard values
    description: 'The standard syntax requires the following:'
    values:
      - key: Alignment
        required: true
        keys: false
        css: true
        description: The alignment value accepts any CSS value that align-content will accept. Common examples are listed to give you an idea of the formatting.
        examples:
          - flex-start
          - center
          - flex-end
examples: true
---

{% include "examples/align-content.njk" %}
