module.exports = {
  apps : [{
    name: 'MainApp',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // args: 'one two',
    instances: 1,
    autorestart: true,
    //watch: false,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '168.63.148.223',
      ref  : 'origin/master',
      repo : 'git@github.com:anhvandev/web_003.git',
      path : '/home/fb.toolvi.tk/public_html',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    development : {
      user : 'node',
      host : '168.63.148.223',
      ref  : 'origin/master',
      repo : 'git@github.com:anhvandev/web_003.git',
      path : '/home/fb.toolvi.tk/public_html',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
