
export class ValidatorsExtend {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config: any = {
            required: 'Campo obbligatorio.',
            minlength: `Lunghezza minima (${validatorValue.requiredLength} caratteri)`,
            maxlength: `Supera la lunghezza massima (${validatorValue.requiredLength} caratteri)`,
            max: `Supera il valore massimo a ${validatorValue.max}`,
            min: `Il valore minimo è ${validatorValue.min}`,
        };
        return config[validatorName];
    }
}