module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://10.28.4.130:8080',
        changeOrigin: true
      },
    }
  }
}
