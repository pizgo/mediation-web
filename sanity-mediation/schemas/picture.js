export default {
    name: 'picture',
    title: 'picture',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'title',
            type: 'string',
        },
        {
            name: 'picture',
            title: 'zdjecie',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],

}
