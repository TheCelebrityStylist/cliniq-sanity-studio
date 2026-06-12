import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Events / Agenda',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Event Title / DJ Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'date', title: 'Date', type: 'date', validation: (Rule) => Rule.required() }),
    defineField({ name: 'dj', title: 'DJ', type: 'reference', to: [{ type: 'dj' }] }),
    defineField({ name: 'eventType', title: 'Event Type', type: 'string', initialValue: 'regular', options: { list: [
      { title: 'Regular Club Night', value: 'regular' },
      { title: 'Featured Event', value: 'featured' },
      { title: 'Special Event', value: 'special' },
      { title: 'Private Event', value: 'private' },
    ] } }),
    defineField({ name: 'openingTime', title: 'Opening Time', type: 'string', initialValue: '22:00' }),
    defineField({ name: 'closingTime', title: 'Closing Time', type: 'string', initialValue: '03:00' }),
    defineField({ name: 'minimumAge', title: 'Minimum Age', type: 'string', initialValue: '21+' }),
    defineField({ name: 'published', title: 'Published', type: 'boolean', initialValue: true }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'showDetailPage', title: 'Show Detail Page / CTA', type: 'boolean', initialValue: false }),
    defineField({ name: 'eventImage', title: 'Event Image Override', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'descriptionNl', title: 'Description NL', type: 'text', rows: 4 }),
    defineField({ name: 'descriptionEn', title: 'Description EN', type: 'text', rows: 4 }),
    defineField({ name: 'ticketUrl', title: 'Ticket / Reservation URL', type: 'url' }),
    defineField({ name: 'album', title: 'Related Album', type: 'reference', to: [{ type: 'album' }] }),
  ],
  preview: {
    select: { title: 'title', date: 'date', media: 'eventImage' },
    prepare({ title, date, media }) { return { title, subtitle: date, media } },
  },
})
