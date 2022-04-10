module.exports = {
  en: {
    slogan: "An experimental, open-source CSS utility tool powered by data attributes.",
    features: [
      {
        title: "Powered by data attributes",
        content: [
          "Hydrogen uses custom data attributes as selectors. This enables complex and flexible customization while providing a legible, easy to learn syntax.",
          "The resulting CSS is namespaced to the library, preventing it from interfering with existing code."
        ]
      },
      {
        title: "Filtered and production ready",
        content: [
          "CSS libraries are huge, and that’s why Hydrogen is built with filtering at its core.",
          "Hydrogen scans your code while you work to produce a CSS file on the fly that contains only what you’ve used on your project, nothing more."
        ]
      },
      {
        title: "Configurable to your brand",
        content: [
          "Hydrogen offers a suite of options that not only allow you to modify core theme settings, but extend them to ensure the system scales to your brand.",
          "It thoughtfully applies constraints to the options you provide to ensure consistency and reuse."
        ]
      }
    ],
    otherFeatures: {
      title: "Other features",
      iconAlt: "A sticker icon of one of Hydrogen's adorable little mascots, Beep. Beep is a robot.",
      features: [
        {
          title: "We're proudly open-source",
          content: [
            "Hydrogen is primarily an experimental passion project, and it has only ever made sense to open-source the work for others to build upon and improve. Hydrogen is provided under an MIT license. If you’re curious about what’s under the hood, check out Hydrogen on Github."
          ],
          link: {
            label: "Visit Hydrogen on Github",
            title: "This link will take you to Hydrogen's Github page, where you can view the code, fork the code, and submit issues.",
            url: ""
          }
        },
        {
          title: "Have fun with states",
          content: [
            "Along with custom media queries, Hydrogen offers granular control over an element’s state through mutator values. Control things like color, space, and shadow by appending states to your media queries."
          ],
          link: {
            label: "Learn more about states",
            title: "",
            url: ""
          }
        },
        {
          title: "The comfort of dark mode",
          content: [
            "A new addition to Hydrogen, you can now use a :dark mutator on your media queries to specify styles that should only apply to a dark theme for your project. Dark mode supports both user preference and a class-based toggle."
          ],
          link: {
            label: "Learn more about dark mode",
            title: "",
            url: ""
          }
        }
      ]
    },
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
          code: "<p data-h2-bg-color=”b(primary)”>\n  Hello!\n</p>"
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
    properties: {
      title: "Find a property",
      iconAlt: "",
      titleLink: {
        label: "Visit the documentation",
        title: "",
        url: "/en/docs"
      }
    }
  },
  fr: {
    
  },
};