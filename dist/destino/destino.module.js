"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const destino_entity_1 = require("./entities/destino.entity");
const destino_service_1 = require("./destino.service");
const destino_controller_1 = require("./destino.controller");
let DestinoModule = class DestinoModule {
};
DestinoModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                destino_entity_1.Destino
            ])
        ],
        providers: [destino_service_1.DestinoService],
        controllers: [destino_controller_1.DestinoController]
    })
], DestinoModule);
exports.DestinoModule = DestinoModule;
//# sourceMappingURL=destino.module.js.map