
import Card from '../../components/cards'
import { useRouter } from 'next/router'

export default function Cardlist({cards}) {


  return (
    <div className="card-list">
      {cards.map(card => (
        <Card key={card.id} number={card.id} title={card.name} image={card.imgurl} />
      ))}
    </div>
  )
}


export async function getServerSideProps() {
  const baseurl = `https://machine-girl2.vercel.app`
  const req = await fetch(baseurl+`/api/cards`);
  const data = await req.json();
  return {
      props: { cards: data },
  }
}