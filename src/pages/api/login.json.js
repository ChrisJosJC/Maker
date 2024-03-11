import PocketBase from 'pocketbase';

const pb = new PocketBase('https://makerly.pockethost.io/');
export const POST = async ({ request, redirect, cookies }) => {
    const data = await request.formData()

    try {
        const email = data.get('e-mail')
        const password = data.get('password')
        const authData = await pb.collection('users').authWithPassword(
            email,
            password,
        );

        const id = authData.record.id
        const name = authData.record.name
        cookies.set('logged', id, { path: '/', maxAge: 60 * 60 * 24 * 60 });
        cookies.set('name', name, { path: '/', maxAge: 60 * 60 * 24 * 60 });

        return redirect('/dashboard')
    } catch (e) {
        console.log(e);
        return redirect('/login')
    }
}
