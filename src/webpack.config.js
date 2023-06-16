module.exports = {
    // ... autres configurations webpack
  
    module: {
      rules: [
        // ... autres règles de configuration
  
        // Règle pour les fichiers JS/JSX
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
        },
      ],
    },
  };
  