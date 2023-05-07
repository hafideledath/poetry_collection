import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import getInspired from "./get_inspired.svg";

const poems = [
    ["Wrapping paper", `I want to color outside the lines 
    Paint the walls with my fear 
    But this time they’ll put me  
    in wrapping paper, a bow on my head 
    That says “she’s fine”`, "Caitlyn Rodrigues"],
    ["Dandelions", `White dandelions 
    Flowing, dancing in the wind
    Glowing in the sun`, "Hayun Jang"],
    ["UNO", `What do they have?
    I should stay the course, 
    I'm close, I can shout UNO. 
    They have to play by force. 
    Darn, a plus four.`, "Ezekiel Peralta"],
    ["Facts", `As I lay 
    My phone
    Hits my face
    And the pain 
    Is always the same`, "Christoffer Linchausen"]
];

let i = 0;

function Home() {
    const [poem, setPoem] = useState(poems[0]);

    function previousPoem(e) {
        i--;
        if (i <= -1) {
            i = poems.length - 1;
        }
        setPoem(poems[i]);
    }

    function nextPoem(e) {
        i++;
        if (i >= poems.length) {
            i = 0;
        }
        setPoem(poems[i]);
    }

    return (
        <div className="home">
            <img className="get-inspired" src={getInspired} alt="get inspired." />
            <div className="poem-display">
                <h3 className="title">{ poem[0] }</h3>
                <svg className="dashed-line" width="380" height="370" viewBox="0 0 380 370" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M249 0.5C248.667 10.8333 249 80 341.5 80C373.9 80 379.333 98.6667 378 108V329.5C379 342.5 373.1 368.5 341.5 368.5C309.9 368.5 105 368.5 41 368.5C28 368.167 2 359.9 2 329.5C2 299.1 2 169.167 2 108C2 98.6667 7.4 80 29 80C52.5 80 124.7 80 173.5 80C252.5 80 248.661 11 249 0.5Z" stroke="#FF7272" strokeWidth="3" strokeDasharray="12 12"/></svg>
                <p>{ poem[1] }</p>
            </div>
            <div className="poem-footer">
                <FontAwesomeIcon onClick={ previousPoem } className="tip left" icon={ faChevronLeft } />
                <FontAwesomeIcon onClick={ nextPoem } className="tip right" icon={ faChevronRight } />
                <p className="author-name">{ poem[2] }</p>
            </div>
            <div className="quote">
                <p>your words have the power to make someone's day, or change their perspective;<br />don't understimate their power.</p><br />
                <a href="/submit"><span className="green">submit a poem and have it published in print.</span></a>
            </div>
        </div>
    );
}
 
export default Home;