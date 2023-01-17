import Fastify from "fastify";
import { PrismaClient } from "@prisma/client"

const app = Fastify();
const prisma = new PrismaClient();

app.get("/", async () => {
    const habits = await prisma.habit.findMany({
        where: {
             title: { 
                startsWith: 'Correr'
             }
        }
    })

    return habits

})

app.listen({
    port: 3333 // fazemos nossa aplicação escutar a porta 3333
}).then(() => {
    console.log("Ta rodando essa bagaça")
})
