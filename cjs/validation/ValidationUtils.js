"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationUtils = exports.constraintToString = void 0;
/**
 * Convert the constraint to a string to be shown in an error
 */
function constraintToString(constraint) {
    if (Array.isArray(constraint)) {
        return constraint.join(', ');
    }
    return `${constraint}`;
}
exports.constraintToString = constraintToString;
class ValidationUtils {
    static replaceMessageSpecialTokens(message, validationArguments) {
        let result = {
            property: validationArguments.property,
            target: validationArguments.targetName,
            value: validationArguments.value
        };
        if (validationArguments.constraints instanceof Array) {
            validationArguments.constraints.forEach((constraint, index) => {
                result[`constraint${index + 1}`] = constraintToString(constraint);
            });
        }
        return result;
    }
}
exports.ValidationUtils = ValidationUtils;
//# sourceMappingURL=ValidationUtils.js.map