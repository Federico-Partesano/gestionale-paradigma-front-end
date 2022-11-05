/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-return */
const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const packages = [];
packages.push(path.join(__dirname, "../components"));
packages.push(path.join(__dirname, "../shared"));

module.exports = {
    webpack: {
        configure: (webpackConfig, _arg) => {
            const { isFound, match } = getLoader(
                webpackConfig,
                loaderByName("babel-loader")
            );
            if (isFound) {
                const include = Array.isArray(match.loader.include)
                    ? match.loader.include
                    : [match.loader.include];

                match.loader.include = include.concat(packages);
            }

            return webpackConfig;
        },
    },
};
