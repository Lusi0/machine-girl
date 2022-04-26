
import Card from '../../components/cards'


export default function Cardlist({cards}) {


  return (
    <div className="card-list">
      {cards.map(card => (
        <Card key={card.id} number={card.id} title={card.name} image={card.imgurl} />
      ))}
    </div>
    // woah
  )
}


export async function getServerSideProps() {
  
  const req = await fetch(`https://machine-girl2.vercel.app/api/cards`);
  const data = await req.json();
  return {
      props: { cards: data },
  }
}