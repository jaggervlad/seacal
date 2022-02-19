import { FC, useRef, useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';

interface IFormData {
  email: string;
  message: string;
}

const FormErrorMessage = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mt-1">
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <span className="dark:text-red-300 text-red-600 text-sm">
            {message}
          </span>
        )}
      />
    </div>
  );
};

const ContactForm: FC = () => {
  const [serverErrors, setServerErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const methods = useForm<IFormData>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const reRef = useRef<ReCAPTCHA>();

  const submit: SubmitHandler<IFormData> = async (formData) => {
    const token = await reRef.current.executeAsync();
    reRef.current.reset();

    const response = await fetch('/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        message: formData.message,
        token,
      }),
    });
    const data = await response.json();

    if (data.errors) {
      setServerErrors(data.errors);
    } else {
      reset();
      toast('Mensaje creado correctamente!');
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="grid grid-cols-1 gap-y-6"
        onSubmit={handleSubmit(submit)}
      >
        {serverErrors.length > 0 && (
          <div className="text-center">
            {serverErrors.map((error) => (
              <p key={error} className="text-red-700 dark:text-red-500">
                {error}
              </p>
            ))}
          </div>
        )}
        {successMessage && (
          <div className="text-center">
            <p className="text-black dark:text-white text-lg font-bold">
              {successMessage}
            </p>
          </div>
        )}
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={reRef}
        />
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            {...register('email', {
              required: 'Campo obligatorio',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Ingresa un correo valido',
              },
            })}
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            className="
          block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-cyan-500 
          focus:border-cyan-500 border-slate-300 rounded-md dark:bg-slate-900 text-slate-900 dark:text-slate-100
          "
            placeholder="Correo Electrónico"
          />
          <FormErrorMessage name="email" />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            {...register('message', { required: 'Campo obligatorio' })}
            id="message"
            name="message"
            rows={4}
            className="
          block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-cyan-500 focus:border-cyan-500 
          border border-slate-300 rounded-md dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            placeholder="Dejame tu mensaje"
            defaultValue={''}
          />
          <FormErrorMessage name="message" />
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="
          inline-flex justify-center py-3 px-6 border border-transparent shadow-lg shadow-cyan-500/50 
          text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none 
          focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:shadow-cyan-500/30 
          transform hover:scale-[1.05] transition-all
          "
          >
            Enviar
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
