import z from 'zod';

export const zodSchema = z.object({
  // uf: z.string().min(1, 'Selecione um estado'),
  location: z.string().optional(),
  renavam: z.string().min(1, 'Renavam é obrigatório'),
  plate: z.string().min(1, 'Placa é obrigatória'),
});

export type BodyProtocol = z.infer<typeof zodSchema>;
