import { Elysia } from "elysia";

const app = new Elysia({
  aot: false,
  precompile: false,
});

app
  .get("/", () => "Hello Elysia")
  .get("/users", () => "List users handler")
  .get("/users/:id", () => "Single user handler")
  .post("/users", () => "Create user handler")
  .listen(process.env.PORT ?? 3000);

console.log(
  `Elysia worker ${process.pid} listening at ${app.server?.hostname}:${app.server?.port}`,
);
