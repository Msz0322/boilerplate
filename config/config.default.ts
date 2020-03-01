import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582809694067_9328'

  // add your egg config in here
  config.middleware = ['graphql']

  config.cluster = {
    listen: {
      path: '',
      port: 8989,
      hostname: '0.0.0.0'
    }
  }

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/peki',
      options: {}
      // mongoose global plugins, expected a function or an array of function and options
      // plugins: [ createdPlugin, [ updatedPlugin, pluginOptions ]],
    }
  }

  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true,
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  }
}
