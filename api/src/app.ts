import config from "./_core/config";
import server from ".";

server.listen(config.appPort, () => {
  console.log(`Server Listening at ${config.appPort}`);
});
