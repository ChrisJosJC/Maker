import PocketBase from 'pocketbase';
export const prerender = false;
const pb = new PocketBase('https://makerly.pockethost.io/');

export const DELETE = async ({ params, redirect }) => {
    try {
        const ID = params.ID

        await pb.collection('films').delete(ID);
        return new Response(JSON.stringify({
            code: 200
        }))
    } catch (e) {
        console.log(e);
        return new Response(JSON.stringify({
            code: e.status
        }))
    }
}

export const POST = async ({ params, redirect, request, cookies }) => {
    try {
        const data = await request.formData()

        const ID = params.ID
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

        const record = await pb.collection('films').update(ID, formData);

        return redirect(`/film/${ID}`)
    } catch (e) {
        console.log(e);
        return new Response(JSON.stringify({
            code: "404",
            message: "WHYYYY!?"
        }))
    }
}

