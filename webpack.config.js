const path = require( 'path' );

module.exports = {

    // bundling mode
    mode: 'development',

    // entry files
    entry: './src/index.ts',

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'pulsar.js',
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    // source map
    devtool: 'source-map',

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
};
