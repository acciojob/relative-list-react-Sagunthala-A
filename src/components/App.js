import React from 'react'

const App = () => {
  const realtives = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace"];
  return (
    <div id="main">
               {/* Do not remove the main div */}
      <ol key="relativeList" id="relativeList">
        {
          realtives.length>0 && realtives.map((val,ind)=>(
            <li key={ `relativeListItem${ind+1}`} id={`relativeListItem${ind+1}`}>
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
