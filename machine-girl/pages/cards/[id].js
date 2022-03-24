import {useRouter} from "next/router"
// import info.txt

import Card from '../../components/cards'



export default function myCard({ card }) {
  const router = useRouter()
  const {id} = router.query
  

  
 

    return (
      <Card number={card.id} title={card.name} image={card.imgurl} />
    )


  

}


export async function getServerSideProps({ params }) {
  
  const req = await fetch(`http://localhost:3000/api/cards/${params.id}`);
  const data = await req.json();
  return {
      props: { card: data },
  }
}