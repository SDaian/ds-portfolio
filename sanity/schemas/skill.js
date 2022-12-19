export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      description: 'Image of skill',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
};
