export default {
    name: 'picture',
    title: 'Picture',
    type: 'document',
    fields: [
        {
            name: 'aboutMeImgTitle',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'aboutMeImg',
            title: 'About Me Img',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],

}
