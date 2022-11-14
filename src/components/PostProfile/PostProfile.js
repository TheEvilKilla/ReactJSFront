import "./PostProfile"
import perfil from "../assets/perfil.png"


function PostProfile(props) {
    return (
        < div class="container, PostProfile">
            <div class="row">
                <div class="col-sm">
                    <h1>Perfil</h1>
                </div>
                <div class="col-8">
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                </div>
                <div class="col-2">
                    <img src={perfil} alt="icono perfil" height="150" width="150" />
                </div>
                <div class="col-8">
                    <h3>{props.name}</h3>
                    <h4>{props.login}</h4>
                    <h4>{props.city}</h4>
                </div>
              
            </div>
        </div>
    );
}

export default PostProfile;
