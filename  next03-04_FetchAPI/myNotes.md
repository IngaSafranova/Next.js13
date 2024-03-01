1. To create a types file need to create types.d.ts file.
Create types that will be used. E.g. for users we copied user object and changes actual entries into data types.

2. To create routes to new endpoints need to create  new folder in the folder that we want to have endpoints for. E.g. in users folder for userId endpoints. Name the new folder the same as the props we will be sending in the [].Then create page.tsx file in [] folder.
3. To create fetch() functions need to create lib (library) folder and make files for each function.
4. By default, Next.js will cache as much as possible to improve performance and reduce cost. This means routes are statically rendered and data requests are cached unless you opt out.
5. If data changing constantely we need to say in our fetch request {cache: 'no-store'} to not cache.
6. If we want Next to check for changes and cache does changes we say in fetch() {next: {revalidate: 60}} number in seconds to check for new data.
7. SSG - Static Site Generation. We can put in fetch() revalidation so after generating the site and cache Next goes to check for changes.If data changed it will not show automaticaly, we need to refresh the page.
8. SSR - Server Side Rendering. If we know the data in advance as a props we can make SSR into SSG and page will be quicker.
ISR - Incremental Static Regeneration when initial data is cached and then at specified intervals Next checks for updates and when site is refreshed data is uptated.