function PostPet(props) {
 return (
   <div>
     <h1>Mis mascotas</h1>
     <h2>{props.name}</h2>
     <h2>{props.species}</h2>
   </div>
 );
}

export default PostPet;