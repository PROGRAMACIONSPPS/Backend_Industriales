"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditDestinoDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_destino_dto_1 = require("./create-destino.dto");
class EditDestinoDto extends mapped_types_1.PartialType(create_destino_dto_1.CreateDestinoDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditDestinoDto = EditDestinoDto;
//# sourceMappingURL=edit-destino.dto.js.map