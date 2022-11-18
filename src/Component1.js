import {useEffect} from "react";

export function Component1({userId, pageId}) {
  useEffect(() => {
    console.log('user id: ', userId);
  }, [pageId])

  return (
    <div>user id: {userId}</div>
  )
}
