export default {
  env: {
    development: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              esmodules: false
            },
            modules: false
          }
        ]
      ]
    },
    production: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              esmodules: false
            },
            modules: false
          }
        ],
        "minify"
      ],
      moduleId: "Accordion"
    }
  }
};
