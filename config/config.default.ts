import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582809694067_9328';

  // add your egg config in here
  config.middleware = [];

  // config.mongoose = {
  //   url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1/egg-demo',
  //   options: {},
  // };

  config.cluster = {
    listen: {
      path: '',
      port: 8989,
      hostname: '0.0.0.0',
    },
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
