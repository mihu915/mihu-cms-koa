module.exports = {
  apps: [
    {
      name: 't-mihu-cms-api',
      script: './src/main.js',
      cwd: './',
      watch: true,
      ignore_watch: ['logs', 'src/public'],
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
