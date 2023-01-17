import Fastify from "fastify";

const app = Fastify();

app.get("/", () => {
    return "Hello World"
})

app.listen({
    port: 3333 // fazemos nossa aplicação escutar a porta 3333
}).then(() => {
    console.log("Ta rodando essa bagaça")
})

