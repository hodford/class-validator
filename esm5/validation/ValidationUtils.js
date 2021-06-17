/**
 * Convert the constraint to a string to be shown in an error
 */
export function constraintToString(constraint) {
    if (Array.isArray(constraint)) {
        return constraint.join(', ');
    }
    return "" + constraint;
}
var ValidationUtils = /** @class */ (function () {
    function ValidationUtils() {
    }
    ValidationUtils.replaceMessageSpecialTokens = function (message, validationArguments) {
        var result = {
            property: validationArguments.property,
            target: validationArguments.targetName,
            value: validationArguments.value
        };
        if (validationArguments.constraints instanceof Array) {
            validationArguments.constraints.forEach(function (constraint, index) {
                result["constraint" + (index + 1)] = constraintToString(constraint);
            });
        }
        return result;
    };
    return ValidationUtils;
}());
export { ValidationUtils };
//# sourceMappingURL=ValidationUtils.js.map