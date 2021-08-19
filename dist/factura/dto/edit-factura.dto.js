"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditFacturaDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_factura_dto_1 = require("./create-factura.dto");
class EditFacturaDto extends mapped_types_1.PartialType(create_factura_dto_1.CreateFacturaDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditFacturaDto = EditFacturaDto;
//# sourceMappingURL=edit-factura.dto.js.map