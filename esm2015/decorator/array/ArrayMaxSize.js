import { buildMessage, ValidateBy } from '../common/ValidateBy';
export const ARRAY_MAX_SIZE = 'arrayMaxSize';
/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
export function arrayMaxSize(array, max) {
    return array instanceof Array && array.length <= max;
}
/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
export function ArrayMaxSize(max, validationOptions) {
    return ValidateBy({
        name: ARRAY_MAX_SIZE,
        constraints: [max],
        validator: {
            validate: (value, args) => arrayMaxSize(value, args.constraints[0]),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property must contain not more than $constraint1 elements', validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=ArrayMaxSize.js.map