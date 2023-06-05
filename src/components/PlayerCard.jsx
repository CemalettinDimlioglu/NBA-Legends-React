 import Card from "react-bootstrap/Card"
 
 const PlayerCard = () => {
   return (
     <Card>
       <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
       <Card.Footer>
         <Card.Title>Card Link</Card.Title>
       </Card.Footer>
     </Card>
   );
 };
 export default PlayerCard;