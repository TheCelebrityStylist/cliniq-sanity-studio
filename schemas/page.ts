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

const cardFields = [
  defineField({ name: 'titleNl', title: 'Title NL', type: 'string' }),
  defineField({ name: 'titleEn', title: 'Title EN', type: 'string' }),
  defineField({ name: 'textNl', title: 'Text NL', type: 'text', rows: 3 }),
  defineField({ name: 'textEn', title: 'Text EN', type: 'text', rows: 3 }),
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

    defineField({ name: 'bodyEyebrowNl', title: 'Body section eyebrow NL', type: 'string' }),
    defineField({ name: 'bodyEyebrowEn', title: 'Body section eyebrow EN', type: 'string' }),
    defineField({ name: 'bodyTitleNl', title: 'Body section title NL', type: 'string' }),
    defineField({ name: 'bodyTitleEn', title: 'Body section title EN', type: 'string' }),
    defineField({ name: 'bodyNl', title: 'Main SEO/body text NL', type: 'text', rows: 8 }),
    defineField({ name: 'bodyEn', title: 'Main SEO/body text EN', type: 'text', rows: 8 }),

    defineField({
      name: 'practicalCards',
      title: 'Practical cards',
      type: 'array',
      of: [{ type: 'object', fields: cardFields }],
    }),

    defineField({
      name: 'eventTypeCards',
      title: 'Event type cards',
      type: 'array',
      of: [{ type: 'object', fields: cardFields }],
    }),

    defineField({ name: 'facilityEyebrowNl', title: 'Facilities eyebrow NL', type: 'string' }),
    defineField({ name: 'facilityEyebrowEn', title: 'Facilities eyebrow EN', type: 'string' }),
    defineField({ name: 'facilityTitleNl', title: 'Facilities title NL', type: 'string' }),
    defineField({ name: 'facilityTitleEn', title: 'Facilities title EN', type: 'string' }),
    defineField({ name: 'facilityIntroNl', title: 'Facilities intro NL', type: 'text', rows: 3 }),
    defineField({ name: 'facilityIntroEn', title: 'Facilities intro EN', type: 'text', rows: 3 }),
    defineField({
      name: 'facilityCards',
      title: 'Facility cards',
      type: 'array',
      of: [{ type: 'object', fields: cardFields }],
    }),

    defineField({ name: 'extraEyebrowNl', title: 'Extra section eyebrow NL', type: 'string' }),
    defineField({ name: 'extraEyebrowEn', title: 'Extra section eyebrow EN', type: 'string' }),
    defineField({ name: 'extraTitleNl', title: 'Extra section title NL', type: 'string' }),
    defineField({ name: 'extraTitleEn', title: 'Extra section title EN', type: 'string' }),
    defineField({ name: 'extraIntroNl', title: 'Extra section intro NL', type: 'text', rows: 3 }),
    defineField({ name: 'extraIntroEn', title: 'Extra section intro EN', type: 'text', rows: 3 }),
    defineField({ name: 'extraBodyNl', title: 'Extra section body NL', type: 'text', rows: 8 }),
    defineField({ name: 'extraBodyEn', title: 'Extra section body EN', type: 'text', rows: 8 }),

    defineField({ name: 'requestEyebrowNl', title: 'Request section eyebrow NL', type: 'string' }),
    defineField({ name: 'requestEyebrowEn', title: 'Request section eyebrow EN', type: 'string' }),
    defineField({ name: 'requestTitleNl', title: 'Request section title NL', type: 'string' }),
    defineField({ name: 'requestTitleEn', title: 'Request section title EN', type: 'string' }),
    defineField({ name: 'requestIntroNl', title: 'Request section intro NL', type: 'text', rows: 3 }),
    defineField({ name: 'requestIntroEn', title: 'Request section intro EN', type: 'text', rows: 3 }),

    defineField({ name: 'galleryEyebrowNl', title: 'Gallery section eyebrow NL', type: 'string' }),
    defineField({ name: 'galleryEyebrowEn', title: 'Gallery section eyebrow EN', type: 'string' }),
    defineField({ name: 'galleryTitleNl', title: 'Gallery section title NL', type: 'string' }),
    defineField({ name: 'galleryTitleEn', title: 'Gallery section title EN', type: 'string' }),

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
    select: { title: 'title', subtitle: 'pageKey', media: 'heroImage' },
  },
})
