"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCiudadDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ciudad_dto_1 = require("./create-ciudad.dto");
class EditCiudadDto extends mapped_types_1.PartialType(create_ciudad_dto_1.CreateCiudadDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditCiudadDto = EditCiudadDto;
//# sourceMappingURL=edit-ciudad.dto.js.map