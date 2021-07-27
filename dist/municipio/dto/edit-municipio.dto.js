"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditMunicipioDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_municipio_dto_1 = require("./create-municipio.dto");
class EditMunicipioDto extends mapped_types_1.PartialType(create_municipio_dto_1.CreateMunicipioDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditMunicipioDto = EditMunicipioDto;
//# sourceMappingURL=edit-municipio.dto.js.map