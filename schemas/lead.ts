import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'lead',
  title: 'Leads / Form Submissions',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Contact', value: 'contact' },
          { title: 'Cocktail Workshop', value: 'workshop' },
          { title: 'Event Space', value: 'eventSpace' },
          { title: 'Job Application', value: 'job' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'new',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Handled', value: 'handled' },
        ],
      },
    }),
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'message', title: 'Message', type: 'text', rows: 5 }),
    defineField({ name: 'sourcePage', title: 'Source Page', type: 'string' }),
    defineField({ name: 'submittedAt', title: 'Submitted At', type: 'datetime' }),
    defineField({ name: 'payload', title: 'Full Payload', type: 'text', rows: 8 }),
    defineField({ name: 'internalNotes', title: 'Internal Notes', type: 'text', rows: 4 }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'email', type: 'type' },
    prepare({ title, subtitle, type }) {
      return { title: title || 'Lead', subtitle: `${type || 'lead'} · ${subtitle || ''}` }
    },
  },
})
