"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditDptoProvDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dpto_prov_dto_1 = require("./create-dpto-prov.dto");
class EditDptoProvDto extends mapped_types_1.PartialType(create_dpto_prov_dto_1.CreateDptoProvDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditDptoProvDto = EditDptoProvDto;
//# sourceMappingURL=edit-dpto-prov.dto.js.map