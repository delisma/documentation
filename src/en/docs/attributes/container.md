---
key: container
eleventyNavigation:
  key: Containers
  parent: Attributes
title: Containers
summary: This attribute aligns and confines other elements within a maximum width and can be set with optional padding.
syntaxSummary: Containers are set using the <strong>data-h2-container</strong> attribute which accepts 1 value.
syntax:
  - code: data-h2-container="media(alignment, container, padding)"
    label: Standard values
    values:
      - key: Alignment
        required: true
        keys: true
        css: true
        description: This value tells the container how to align its content once the container reaches its maximum width.
        examples:
          - left
          - right
          - center
      - key: Container
        required: true
        keys: true
        css: false
        description: This value accepts any container key you've defined in your configuration.
        examples:
          - small
          - medium
          - large
      - key: Padding
        required: false
        keys: true
        css: true
        description: 
        examples:
examples: false
---