import { useState, useCallback } from 'react';

export interface FormState<T> {
  data: T;
  errors: Partial<Record<keyof T, string>>;
  isSubmitting: boolean;
  isSuccess: boolean;
}

export const useForm = <T extends Record<string, any>>(
  initialData: T,
  validateFn?: (data: T) => Partial<Record<keyof T, string>>
) => {
  const [formState, setFormState] = useState<FormState<T>>({
    data: initialData,
    errors: {},
    isSubmitting: false,
    isSuccess: false,
  });

  const setValue = useCallback((field: keyof T, value: any) => {
    setFormState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [field]: value,
      },
      errors: {
        ...prev.errors,
        [field]: undefined,
      },
    }));
  }, []);

  const setError = useCallback((field: keyof T, error: string) => {
    setFormState(prev => ({
      ...prev,
      errors: {
        ...prev.errors,
        [field]: error,
      },
    }));
  }, []);

  const setErrors = useCallback((errors: Partial<Record<keyof T, string>>) => {
    setFormState(prev => ({
      ...prev,
      errors,
    }));
  }, []);

  const validate = useCallback(() => {
    if (!validateFn) return true;
    
    const errors = validateFn(formState.data);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formState.data, validateFn, setErrors]);

  const submit = useCallback(async (submitFn: (data: T) => Promise<void>) => {
    if (!validate()) return false;

    setFormState(prev => ({ ...prev, isSubmitting: true, isSuccess: false }));

    try {
      await submitFn(formState.data);
      setFormState(prev => ({ ...prev, isSubmitting: false, isSuccess: true }));
      return true;
    } catch (error) {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
      return false;
    }
  }, [formState.data, validate]);

  const reset = useCallback(() => {
    setFormState({
      data: initialData,
      errors: {},
      isSubmitting: false,
      isSuccess: false,
    });
  }, [initialData]);

  return {
    ...formState,
    setValue,
    setError,
    setErrors,
    validate,
    submit,
    reset,
  };
};
