import Emptyboard from "./maincomponent/Emptyboard";

// board get cols
function Main() {
  let col = 0;
  return col === 0 ?
   (
    <main className="w-full min-h-full">
        <Emptyboard />
    </main>
  ) : (
    <main>
        <p>something went wrong</p>
    </main>
  )

}

export default Main;