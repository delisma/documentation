---
key: border
eleventyNavigation:
  key: Borders
  parent: Attributes
title: Borders
summary: This property applies a border to one or more sides of an element.
syntaxStatement: "Borders can be used using the data-h2-border attribute and accepts 2 or 4 values:"
syntaxCode: 
  - data-h2-border="media(side, css)"
  - data-h2-border="media(side, width, style, color)"
values:
  - name: Side
    key: side
    required: true
    keys: true
    css: false
    description: The alignment value accepts any CSS value that align-content will accept. Common examples are listed to give you an idea of the formatting.
    examples:
      - flex-start
      - center
      - flex-end
  - name: CSS value
    key: CSS value
    required: true
    keys: false
    css: true
    description: The alignment value accepts any CSS value that align-content will accept. Common examples are listed to give you an idea of the formatting.
    examples:
      - flex-start
      - center
      - flex-end
  - name: Width
    key: width
    required: true
    keys: true
    css: true
    description: The alignment value accepts any CSS value that align-content will accept. Common examples are listed to give you an idea of the formatting.
    examples:
      - flex-start
      - center
      - flex-end
  - name: Style
    key: style
    required: true
    keys: false
    css: true
    description: The alignment value accepts any CSS value that align-content will accept. Common examples are listed to give you an idea of the formatting.
    examples:
      - flex-start
      - center
      - flex-end
  - name: Color
    key: color
    required: true
    keys: true
    css: true
    description: The alignment value accepts any CSS value that align-content will accept. Common examples are listed to give you an idea of the formatting.
    examples:
      - flex-start
      - center
      - flex-end
examples: false
---