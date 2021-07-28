"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditTallerDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_taller_dto_1 = require("./create-taller.dto");
class EditTallerDto extends mapped_types_1.PartialType(create_taller_dto_1.CreateTallerDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditTallerDto = EditTallerDto;
//# sourceMappingURL=edit-taller.dto.js.map