"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
class EditUserDto extends mapped_types_1.PartialType(create_user_dto_1.CreateUserDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditUserDto = EditUserDto;
//# sourceMappingURL=edit-user.dto.js.map