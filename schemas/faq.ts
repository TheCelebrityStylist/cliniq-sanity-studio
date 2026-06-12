import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({ name: 'pageKey', title: 'Page', type: 'string', options: { list: [
      { title: 'Homepage', value: 'homepage' },
      { title: 'Uitgaan', value: 'uitgaan' },
      { title: 'Cocktail Workshop', value: 'cocktailWorkshop' },
      { title: 'Event Space', value: 'eventSpace' },
      { title: 'Contact', value: 'contact' },
      { title: 'Vacatures', value: 'vacatures' },
      { title: 'House Rules', value: 'houseRules' },
    ] }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'questionNl', title: 'Question NL', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'questionEn', title: 'Question EN', type: 'string' }),
    defineField({ name: 'answerNl', title: 'Answer NL', type: 'text', rows: 5, validation: (Rule) => Rule.required() }),
    defineField({ name: 'answerEn', title: 'Answer EN', type: 'text', rows: 5 }),
    defineField({ name: 'order', title: 'Order', type: 'number', initialValue: 0 }),
    defineField({ name: 'published', title: 'Published', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { title: 'questionNl', subtitle: 'pageKey' } },
})
