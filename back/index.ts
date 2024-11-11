import fastify from "fastify";

const app = fastify();

app.get("/", async () => "SERVER");

const PORT = 5000


app.listen({port:Number(PORT)}, (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`SERVE ON ${PORT}`)
})