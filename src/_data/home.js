module.exports = {
  en: {
    slogan: "An experimental, open-source CSS utility framework powered by data attributes.",
    intro: [
      {
        title: "What is Hydrogen?",
        content: [
          "Hydrogen is a utility-type CSS framework that allows you to style websites right in your markup. Design settings meet the flexibility of data-attributes to help you create consistent, beautiful experiences."
        ]
      },
      {
        title: "How does it work?",
        content: [
          "Hydrogen watches your markup for any instance of a data-h2 attribute and builds CSS based on its value. It produces a tiny, production-ready file that only contains exactly what you've asked for."
        ]
      },
      {
        title: "Why should I use it?",
        content: [
          "Hydrogen's syntax is clear, legible, and aligns with the CSS you already know - no more naming classes. It works as fast as you do, can be customized to your needs, and best of all, it's open-source!"
        ]
      }
    ],
    features: {
      title: "Feature overview",
      iconAlt: "A sticker icon of one of Hydrogen's adorable little mascots, Beep. Beep is a robot.",
      features: [
        {
          title: "An easy-to-learn, namespaced syntax",
          content: [
            "Hydrogen's syntax is deliberately verbose to make understanding your markup as easy as possible. It pulls from existing CSS best practices where possible so that you're not relearning a whole new language, and it won't interfere with your existing CSS thanks to its custom attributes."
          ],
          code: [
            "<p data-h2-color=\"b(primary) b:hover(accent)\">",
            "  Welcome to Hydrogen!",
            "</p>"
          ]
        },
        {
          title: "Watch it build as you work, in an instant",
          content: [
            "By avoiding unnecessary compiling, Hydrogen works incredibly fast to scan your code and build a CSS file. This means you can have it running in the background as you develop and it will provide an up-to-date CSS file for you on the fly."
          ],
          code: [
            "⌚ [Hydrogen] Total Hydrogen build time: 38.123ms",
            "✅ [Hydrogen] A CSS file was successfully built in ./src/static/css/",
            "👀 [Hydrogen] Watching for changes to your code..."
          ]
        },
        {
          title: "Your brand, your way, in every line",
          content: [
            "Embracing a design token style approach, Hydrogen encourages you to define decisions like color and typography in its configuration file. Use these definitions in your attributes, and update them product-wide in a matter of seconds."
          ],
          code: [
            "\"colors\": [ ",
            "  { \"key\": \"primary\", \"color\": #9D5CFF, \"scale\": {} }",
            "]"
          ]
        }
      ]
    },
    otherFeatures: [
      {
        title: "Inline media queries",
        content: [
          "Define as many media queries as you need in your settings and then use them right in your markup."
        ]
      },
      {
        title: "State management",
        content: [
          "Style and manage HTML interaction states like hover and focus right in your attributes."
        ]
      },
      {
        title: "Dark mode",
        content: [
          "Pair queries with dark mode counterparts and toggle them through a class or browser setting."
        ]
      },
      {
        title: "CSS values",
        content: [
          "Need to tweak it to perfection? Use raw CSS values in many attributes to get it pixel perfect."
        ]
      },
      {
        title: "Variable exports",
        content: [
          "Export your settings to Sass or CSS variables and use them in your app's CSS file to keep everything consistent."
        ]
      },
      {
        title: "Color ranges",
        content: [
          "Generate automatic tints and shades for your brand colors, or override them if you want them to be exact."
        ]
      },
      {
        title: "Convenience attributes",
        content: [
          "Hydrogen isn't limited to just CSS properties - attributes like overlay and visibility make tedious tasks easy."
        ]
      },
      {
        title: "Open-source",
        content: [
          "The whole framework is provided on Github under an MIT license. Dig into the code and discover the possibilities."
        ]
      },
    ],
    start: {
      title: "Quick start",
      iconAlt: "",
      titleLink: {
        label: "Visit the documentation",
        title: "",
        url: "/en/docs"
      },
      subtitle: "Getting up and running is easy!",
      content: [
        {
          content: "Using Hydrogen requires that Node be installed. You can get started with Node by following their instructions. When you’re ready, you can run the following command to install Hydrogen on your project:",
          code: "npm install @hydrogen-design-system/hydrogen.css --save"
        },
        {
          content: "Once Hydrogen has been installed, you can use the initialization command to create your configuration file.",
          code: "npx h2-init"
        },
        {
          content: "After successfully creating your configuration file, you can either start customizing, or begin using Hydrogen attributes in your code.",
          code: "<p data-h2-color=”b(primary)”>\n  Hello!\n</p>"
        },
        {
          content: "When you’re ready to view your work, you can choose to build Hydrogen once, or use the watch command to continuously watch for changes and automatically prepare your CSS file.",
          code: [
            "npx h2-build",
            "npx h2-watch"
          ]
        },
        {
          content: "With that, you’re ready to start building! Want to explore what Hydrogen can do? Check out the documentation for configuration options, syntax explanations, information on attributes, and more!",
          code: null
        }
      ]
    },
    attributes: {
      title: "Find an attribute",
      iconAlt: "",
      titleLink: {
        label: "Visit the documentation",
        title: "",
        url: "/en/docs"
      }
    }
  },
  fr: {
    slogan: "Un cadre utilitaire CSS expérimental et open-source alimenté par des attributs de données.",
    features: [
      {
        title: "Une syntaxe d'attribut personnalisée",
        content: [
          "Hydrogen utilise des attributs de données personnalisés comme sélecteurs. Cela permet une personnalisation complexe et flexible tout en offrant une syntaxe lisible et facile à apprendre.",
          "Le CSS qui en résulte est associé à la bibliothèque, ce qui l'empêche d'interférer avec le code existant."
        ]
      },
      {
        title: "Filtré et prêt pour la production",
        content: [
          "Les cadres CSS sont énormes, et c'est pourquoi Hydrogen est construit avec le filtrage à son cœur.",
          "Hydrogen analyse votre code pendant que vous travaillez pour produire à la volée un fichier CSS qui ne contient que ce que vous avez utilisé sur votre projet, rien de plus."
        ]
      },
      {
        title: "Configurable à votre marque",
        content: [
          "Hydrogen propose une série d'options qui vous permettent non seulement de modifier les paramètres de base du thème, mais aussi de les étendre pour que le système s'adapte à votre marque.",
          "Il applique de manière réfléchie des contraintes aux options que vous fournissez afin de garantir la cohérence et la réutilisation."
        ]
      }
    ]
  },
};