export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      description: 'Summary of project',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      description: 'Technologies used',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    },
    {
      name: 'image',
      title: 'Image',
      description: 'Image of experience',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
