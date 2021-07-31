"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditDetalleDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_detalle_dto_1 = require("./create-detalle.dto");
class EditDetalleDto extends mapped_types_1.PartialType(create_detalle_dto_1.CreateDetalleDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditDetalleDto = EditDetalleDto;
//# sourceMappingURL=edit-detalle.dto.js.map