To start working - App folder/ page.tsx file to make changes.
page.tsx - like index.html to start new page.
type rfc (react functional component) for boilerplate. Its extension - ES7+ React/Redux/React-Native.
Layout.tsx page has layout for all pages. So if we add <nav></nav> element it will show in all pages of the app. Or we can import components into it as well.
We can have layout.tsx file for specific folders as well. Need to copy begining of the file and change the name of the function.
To add link in Navbar to link pages need to import Link component from next/link library into needed page.E.g. About folder/page.tsx.
To create new stylesheet for spesific folder - create styles.modules.css file in that folder.
To apply new css rules to all components in that folder need to import to layout.tsx file