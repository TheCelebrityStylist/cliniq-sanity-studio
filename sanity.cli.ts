import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'jlnikrdc',
    dataset: 'production',
  },
  studioHost: 'cliniq-maastricht',
})
