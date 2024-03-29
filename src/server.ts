import { app } from "./app";

import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data source initialization", err);
  });
  app.listen(process.env.PORT || 3001, () => {
    console.log("Rodando");
  });
})();
