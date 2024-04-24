import PocketBase from 'pocketbase';

export const GET = async ({ redirect, cookies }) => {
    const pb = new PocketBase('https://makerly.pockethost.io/');

    await cookies.delete('name', { path: '/' })
    await cookies.delete('logged', { path: '/' })
    // Logout
    pb.authStore.clear();

    return redirect('/')
}