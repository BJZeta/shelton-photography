export default {
    name: "photo",
    title: "Photo",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: "mainImage",
        title: "Main image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    //   {
    //     name: "type",
    //     title: "Type",
    //     type: "array",
    //     of: [{ type: "reference", to: { type: "types" } }],
    //   },
      {
        name: "publishedAt",
        title: "Published at",
        type: "datetime",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
    ],
}