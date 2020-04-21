module.exports = function(config) {

  config.setBrowserSyncConfig({
    https: {
      key: '/Users/georgionani/local/localhost.key',
      cert: '/Users/georgionani/local/localhost.crt'
    }
  });
  
  config.addPassthroughCopy("src/js");
  return  {
    dir: {
      input: "./src",
      output: "dist",
      data: "_data"
    }
  };

};