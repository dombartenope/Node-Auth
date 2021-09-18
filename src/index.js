import { fastify } from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import { fileURLToPath } from 'url';

//ESM specific feature
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = fastify();

async function startApp() {
    try {

        app.register(fastifyStatic, {
            root: path.join(__dirname, "public"),
        })
        
        app.get('/', {}, (request, reply) => {
            reply.send({
                data: "Hello World",
            })
        })

        await app.listen(8000);
        console.log('Server listening on port 8000')

    } catch (e) {

        console.error(e);

    }
}

startApp();