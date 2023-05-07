import createWithoutConstraint from "./create_without_constraint.svg";

function About() {
    return (
        <div className="about">
            <img class="create-without-constraint" src={createWithoutConstraint} alt="create without constraint." />
            <p className="description">'speak up, dia.' is a DIA homegrown project that showcases the talent and 
            promise of students around Dubai International Academy. Poems submitted by students across DIA are compiled
            and printed in the form of a hardcopy book that will be available for purchase. <br /><br />If you have a message 
            to spread, or want a platform to share your poems, consider submitting a poem. Awards will be given out to the 
            best poems, and there are no restrictions on word count or topic. 
            <br /><br />If you have any questions, 
            please email <span className="green">dia210210@diaestudents.com</span>.</p>
        </div>
    );
}

export default About;