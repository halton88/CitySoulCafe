// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'Documents',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
  {
    name: 'Event',
    title: 'Event',
    type: "document",
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date'
      },
      {
        name: 'featured',
        title: 'Featured',
        type: 'boolean',
      },
      {
        name: 'type',
        title: 'Type',
        type: 'arry',
        of: [
          {
            title:'DJ Supreme',
            name: 'Supreme',
            type: 'string',
          },
          {
            title:'Business Mixer',
            name: 'Mixer',
            type: 'string',
          },
          {
            title:'Local Feature',
            name: 'Feature',
            type: 'string',
          }
        ]
      }
    ]
  },
  {
    name: 'Content',
    title: 'Content',
    type: "document",
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'body',
        title: 'Body',
        type: "array",
        of: [
          {
            type: 'block'
          }
        ]
      },
      {
        name: 'featured',
        title: 'Featured',
        type: 'boolean',
      }
    ]
  }
  ])
})
