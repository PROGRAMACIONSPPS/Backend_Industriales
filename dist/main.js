"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        disableErrorMessages: false,
        validationError: {
            value: false,
        },
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Servidor de la Dirección de Cuerpo Penitenciario')
        .setDescription('Descripción de la API Cuerpo')
        .setVersion('1.0')
        .addTag('cuerpo')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    await app.listen(3000);
    const logger = new common_1.Logger();
    logger.log(`corriendo el servidor ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map