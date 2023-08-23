import { useParams } from 'react-router-dom'

export default function SubPage() {

  const { pageType } = useParams();
  console.log(pageType);
  
  return (
    <div>
      
    </div>
  )
}
