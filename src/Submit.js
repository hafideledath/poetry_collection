import SubmitPoem from "./submit.svg";

function Submit() {
    return (
        <div className="submit">
            <img className="submit-a-poem" src={SubmitPoem} alt="submit a poem/" />
            <iframe title="form" width="600px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=AMmUbCCnXEKuE9AmGtoJtKpyDYLlhaBCi7xs7uTBZq5UMEVSS1BKVVE2UlZMWFlXS0pPNkQzN0xZQi4u&embed=true" style={{border: "none", maxWidth:"100%", maxHeight:"100vh"}}> </iframe>
        </div>
    );
}

export default Submit;