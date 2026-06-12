import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'album',
  title: 'Photo Albums',
  type: 'document',
  fields: [
    defineField({ name: 'titleNl', title: 'Title NL', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'titleEn', title: 'Title EN', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titleNl' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'descriptionNl', title: 'Description NL', type: 'text', rows: 4 }),
    defineField({ name: 'descriptionEn', title: 'Description EN', type: 'text', rows: 4 }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'photos', title: 'Photos', type: 'array', of: [
      {
        type: 'object',
        fields: [
          { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          { name: 'altNl', title: 'Alt Text NL', type: 'string' },
          { name: 'altEn', title: 'Alt Text EN', type: 'string' },
        ],
        preview: { select: { title: 'altNl', media: 'image' } },
      },
    ] }),
    defineField({ name: 'relatedEvent', title: 'Related Event', type: 'reference', to: [{ type: 'event' }] }),
    defineField({ name: 'published', title: 'Published', type: 'boolean', initialValue: true }),
    defineField({ name: 'seoTitleNl', title: 'SEO Title NL', type: 'string' }),
    defineField({ name: 'seoTitleEn', title: 'SEO Title EN', type: 'string' }),
    defineField({ name: 'seoDescriptionNl', title: 'SEO Description NL', type: 'text', rows: 3 }),
    defineField({ name: 'seoDescriptionEn', title: 'SEO Description EN', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'titleNl', subtitle: 'date', media: 'coverImage' } },
})
