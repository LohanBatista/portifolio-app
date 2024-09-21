module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@screens": "./src/screens",
            "@hooks": "./src/hooks",
            "@utils": "./src/utils",
            "@components": "./src/components",
          },
        },
      ],
    ],
  };
};
