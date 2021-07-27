"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditProvinciaDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_provincia_dto_1 = require("./create-provincia.dto");
class EditProvinciaDto extends mapped_types_1.PartialType(create_provincia_dto_1.CreateProvinciaDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditProvinciaDto = EditProvinciaDto;
//# sourceMappingURL=edit-provincia.dto.js.map