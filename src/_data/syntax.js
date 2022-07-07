module.exports = {
  en: [
    {
      key: 'color',
      title: 'Color',
      keys: true,
      css: true,
      description:
        'Color values can be set by using one of your defined color keys or by using a CSS color value (<code>hex</code>, <code>rgb</code>, etc.).',
      examples: [
        {
          label: 'Examples of configured colors',
          items: ['primary', 'accent', 'light.primary', 'accent.5'],
        },
        {
          label: 'Examples of CSS colors',
          items: ['blue', '#9D5CFF', 'rgba(255, 45, 60, 1)'],
        },
      ],
    },
    {
      key: 'color_gradient',
      title: 'Color / gradient',
      keys: true,
      css: true,
      description:
        'Color values can be set by using one of your defined color keys or by using a CSS color value (<code>hex</code>, <code>rgb</code>, etc.). Gradients must be set using your defined gradient key; CSS gradient syntax is not available.',
      examples: [
        {
          label: 'Examples of configured colors',
          items: ['primary', 'accent', 'light.primary', 'accent.5'],
        },
        {
          label: 'Examples of CSS colors',
          items: ['blue', '#9D5CFF', 'rgba(255, 45, 60, 1)'],
        },
        {
          label: 'Examples of configured gradients',
          items: ['myLinearGradient', 'myRadialGradient'],
        },
      ],
    },
    {
      key: 'css_border',
      title: 'CSS value',
      keys: false,
      css: true,
      description:
        "This option allows you to define the border's styles using standard CSS syntax. Note that color keys and space multipliers do not work using this approach.",
      examples: [
        {
          label: 'Examples of border CSS',
          items: ['primary', 'accent', 'light.primary', 'accent.5'],
        },
      ],
    },
    {
      key: 'display',
      title: 'Display',
      keys: false,
      css: true,
      description:
        'This value accepts any valid option that the CSS display property accepts.',
      examples: [
        {
          label: 'Examples of CSS display values',
          items: ['block', 'inline', 'grid', 'none'],
        },
      ],
    },
    {
      key: 'none_border',
      title: 'None',
      keys: true,
      css: false,
      description:
        'The none value will automatically remove all borders on an element for you.',
      examples: [
        {
          label: 'Available value',
          items: ['none'],
        },
      ],
    },
    {
      key: 'side',
      title: 'Side',
      keys: true,
      css: false,
      description:
        "The side value accepts a specific key that defines which sides of the element you'd like the border to apply to.",
      examples: [
        {
          label: 'Examples of side keys',
          items: [
            'all',
            'top',
            'right',
            'left',
            'bottom',
            'top-bottom',
            'right-left',
          ],
        },
      ],
    },
    {
      key: 'style',
      title: 'Style',
      keys: false,
      css: true,
      description:
        'The style value accepts any value that would normally work as a CSS border-style declaration.',
      examples: [
        {
          label: 'Examples of style CSS options',
          items: ['solid', 'dashed'],
        },
      ],
    },
    {
      key: 'width',
      title: 'Width',
      keys: true,
      css: true,
      description:
        "Space values can be set using Hydrogen's automated space multipliers or by using CSS units (<code>px</code>, <code>rem</code>, etc.).",
      examples: [
        {
          label: 'Examples of space multipliers',
          items: ['x1', 'x2.5', 'x5'],
        },
        {
          label: 'Examples of CSS units',
          items: ['50px', '3rem', '20vw'],
        },
      ],
    },
  ],
  fr: [],
};
