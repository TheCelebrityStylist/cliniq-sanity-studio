import { defineField, defineType } from 'sanity'

const pageKeys = [
  { title: 'Homepage', value: 'homepage' },
  { title: 'Uitgaan', value: 'uitgaan' },
  { title: 'Cocktail Workshop', value: 'cocktailWorkshop' },
  { title: 'Ruimte Huren', value: 'eventSpace' },
  { title: 'Contact', value: 'contact' },
  { title: 'Vacatures', value: 'vacatures' },
  { title: 'House Rules', value: 'houseRules' },
  { title: "Foto's", value: 'fotos' },
]

export default defineType({
  name: 'page',
  title: 'Website Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Internal page name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'pageKey', title: 'Page', type: 'string', options: { list: pageKeys, layout: 'dropdown' }, validation: (Rule) => Rule.required() }),

    defineField({ name: 'headlineNl', title: 'Hero headline NL', type: 'string' }),
    defineField({ name: 'headlineEn', title: 'Hero headline EN', type: 'string' }),
    defineField({ name: 'introNl', title: 'Hero intro NL', type: 'text', rows: 3 }),
    defineField({ name: 'introEn', title: 'Hero intro EN', type: 'text', rows: 3 }),

    defineField({ name: 'primaryButtonNl', title: 'Primary button NL', type: 'string' }),
    defineField({ name: 'primaryButtonEn', title: 'Primary button EN', type: 'string' }),
    defineField({ name: 'secondaryButtonNl', title: 'Secondary button NL', type: 'string' }),
    defineField({ name: 'secondaryButtonEn', title: 'Secondary button EN', type: 'string' }),

    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'galleryImages', title: 'Gallery / carousel images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),

    defineField({ name: 'bodyNl', title: 'SEO/body text NL', type: 'text', rows: 8 }),
    defineField({ name: 'bodyEn', title: 'SEO/body text EN', type: 'text', rows: 8 }),

    defineField({ name: 'seoTitleNl', title: 'SEO title NL', type: 'string' }),
    defineField({ name: 'seoTitleEn', title: 'SEO title EN', type: 'string' }),
    defineField({ name: 'seoDescriptionNl', title: 'SEO description NL', type: 'text', rows: 3 }),
    defineField({ name: 'seoDescriptionEn', title: 'SEO description EN', type: 'text', rows: 3 }),
    defineField({ name: 'ogTitleNl', title: 'Open Graph title NL', type: 'string' }),
    defineField({ name: 'ogTitleEn', title: 'Open Graph title EN', type: 'string' }),
    defineField({ name: 'ogDescriptionNl', title: 'Open Graph description NL', type: 'text', rows: 3 }),
    defineField({ name: 'ogDescriptionEn', title: 'Open Graph description EN', type: 'text', rows: 3 }),
    defineField({ name: 'ogImage', title: 'Open Graph image', type: 'image', options: { hotspot: true } }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pageKey',
      media: 'heroImage',
    },
  },
})
