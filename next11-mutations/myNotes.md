To start the project first start the terminal for database.
**npx json-server -w db.json -p 3500 -h 127.0.0.1

Then open second terminal to run the app.

Todo list updates straight away because of  router.refresh() in individual components files.

For changes to be seen straight away between different routes we need to put prefetch={false} into Link components as otherwise they are prefetched and do not show the changes.