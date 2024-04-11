import React from 'react'

const App = () => {
  const realtiveList = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace"];
  return (
    <div id="main">
               {/* Do not remove the main div */}
      <ol key={relativeList}>
        {
          realtiveList.map((val,ind)=>(
            <li key={`relativeListItem ${ind+1}`}>
              <p>{val}</p>
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default App
