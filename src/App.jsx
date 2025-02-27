import Counter from "./components/Counter"

function App() {


  return (
    <>
      <h1 className="text-center">My counterAPP</h1>
      <div className="container border border-3 rounded border-dark w-25">
        <div className="detail-div" style={{minHeight:'300px'}}>
         <Counter/>
        </div>
      </div>
    </>
  )
}

export default App
