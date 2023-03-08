import { defineField, defineType } from "sanity";

export default defineType({
  name: "role",
  title: "Role",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
