'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export default async function addTodo(formData) {
    try {
        console.log('FormData:', formData);
        const title = formData.get('title');
        console.log('Title:', title);

        if (!title || typeof title !== 'string' || title.trim() === '') {
            return;
        }

        await prisma.todo.create({ data: { title: title.trim() } });

        // Revalidate the home path so the new todo shows up immediately
        revalidatePath('/');

    } catch (e) {
        console.error('Failed to add todo:', e);
    }
}
