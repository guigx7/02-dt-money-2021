import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Test",
          type: "deposit",
          category: "test",
          amount: 1000,
          createdAt: new Date("2022-03-24"),
        },
        {
          id: 2,
          title: "Test2",
          type: "deposit",
          category: "test2",
          amount: 3000,
          createdAt: new Date("2022-03-24"),
        },
        {
          id: 3,
          title: "Test3",
          type: "withdraw",
          category: "test3",
          amount: 2500,
          createdAt: new Date("2022-03-25"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
