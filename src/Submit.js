import SubmitPoem from "./submit.svg";

function Submit() {
    return (
        <div className="submit">
            <img className="submit-a-poem" src={SubmitPoem} alt="submit a poem/" />
            <iframe width="600px" height="480px" src="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=AMmUbCCnXEKuE9AmGtoJtKpyDYLlhaBCi7xs7uTBZq5UQzI4R0lMRVRMQlk4OVpORUtJNTNIVFBNMi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{border: "none", maxWidth: "100%", maxHeight: "100vh"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
        </div>
    );
}

export default Submit;