module.exports = {
    "stories": [
        "../src/**/stories/*.@(js|jsx)",
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-viewport",
        '@storybook/addon-storysource'
    ],
    webpackFinal: async config => {
        // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
        config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
        // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
        config.module.rules[0].use[0].loader = require.resolve("babel-loader")
        // use @babel/preset-react for JSX and env (instead of staged presets)
        config.module.rules[0].use[0].options.presets = [
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-env"),
        ]
        config.module.rules[0].use[0].options.plugins = [
            // use @babel/plugin-proposal-class-properties for class arrow functions
            require.resolve("@babel/plugin-proposal-class-properties"),
            // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
            require.resolve("babel-plugin-remove-graphql-queries"),
        ]

        config.module.rules.unshift({
            test: /\.module\.(c|sc)ss$/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                        modules: true,
                        camelCase: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]',
                    },
                },
                require.resolve('sass-loader'),
            ]
        });

        // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
        config.resolve.mainFields = ["browser", "module", "main"];

        console.log(config.module.rules);

        return config;
    }
}