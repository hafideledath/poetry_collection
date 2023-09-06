import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import getInspired from "./get_inspired.svg";

const poems = [
["Wrapping paper", 

`I want to color outside the lines 
Paint the walls with my fear 
But this time they’ll put me  
in wrapping paper, a bow on my head 
That says “she’s fine”`, 

"Caitlyn Rodrigues"],


["Ennui", 

`Curvy shapes, like rigid lines.
Time slows, and confines me. 
Left alone with my thoughts,
held prison by my room.`, 

"Anonymous"],


["Facts", 

`As I lay 
My phone
Hits my face
And the pain 
Is always the same`, 

"Chris Linchausen"],


["Life", 

`Preoccupied with a single leaf,
you won’t see the entire tree.
Preoccupied with a single, tree,
you won’t see the entire forest.`, 

"Ahmad Oneissi"],


["UNO", 

`What do they have?
I should stay the course, 
I'm close, I can shout UNO. 
They have to play by force. 
Darn, a plus four.`, 

"Ezekiel Peralta"],


["Dandelions", 

`White dandelions 
Flowing, dancing in the wind
Glowing in the sun`, 

"Hayun Jang"],


["The Burden Inside", 

`The sun is very pretty,  
when it's up in the sky.  
Or when its going down  
In a brilliant sunset, it shines.  
But when it goes down,  
the prettiness disappears- like the sunshine.  
And people might think, 
that the power the sun holds is very weak.  
But when the sun disappears under the mountains,  
that's when the moon comes out, and so do the stars.  
And that makes it all fly-  
the burden inside. 
 
Days pass and go by.  
We see the moon and the sun in the sky,  
stars shine brighter than they have ever done  
So, you look up at the sky one night,  
but you only see a lie.  
The sky seems so high,  
and the moon so bright.  
But it hurts to remember,  
that sometimes,  
you just have to let it go.  
And, you just have to say, ‘goodbye’. `, 

"Damla Dila Görener"],


["Droste Effect", 

`Reflections again and again, 
Versions of myself within 
Myself. Light should be there, 
More faces with no grin. 
 
Could I be brave? Could I be afraid? 
I should learn this, I should know that. 
Be independent, Be better. 
I know, I know, I know that! 
 
Other me, from other universes, 
‘What do I think of myself?’ I ask. 
My double repeats, and another one repeats, 
A recurring effect, in endless cycle of black.`, 

"Ezekiel Peralta"],


["Love of creation", 

`Humans are very clever. 
Grateful for the gift, 
For seeing the possible, 
On a blank white surface. 
 
Colors and lines, shapes and sizes. 
Every time, always mesmerized. 
Like music to the ears. 
Yet aware of the price. 
 
The blood, sweat and tears, 
The frustrations, the confusion. 
Alas, losing direction. The worst of all. 
Never forget the reason, 
For doing this at all.`, 

"Ezekiel Peralta"]
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