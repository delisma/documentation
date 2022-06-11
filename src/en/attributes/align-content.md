---
key: align-content
eleventyNavigation:
  key: Align content
  parent: Attributes
title: Align content
summary: This property sets the distribution of space between and around content items in a flexbox or grid context.
syntaxStatement: "Align content can be used using the data-h2-align-content attribute and accepts 1 value:"
syntaxCode: data-h2-align-content="media(alignment)"
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
examples: true
---
{% include "examples/align-content.njk.html" %}