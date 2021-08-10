"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditProductoDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_producto_dto_1 = require("./create-producto.dto");
class EditProductoDto extends mapped_types_1.PartialType(create_producto_dto_1.CreateProductoDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditProductoDto = EditProductoDto;
//# sourceMappingURL=edit-producto.dto.js.map