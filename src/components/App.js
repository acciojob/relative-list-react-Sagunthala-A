import React from 'react'

const App = () => {
  const realtiveList = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace"];
  return (
    <div id="main">
               {/* Do not remove the main div */}
      <ol key={relativeList}>
        {
          realtiveList.length>0 && realtiveList.map((val,ind)=>(
            <li key={ `relativeListItem ${ind+1}`}>
              {val}
            </li>
          ))
        }
        {/* c */}
      </ol>
    </div>
  )
}

export default App
