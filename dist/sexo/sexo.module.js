"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SexoModule = void 0;
const common_1 = require("@nestjs/common");
const sexo_entity_1 = require("./entities/sexo.entity");
const typeorm_1 = require("@nestjs/typeorm");
const sexo_service_1 = require("./sexo.service");
const sexo_controller_1 = require("./sexo.controller");
let SexoModule = class SexoModule {
};
SexoModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                sexo_entity_1.Sexo
            ])
        ],
        providers: [sexo_service_1.SexoService],
        controllers: [sexo_controller_1.SexoController]
    })
], SexoModule);
exports.SexoModule = SexoModule;
//# sourceMappingURL=sexo.module.js.map