import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
export const POST = async ({ request, redirect, cookies }) => {
    const data = await request.formData()

    try {
        const email = data.get('e-mail')
        const password = data.get('password')
        const authData = await pb.collection('users').authWithPassword(
            email,
            password,
        );
        const { id } = pb.authStore.model
        const name = authData.record.name
        cookies.set('logged', id, { path: '/' });
        cookies.set('name', name, { path: '/' });

        return redirect('/')
    } catch (e) {
        console.log(e);
        return redirect('/login')
    }
}
