"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TallerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const taller_entity_1 = require("./entities/taller.entity");
const taller_service_1 = require("./taller.service");
const taller_controller_1 = require("./taller.controller");
let TallerModule = class TallerModule {
};
TallerModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                taller_entity_1.TallerEntity
            ])
        ],
        providers: [taller_service_1.TallerService],
        controllers: [taller_controller_1.TallerController]
    })
], TallerModule);
exports.TallerModule = TallerModule;
//# sourceMappingURL=taller.module.js.map