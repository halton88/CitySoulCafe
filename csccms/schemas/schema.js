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
        name: 'image',
        title: 'Feature Image',
        type: 'image',
      },
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
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'featured',
        title: 'Featured',
        type: 'boolean',
      },
    ]
  },
  // {
  //   name: 'Content',
  //   title: 'Content',
  //   type: "document",
  //   fields: [
  //     {
  //       name: 'title',
  //       title: 'Title',
  //       type: 'string',
  //     },
  //     {
  //       name: 'body',
  //       title: 'Body',
  //       type: "array",
  //       of: [
  //         {
  //           type: 'block'
  //         }
  //       ]
  //     },
  //     {
  //       name: 'featured',
  //       title: 'Featured',
  //       type: 'boolean',
  //     }
  //   ]
  // },
  {
    title: 'Team Member',
    name: 'team_member',
    type: "document",
    fields: [
      {
        name: 'Image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'primary_title',
        title: 'Primary Title',
        type: 'string',
      },
      {
        name: 'secondary_title',
        title: 'Secondary Title',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'email',
      },
      {
        name: 'facebook',
        title: 'Facebook Link',
        type: 'string',
      },
      {
        name: 'instagram',
        title: 'Instagram Link',
        type: 'string',
      },
      {
        name: 'twitter',
        title: 'Twitter',
        type: 'string',
      }
    ],
  }
  ])
})
