'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export default async function deleteTodo(formData) {
    const id = parseInt(formData.get('id'), 10);

    if (isNaN(id)) {
        console.error("Invalid ID for deletion.");
        return { error: "Invalid ID" };
    }

    try {
        await prisma.todo.delete({
            where: { id },
        });
        revalidatePath('/');
        return { success: true };
    } catch (e) {
        console.error("Failed to delete todo:", e);
        return { error: "Database error" };
    }
}
