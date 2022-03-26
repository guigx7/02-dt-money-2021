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
          title: "Desenvolvimento de site",
          type: "deposit",
          category: "Freelance",
          amount: 1050,
          createdAt: new Date("2022-03-24"),
        },
        {
          id: 2,
          title: "Salário",
          type: "deposit",
          category: "Salário",
          amount: 2980.55,
          createdAt: new Date("2022-03-24"),
        },
        {
          id: 3,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1530.99,
          createdAt: new Date("2022-03-25"),
        },
        {
          id: 4,
          title: "Mercado",
          type: "withdraw",
          category: "Compras",
          amount: 558.45,
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
