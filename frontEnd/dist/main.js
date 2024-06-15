"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const moralis_1 = require("moralis");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const MORALIS_API_KEY = process.env.MORALIS_API_KEY;
    await moralis_1.default.start({
        apiKey: MORALIS_API_KEY,
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map