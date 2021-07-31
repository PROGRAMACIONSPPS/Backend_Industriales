"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleModule = void 0;
const common_1 = require("@nestjs/common");
const detalle_service_1 = require("./detalle.service");
const detalle_controller_1 = require("./detalle.controller");
const typeorm_1 = require("@nestjs/typeorm");
const detalle_entity_1 = require("./entities/detalle.entity");
let DetalleModule = class DetalleModule {
};
DetalleModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                detalle_entity_1.Detalle
            ])
        ],
        providers: [detalle_service_1.DetalleService],
        controllers: [detalle_controller_1.DetalleController]
    })
], DetalleModule);
exports.DetalleModule = DetalleModule;
//# sourceMappingURL=detalle.module.js.map