module.exports = {
  apps: [
    {
      name: 'mihu_cms_api',
      script: './src/main.js',
      cwd: './',
      watch: true,
      ignore_watch: ['logs', 'node_modules', 'src/public'],
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
