export type FiledValidatorType = (value: string) => string | undefined;

export const required: FiledValidatorType = (value) => {
  if (value) return undefined;
  return 'field is required';
};

export const maxLengthCreator =
  (maxLength: number): FiledValidatorType =>
  (value) => {
    if (value.length >= maxLength) return `max length is ${maxLength} symbols`;
    return undefined;
  };
