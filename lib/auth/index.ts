import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function getSession() {
    return unstable_getServerSession(authOptions);
}