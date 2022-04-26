import {useRouter} from "next/router"
// import info.txt

import Card from '../../components/cards'



export default function useMyCard({ card }) {
  const router = useRouter()
  const {id} = router.query
  

  
 

    return (
      <Card atcards={true} number={card.id} title={card.name} image={card.imgurl} />
    )


  

}


export async function getServerSideProps({ params }) {
  
  const req = await fetch(`https://machine-girl2.vercel.app/api/cards/${params.id}`);
  const data = await req.json();
  return {
      props: { card: data },
  }
}