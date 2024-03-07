To use Tailwindcss plugin for typography:
npm install -D @tailwindcss/typography

Add  require('@tailwindcss/typography'),
in tailwind.config.js file for plugins.

The official Tailwind CSS Typography plugin provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don’t control, like HTML rendered from Markdown, or pulled from a CMS.

Import created components, i.e. Navbar into layout.tsx to show on screen.
Create images folder in public folder.

npm i react-icons to use font Awesome in the project.

**Revalidation**

**IRS - Incremental Static Regeneration** - enables you to use static-generation on a per-page basis, without needing to rebuild the entire site. We can use it with and without fetch() request. Is used when using fetch() with headless content Management Service (CMS) like Wordpress.
Need to put revalidation variable to do so.

To see how IRS works we need to build and then to start the page.

**To generate secret token in Node**
In terminal type node;
require('crypto').randomBytes(16).toString('hex').
We can use renerated token in .env file as my-secret-token.