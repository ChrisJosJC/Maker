import PocketBase from 'pocketbase';

const pb = new PocketBase('https://makerly.pockethost.io/');


export const POST = async ({ request, redirect, cookies }) => {
    const data = await request.formData()

    try {
        const name = data.get('name')
        const email = data.get('e-mail')
        const password = data.get('password')
        const passwordConfirm = data.get('confirm-password')
        const username = data.get('username')
        const avatar = data.get('profile-file')

        const formData = new FormData()

        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('passwordConfirm', password)
        formData.append('username', username)
        formData.append('avatar', avatar)
        const record = await pb.collection('users').create(formData);

        // (optional) send an email verification request
        await pb.collection('users').requestVerification(email);

        const { id } = record
        cookies.set('logged', id, { path: '/', maxAge: 60 * 60 * 24 * 60 });
        cookies.set('name', username, { path: '/', maxAge: 60 * 60 * 24 * 60 });

        return redirect('/dashboard')
    } catch (err) {
        console.error(err);
        return redirect('/signup')
    }
}

// (optional) send an email verification request