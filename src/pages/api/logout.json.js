import PocketBase from 'pocketbase';

export const GET = async ({ redirect, cookies }) => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    await cookies.delete('name', { path: '/' })
    await cookies.delete('logged', { path: '/' })
    // Logout
    pb.authStore.clear();

    return redirect('/login')
}