
import { useEffect, useState } from 'react';

export default function Counter(){
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    console.log("count changed");

    return () => console.log("cleaned up cont changed");
    
  }, [count]);

  useEffect(() =>{
    console.log("render");
  });

 


  return(
    <>
      <div>
        <button onClick={() =>{
          setCount(count + 1);
        }} >Increment</button>

        <button onClick={() => {
          setBool(bool);
        }} >Re-reneder</button>

        <p>Count: {count}</p>
      </div>
    </>
  )
}
