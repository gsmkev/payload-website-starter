import { Field } from 'payload'

export const searchFields: Field[] = [
  {
    name: 'slug',
    type: 'text',
    index: true,
    admin: {
      readOnly: true,
    },
    label: {
      en: 'Slug',
      es: 'Ruta',
    },
  },
  {
    name: 'meta',
    label: 'Meta',
    type: 'group',
    index: true,
    admin: {
      readOnly: true,
    },
    fields: [
      {
        type: 'text',
        name: 'title',
        label: {
          en: 'Title',
          es: 'Título',
        },
      },
      {
        type: 'text',
        name: 'description',
        label: {
          en: 'Description',
          es: 'Descripción',
        },
      },
      {
        name: 'image',
        label: {
          en: 'Image',
          es: 'Imagen',
        },
        type: 'upload',
        relationTo: 'media',
      },
    ],
  },
  {
    label: {
      en: 'Categories',
      es: 'Categorías',
    },
    name: 'categories',
    type: 'array',
    admin: {
      readOnly: true,
    },
    fields: [
      {
        name: 'relationTo',
        type: 'text',
        label: {
          en: 'Relation To',
          es: 'Relación a',
        },
      },
      {
        name: 'id',
        type: 'text',
        label: {
          en: 'ID',
          es: 'ID',
        },
      },
      {
        name: 'title',
        type: 'text',
        label: {
          en: 'Title',
          es: 'Título',
        },
      },
    ],
  },
]
