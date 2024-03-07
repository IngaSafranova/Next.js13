import Posts from "./components/Posts";

//set time for revalidation of the page.
//! in real live projects usuallly is put 86400 - the day in seconds.
export const revalidate = 10

export default function Home() {
  return (
    <main className="px-6 mx-auto text-white">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👏&nbsp;
        <span className="whitespace-nowrap ">
          I am <span className="font-bold">Inga</span>
        </span>
      </p>
      <Posts/>
    </main>
  );
}
