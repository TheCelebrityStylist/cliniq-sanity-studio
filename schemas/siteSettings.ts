import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Site Title', type: 'string', initialValue: 'CLINIQ Maastricht' }),
    defineField({ name: 'address', title: 'Address', type: 'string', initialValue: 'Platielstraat 9A, Maastricht' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'tiktokUrl', title: 'TikTok URL', type: 'url' }),
    defineField({ name: 'lockerUrl', title: 'Locker URL', type: 'url', initialValue: 'https://cliniq.elockers.shop/cliniq/lockers' }),
    defineField({ name: 'defaultSeoTitleNl', title: 'Default SEO Title NL', type: 'string' }),
    defineField({ name: 'defaultSeoTitleEn', title: 'Default SEO Title EN', type: 'string' }),
    defineField({ name: 'defaultSeoDescriptionNl', title: 'Default SEO Description NL', type: 'text', rows: 3 }),
    defineField({ name: 'defaultSeoDescriptionEn', title: 'Default SEO Description EN', type: 'text', rows: 3 }),
    defineField({ name: 'defaultOgImage', title: 'Default Social Share Image', type: 'image', options: { hotspot: true } }),
  ],
  preview: { select: { title: 'title', subtitle: 'address' } },
})
