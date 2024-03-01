import PocketBase from 'pocketbase';

const pb = new PocketBase('https://makerly.pockethost.io/');

export const POST = async ({ request, redirect, cookies }) => {
    const data = await request.formData()

    try {
        const title = data.get('title')
        const desc = data.get('desc')
        const category = data.get('category')
        const duration = data.get('duration')
        const starred = 1
        const posted_by = cookies.get('logged', { path: '/' }).value
        const banner = data.get('banner')

        const formData = new FormData()

        formData.append('title', title)
        formData.append('description', desc)
        formData.append('posted_by', posted_by)
        formData.append('category', category)
        formData.append('duration', duration)
        formData.append('starred', starred)
        formData.append('banner', banner)
        const record = await pb.collection('films').create(formData);


        const { id } = record
        console.log(formData);

        return redirect(`/film/${id}`)
    } catch (e) {
        console.error(e.message);
        return redirect(`/create`)
    }
}

// (optional) send an email verification request