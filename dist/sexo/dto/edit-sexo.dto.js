"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditSexoDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sexo_dto_1 = require("./create-sexo.dto");
class EditSexoDto extends mapped_types_1.PartialType(create_sexo_dto_1.CreateSexoDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditSexoDto = EditSexoDto;
//# sourceMappingURL=edit-sexo.dto.js.map