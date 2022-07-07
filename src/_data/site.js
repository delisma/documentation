module.exports = {
  buildTime: new Date(),
  baseUrl: 'https://hydrogen.design',
  name: 'Hydrogen',
  languages: [
    {
      label: 'EN',
      code: 'en',
    },
    {
      label: 'FR',
      code: 'fr',
    },
  ],
  en: {
    metaTitle: 'Title in english',
    metaDescription: 'Description in english',
    postNames: {
      overview: 'overview',
      configuration: 'configuration',
      attributes: 'attributes',
    },
    updateLabels: {
      version: 'Version:',
      breaking: 'Breaking changes',
      features: 'New features',
      optimizations: 'Optimizations',
      bugfixes: 'Bugfixes',
    },
  },
  fr: {
    metaTitle: 'Titre en français',
    metaDescription: 'Description en français',
    postNames: {
      overview: 'aperçu',
      configuration: 'configuration',
      attributes: 'attributs',
    },
    updateLabels: {
      version: 'Version :',
      breaking: 'Les modifications de rupture',
      features: 'Nouvelles fonctionnalités',
      optimizations: 'Optimisations',
      bugfixes: 'Corrections de bogues',
    },
  },
};
