import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Stack,
  Textarea,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';

interface ContactFormProps {
  email: string;
  fullName: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormProps>();

  const onSubmit: SubmitHandler<ContactFormProps> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} mb={4}>
        <FormControl isInvalid={Boolean(errors.email)}>
          <FormLabel htmlFor="email">Correo Electronico</FormLabel>
          <Input
            id="email"
            type="email"
            {...register('email', {
              required: 'Este campo es obligatorio',
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.fullName)}>
          <FormLabel htmlFor="fullName">Nombre Completo</FormLabel>
          <Input
            id="fullName"
            {...register('fullName', {
              required: 'Este campo es obligatorio',
            })}
          />
          <FormErrorMessage>
            {errors.fullName && errors.fullName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.message)}>
          <FormLabel htmlFor="message">Mensaje</FormLabel>
          <Textarea
            id="message"
            {...register('message', {
              required: 'Este campo es obligatorio',
            })}
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <Button
        w={{ base: '100%', sm: 'auto' }}
        leftIcon={<Icon as={AiOutlineSend} />}
        colorScheme={'teal'}
        type="submit"
        isLoading={isSubmitting}
      >
        Enviar
      </Button>
    </form>
  );
};
export default ContactForm;
