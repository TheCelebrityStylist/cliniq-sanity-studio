import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dj',
  title: 'DJs',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'DJ Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'aliases', title: 'Aliases', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'image', title: 'Default DJ Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'active', title: 'Active', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { title: 'name', media: 'image' } },
})
