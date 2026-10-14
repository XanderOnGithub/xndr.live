import type { SchemaContext } from 'astro:content';
import { z } from 'astro/zod';

export const projectSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    content: z.string().optional(),
    cover: image().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().optional(),
    publishedDate: z.date().optional(),
  });