"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentoProvincialModule = void 0;
const common_1 = require("@nestjs/common");
const departamento_provincial_service_1 = require("./departamento-provincial.service");
const departamento_provincial_controller_1 = require("./departamento-provincial.controller");
const typeorm_1 = require("@nestjs/typeorm");
const dpto_prov_entity_1 = require("./entity/dpto-prov.entity");
let DepartamentoProvincialModule = class DepartamentoProvincialModule {
};
DepartamentoProvincialModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                dpto_prov_entity_1.DepartamentoProvincial
            ])
        ],
        providers: [departamento_provincial_service_1.DepartamentoProvincialService],
        controllers: [departamento_provincial_controller_1.DepartamentoProvincialController]
    })
], DepartamentoProvincialModule);
exports.DepartamentoProvincialModule = DepartamentoProvincialModule;
//# sourceMappingURL=departamento-provincial.module.js.map