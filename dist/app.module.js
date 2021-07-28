"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const usuario_module_1 = require("./usuario/usuario.module");
const typeorm_1 = require("@nestjs/typeorm");
const constants_1 = require("./config/constants");
const auth_module_1 = require("./auth/auth.module");
const sexo_module_1 = require("./sexo/sexo.module");
const destino_module_1 = require("./destino/destino.module");
const provincia_module_1 = require("./provincia/provincia.module");
const municipio_module_1 = require("./municipio/municipio.module");
const ciudad_module_1 = require("./ciudad/ciudad.module");
const departamento_provincial_module_1 = require("./departamento-provincial/departamento-provincial.module");
const taller_module_1 = require("./taller/taller.module");
const taller__no_spec_controller_1 = require("./taller--no-spec/taller--no-spec.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    type: 'mysql',
                    host: config.get(constants_1.DATABASE_HOST),
                    port: parseInt(config.get(constants_1.DATABASE_PORT), 10),
                    username: config.get(constants_1.DATABASE_USERNAME),
                    password: config.get(constants_1.DATABASE_PASSWORD),
                    database: config.get(constants_1.DATABASE_NAME),
                    entities: [__dirname + "./**/**/*.entity{.ts,.js}"],
                    autoLoadEntities: true,
                    synchronize: true,
                })
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env'
            }),
            usuario_module_1.UsuarioModule,
            auth_module_1.AuthModule,
            sexo_module_1.SexoModule,
            destino_module_1.DestinoModule,
            provincia_module_1.ProvinciaModule,
            municipio_module_1.MunicipioModule,
            ciudad_module_1.CiudadModule,
            departamento_provincial_module_1.DepartamentoProvincialModule,
            taller_module_1.TallerModule,
        ],
        controllers: [app_controller_1.AppController, taller__no_spec_controller_1.TallerNoSpecController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map