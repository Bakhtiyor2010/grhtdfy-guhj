import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sect3 from '../Test 3/ghs/sect3.png'
import audio3_1 from '../Test 3/ghs/audio3.1.mp3';
import audio3_2 from '../Test 3/ghs/audio3.2.mp3';
import audio3_3 from '../Test 3/ghs/audio3.3.mp3';
import audio3_4 from '../Test 3/ghs/audio3.4.mp3';

  const Heading = styled.h1`text-align: center;`
  const Paragraph = styled.p`text-align: justify; font-size: 1.2rem;`
  const OCnfg = styled.div`display: flex; justify-content: space-between; width: 100%; height: calc(98vh - 100px);`

  const Rtest3 = () => {

    const [currentPage, setCurrentPage] = useState(() => {
        return parseInt(sessionStorage.getItem('currentPage')) || 1;
      });
      
      const [listeningAnswers, setListeningAnswers] = useState(() => {
        return JSON.parse(sessionStorage.getItem('listeningAnswers')) || {};
      });
      
      const [readingAnswers, setReadingAnswers] = useState(() => {
        return JSON.parse(sessionStorage.getItem('readingAnswers')) || {};
      });
      
      const [showResults, setShowResults] = useState(false);
      
      useEffect(() => {
        sessionStorage.setItem('currentPage', currentPage);
        sessionStorage.setItem('listeningAnswers', JSON.stringify(listeningAnswers));
        sessionStorage.setItem('readingAnswers', JSON.stringify(readingAnswers));
      }, [currentPage, listeningAnswers, readingAnswers]);
      
      const handleInputChange = (e, questionNumber, section) => {
        const newValue = e.target.value;
        if (section === 'listening') {
          setListeningAnswers({ ...listeningAnswers, [questionNumber]: newValue });
        } else if (section === 'reading') {
          setReadingAnswers({ ...readingAnswers, [questionNumber]: newValue });
        }
      };
      
      const handleSubmit = () => {
        setShowResults(true);
        alert('Your answers have been submitted!');
      };  

  return (
    <div>
      {!showResults ? (
        <>
      {/* PASSAGE 1 */}
      {currentPage === 1 && (
      <OCnfg className='passage1'>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <h1>Passage 1</h1>
          <Heading>The concept of intelligence</Heading><br />
          <Paragraph>
<b>A</b><br /><br /> Looked at in one way, everyone knows what intelligence is; looked at in another way, no one does. In other words, people all have unconscious notions - known as 'implicit theories' - of intelligence, but no one knows for certain what it actually is. This chapter addresses how people conceptualize intelligence, whatever it may actually be.
<br /><br /> But why should we even care what people think intelligence is, as opposed only to valuing whatever it actually is? There are at least four reasons people's conceptions of intelligence matter.
<br /><br /><b>B</b><br /><br /> First, implicit theories of intelligence drive the way in which people perceive and evaluate their own intelligence and that of others. To better understand the judgments people make about their own and others' abilities, it is useful to learn about people's implicit theories. For example, parents' implicit theories of their children's language development will determine at what ages they will be willing to make various corrections in their children's speech. More generally, parents' implicit theories of intelligence will determine at what ages they believe their children are ready to perform various cognitive tasks. Job interviewers will make hiring decisions on the basis of their implicit theories of intelligence. People will decide who to be friends with on the basis of such theories. In sum, knowledge about implicit theories of intelligence is important because this knowledge is so often used by people to make judgments in the course of their everyday lives.
<br /><br /><b>C</b><br /><br /> Second, the implicit theories of scientific investigators ultimately give rise to their explicit theories. Thus it is useful to find out what these implicit theories are. Implicit theories provide a framework that is useful in defining the general scope of a phenomenon - especially a not-well-understood phenomenon. These implicit theories can suggest what aspects of the phenomenon have been more or less attended to in previous investigations. 
<br /><br /><b>D</b><br /><br /> Third, implicit theories can be useful when an investigator suspects that existing explicit theories are wrong or misleading. If an investigation of implicit theories reveals little correspondence between the extant implicit and explicit theories, the implicit theories may be wrong. But the possibility also needs to be taken into account that the explicit theories are wrong and in need of correction or supplementation. For example, some implicit theories of intelligence suggest the need for expansion of some of our explicit theories of the construct.
<br /><br /><b>E</b><br /><br /> Finally, understanding implicit theories of intelligence can help elucidate developmental and cross-cultural differences. As mentioned earlier, people have expectations for intellectual performances that differ for children of different ages. How these expectations differ is in part a function of culture. For example, expectations for children who participate in Western-style schooling are almost certain to be different from those for children who do not participate in such schooling.
<br /><br /><b>F</b><br /><br /> I have suggested that there are three major implicit theories of how intelligence relates to society as a whole (Sternberg, 1997). These might be called Hamiltonian, Jeffersonian, and Jacksonian. These views are not based strictly, but rather, loosely, on the philosophies of Alexander Hamilton, Thomas Jefferson, and Andrew Jackson, three great statesmen in the history of the United States.
<br /><br /><b>G</b><br /><br /> The Hamiltonian view, which is similar to the Platonic view, is that people are born with different levels of intelligence and that those who are less intelligent need the good offices of the more intelligent to keep them in line, whether they are called government officials or, in Plato's term, philosopher-kings. Herrnstein and Murray (1994) seem to have shared this belief when they wrote about the emergence of a cognitive (high-IQ) elite, which eventually would have to take responsibility for the largely irresponsible masses of non-elite (low-IQ) people who cannot take care of themselves. Left to themselves, the unintelligent would create, as they always have created, a kind of chaos.
<br /><br /><b>H</b><br /><br /> The Jeffersonian view is that people should have equal opportunities, but they do not necessarily avail themselves equally of these opportunities and are not necessarily equally rewarded for their accomplishments. People are rewarded for what they accomplish, if given equal opportunity. Low achievers are not rewarded to the same extent as high achievers. In the Jeffersonian view, the goal of education is not to favor or foster an elite, as in the Hamiltonian tradition, but rather to allow children the opportunities to make full use of the skills they have. My own views are similar to these (Sternberg, 1997).
<br /><br /><b>I</b><br /><br /> The Jacksonian view is that all people are equal, not only as human beings but in terms of their competencies - that one person would serve as well as another in government or on a jury or in almost any position of responsibility. In this view of democracy, people are essentially intersubstitutable except for specialized skills, all of which can be learned. In this view, we do not need or want any institutions that might lead to favoring one group over another.
<br /><br /><b>J</b><br /><br /> Implicit theories of intelligence and of the relationship of intelligence to society perhaps need to be considered more carefully than they have been because they often serve as underlying presuppositions for explicit theories and even experimental designs that are then taken as scientific contributions. Until scholars are able to discuss their implicit theories and thus their assumptions, they are likely to miss the point of what others are saying when discussing their explicit theories and their data.
          </Paragraph>
        </div>
        <div  style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <p>Questions 1-3</p>
          <p>Reading Passage 1 has ten sections, <b>A-J</b>.</p>
          <p>Which section contains the following information?</p>
          <p>Write the correct letter, <b>A-J</b>, in boxes 1-3 on your answer sheet.</p>
          <br />
          <p><b>1</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;information about how non-scientists' assumptions about intelligence influence their behaviour towards others <input onChange={(e) => handleInputChange(e, 1, 'reading')} value={readingAnswers[1] || ''} type="text" placeholder='Answer' /></p>
          <p><b>2</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a reference to lack of clarity over the definition of intelligence <input onChange={(e) => handleInputChange(e, 2, 'reading')} value={readingAnswers[2] || ''} type="text" placeholder='Answer' /></p>
          <p><b>3</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the point that a researcher's implicit and explicit theories may be very different <input onChange={(e) => handleInputChange(e, 3, 'reading')} value={readingAnswers[3] || ''} type="text" placeholder='Answer' /></p>
          <br /><hr /><br />
          <p>Questions 4-6</p>
          <p>Do the following statements agree with the claims of the writer in Reading Passage 1?</p>
          <p>In boxes 4-6 on your answer sheet, write</p>
          <br />
          <p><b>YES</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement agrees with the claims of the writer</p>
          <p><b>NO</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if the statement contradicts the claims of the writer</p>
          <p><b>NOT GIVEN</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if it is impossible to say what the writer thinks about this</p>
          <br /><br />
          <p><b>4</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Slow language development in children is likely to prove disappointing to their parents. <select onChange={(e) => handleInputChange(e, 4, 'reading')} value={readingAnswers[4] || ''}><option>Select</option><option>YES</option><option>NO</option><option>NOT GIVEN</option></select></p>
          <p><b>5</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;People's expectations of what children should gain from education are universal. <select onChange={(e) => handleInputChange(e, 5, 'reading')} value={readingAnswers[5] || ''}><option>Select</option><option>YES</option><option>NO</option><option>NOT GIVEN</option></select></p>
          <p><b>6</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scholars may discuss theories without fully understanding each other. <select onChange={(e) => handleInputChange(e, 6, 'reading')} value={readingAnswers[6] || ''}><option>Select</option><option>YES</option><option>NO</option><option>NOT GIVEN</option></select></p>
          <br /><hr /><br />
          <p>Questions 7-13</p>
          <p>Look at the following statements (Questions 7-13) and the list of theories below.</p>
          <p>Match each statement with the correct theory, <b>A</b>, <b>B</b>, or <b>C</b>.</p>
          <p>Write the correct letter, <b>A</b>, <b>B</b>, or <b>C</b>, in boxes 7-13 on your answer sheet.</p>
          <br />
          <p><b>NB</b> You may use any letter more than once.</p>
          <br /><br />
          <p><b>7</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is desirable for the same possibilities to be open to everyone <select onChange={(e) => handleInputChange(e, 7, 'reading')} value={readingAnswers[7] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option></select></p>
          <p><b>8</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No section of society should have preferential treatment at the expense of another <select onChange={(e) => handleInputChange(e, 8, 'reading')} value={readingAnswers[8] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option></select></p>
          <p><b>9</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;People should only gain benefits on the basis of what they actually achieve <select onChange={(e) => handleInputChange(e, 9, 'reading')} value={readingAnswers[9] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option></select></p>
          <p><b>10</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Variation in intelligence begins at birth <select onChange={(e) => handleInputChange(e, 10, 'reading')} value={readingAnswers[10] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option></select></p>
          <p><b>11</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The more intelligent people should be in positions of power <select onChange={(e) => handleInputChange(e, 11, 'reading')} value={readingAnswers[11] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option></select></p>
          <p><b>12</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Everyone can develop the same abilities <select onChange={(e) => handleInputChange(e, 12, 'reading')} value={readingAnswers[12] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option></select></p>
          <p><b>13</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;People of low intelligence are likely to lead uncontrolled lives <select onChange={(e) => handleInputChange(e, 13, 'reading')} value={readingAnswers[13] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option></select></p>
          <br />
          <div className="test1">
            <p style={{textAlign: 'center'}}><b>List of Theories</b></p>
            <br />
            <p><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hamiltonian</p>
            <p><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jeffersonian</p>
            <p><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jacksonian</p>
          </div>
        </div>
      </OCnfg>)}

      {/* PASSAGE 2 */}
      {currentPage === 2 && (
      <OCnfg className='passage2'>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <h1>Passage 2</h1>
          <Heading>Saving bugs to find new drugs</Heading>
          <h2 style={{textAlign: 'center'}}>Zoologist Ross Piper looks at the potential of insects in pharmaceutical research</h2><br />
          <Paragraph>
          <b>A</b><br /><br /> More drugs than you might think are derived from, or inspired by, compounds found in living things. Looking to nature for the soothing and curing of our ailments is nothing new - we have been doing it for tens of thousands of years. You only have to look at other primates - such as the capuchin monkeys who rub themselves with toxin-oozing millipedes to deter mosquitoes, or the chimpanzees who use noxious forest plants to rid themselves of intestinal parasites - to realise that our ancient ancestors too probably had a basic grasp of medicine.
          <br /><br /><b>B</b><br /><br /> Pharmaceutical science and chemistry built on these ancient foundations and perfected the extraction, characterisation, modification and testing of these natural products. Then, for a while, modern pharmaceutical science moved its focus away from nature and into the laboratory, designing chemical compounds from scratch. The main cause of this shift is that although there are plenty of promising chemical compounds in nature, finding them is far from easy. Securing sufficient numbers of the organism in question, isolating and characterising the compounds of interest, and producing large quantities of these compounds are all significant hurdles.
          <br /><br /><b>C</b><br /><br />  Laboratory-based drug discovery has achieved varying levels of success, something which has now prompted the development of new approaches focusing once again on natural products. With the ability to mine genomes for useful compounds, it is now evident that we have barely scratched the surface of nature's molecular diversity. This realisation, together with several looming health crises, such as antibiotic resistance, has put bioprospecting - the search for useful compounds in nature - firmly back on the map.
          <br /><br /><b>D</b><br /><br /> Insects are the undisputed masters of the terrestrial domain, where they occupy every possible niche. Consequently, they have a bewildering array of interactions with other organisms, something which has driven the evolution of an enormous range of very interesting compounds for defensive and offensive purposes. Their remarkable diversity exceeds that of every other group of animals on the planet combined. Yet even though insects are far and away the most diverse animals in existence, their potential as sources of therapeutic compounds is yet to be realised.
          <br /><br /><b>E</b><br /><br /> From the tiny proportion of insects that have been investigated, several promising compounds have been identified. For example, alloferon, an antimicrobial compound produced by blow fly larvae, is used as an antiviral and antitumor agent in South Korea and Russia. The larvae of a few other insect species are being investigated for the potent antimicrobial compounds they produce. Meanwhile, a compound from the venom of the wasp Polybia paulista has potential in cancer treatment.
          <br /><br /><b>F</b><br /><br /> Why is it that insects have received relatively little attention in bioprospecting? Firstly, there are so many insects that, without some manner of targeted approach, investigating this huge variety of species is a daunting task. Secondly, insects are generally very small, and the glands inside them that secrete potentially useful compounds are smaller still. This can make it difficult to obtain sufficient quantities of the compound for subsequent testing. Thirdly, although we consider insects to be everywhere, the reality of this ubiquity is vast numbers of a few extremely common species. Many insect species are infrequently encountered and very difficult to rear in captivity, which, again, can leave us with insufficient material to work with. 
          <br /><br /><b>G</b><br /><br /> My colleagues and I at Aberystwyth University in the UK have developed an approach in which we use our knowledge of ecology as a guide to target our efforts. The creatures that particularly interest us are the many insects that secrete powerful poison for subduing prey and keeping it fresh for future consumption. There are even more insects that are masters of exploiting filthy habitats, such as faeces and carcasses, where they are regularly challenged by thousands of micro- organisms. These insects have many antimicrobial compounds for dealing with pathogenic bacteria and fungi, suggesting that there is certainly potential to find many compounds that can serve as or inspire new antibiotics.
          <br /><br /><b>H</b><br /><br /> Although natural history knowledge points us in the right direction, it doesn't solve the problems associated with obtaining useful compounds from insects. Fortunately, it is now possible to snip out the stretches of the insect's DNA that carry the codes for the interesting compounds and insert them into cell lines that allow larger quantities to be produced. And although the road from isolating and characterising compounds with desirable qualities to developing a commercial product is very long and full of pitfalls, the variety of successful animal-derived pharmaceuticals on the market demonstrates there is a precedent here that is worth exploring.
          <br /><br /><b>I</b><br /><br /> With every bit of wilderness that disappears, we deprive ourselves of potential medicines. As much as I'd love to help develop a groundbreaking insect-derived medicine, my main motivation for looking at insects in this way is conservation. I sincerely believe that all species, however small and seemingly insignificant, have a right to exist for their own sake. If we can shine a light on the darker recesses of nature's medicine cabinet, exploring the useful chemistry of the most diverse animals on the planet, I believe we can make people think differently about the value of nature.
          </Paragraph>
        </div>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <p>Questions 14-20</p>
          <p>Reading Passage 2 has nine paragraphs, <b>A-I</b>.</p>
          <p>Which paragraph contains the following information?</p>
          <p>Write the correct letter, <b>A-I</b>, in boxes 14-20 on your answer sheet.</p>
          <br />
          <p><b>14</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mention of factors driving a renewed interest in natural medicinal compounds  <input onChange={(e) => handleInputChange(e, 14, 'reading')} value={readingAnswers[14] || ''} type="text" placeholder='Answer' /></p>
          <p><b>15</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;how recent technological advances have made insect research easier <input onChange={(e) => handleInputChange(e, 15, 'reading')} value={readingAnswers[15] || ''} type="text" placeholder='Answer' /></p>
          <p><b>16</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;examples of animals which use medicinal substances from nature <input onChange={(e) => handleInputChange(e, 16, 'reading')} value={readingAnswers[16] || ''} type="text" placeholder='Answer' /></p>
          <p><b>17</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reasons why it is challenging to use insects in drug research <input onChange={(e) => handleInputChange(e, 17, 'reading')} value={readingAnswers[17] || ''} type="text" placeholder='Answer' /></p>
          <p><b>18</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reference to how interest in drug research may benefit wildlife  <input onChange={(e) => handleInputChange(e, 18, 'reading')} value={readingAnswers[18] || ''} type="text" placeholder='Answer' /></p>
          <p><b>19</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a reason why nature-based medicines fell out of favour for a period  <input onChange={(e) => handleInputChange(e, 19, 'reading')} value={readingAnswers[19] || ''} type="text" placeholder='Answer' /></p>
          <p><b>20</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;an example of an insect-derived medicine in use at the moment <input onChange={(e) => handleInputChange(e, 20, 'reading')} value={readingAnswers[20] || ''} type="text" placeholder='Answer' /></p>
          <br /><hr /><br />
          <p>Questions 21 and 22</p>
          <p>Choose <b>TWO</b> letters, A-E.</p>
          <p>Write the correct letters in boxes 21 and 22 on your answer sheet.</p>
          <br />
          <p>Which <b>TWO</b> of the following make insects interesting for drug research?</p>
          <br />
          <p><input type="checkbox" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the huge number of individual insects in the world</p>
          <p><input type="checkbox" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the variety of substances insects have developed to protect themselves</p>
          <p><input type="checkbox" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the potential to extract and make use of insects' genetic codes</p>
          <p><input type="checkbox" />&nbsp;<b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the similarities between different species of insect</p>
          <p><input type="checkbox" />&nbsp;<b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the manageable size of most insects</p>
          <br />
          <input onChange={(e) => handleInputChange(e, 21, 'reading')} value={readingAnswers[21] || ''} type="text" placeholder='Question 21' />
          <input onChange={(e) => handleInputChange(e, 22, 'reading')} value={readingAnswers[22] || ''} type="text" placeholder='Question 22' />
          <br /><br /><hr /><br />
          <p>Questions 23-26</p>
          <p>Complete the summary below.</p>
          <p>Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p>
          <p>Write your answers in boxes 23-26 on your answer sheet.</p>
          <br />
          <p style={{textAlign: 'center'}}><b>Research at Aberystwyth University</b></p>
          <br />
          <p style={{textAlign: 'justify'}}>Ross Piper and fellow zoologists at Aberystwyth University are using their expertise in <input onChange={(e) => handleInputChange(e, 23, 'reading')} value={readingAnswers[23] || ''} type="text" placeholder='Question 23' /> when undertaking bioprospecting with insects. They are especially interested in the compounds that insects produce to overpower and preserve their <input onChange={(e) => handleInputChange(e, 24, 'reading')} value={readingAnswers[24] || ''} type="text" placeholder='Question 24' /> They are also interested in compounds which insects use to protect themselves from pathogenic bacteria and fungi found in their <input onChange={(e) => handleInputChange(e, 25, 'reading')} value={readingAnswers[25] || ''} type="text" placeholder='Question 25' />. Piper hopes that these substances will be useful in the development of drugs such as <input onChange={(e) => handleInputChange(e, 26, 'reading')} value={readingAnswers[26] || ''} type="text" placeholder='Question 26' />.</p>
        </div>
      </OCnfg>)}

      {/* PASSAGE 3 */}
      {currentPage === 3 && (
      <OCnfg className='passage3'>
                <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <h1>Passage 3</h1>
          <Heading>The power of play</Heading>
          <Paragraph>
          <br /><br />Virtually every child, the world over, plays. The drive to play is so intense that children will do so in any circumstances, for instance when they have no real toys, or when parents do not actively encourage the behavior. In the eyes of a young child, running, pretending, and building are fun. Researchers and educators know that these playful activities benefit the development of the whole child across social, cognitive, physical, and emotional domains. Indeed, play is such an instrumental component to healthy child development that the United Nations High Commission on Human Rights (1989) recognized play as a fundamental right of every child.
          <br /><br />Yet, while experts continue to expound a powerful argument for the importance of play in children's lives, the actual time children spend playing continues to decrease. Today, children play eight hours less each week than their counterparts did two decades ago (Elkind 2008). Under pressure of rising academic standards, play is being replaced by test preparation in kindergartens and grade schools, and parents who aim to give their preschoolers a leg up are led to believe that flashcards and educational 'toys' are the path to success. Our society has created a false dichotomy between play and learning.
          <br /><br />Through play, children learn to regulate their behavior, lay the foundations for later learning in science and mathematics, figure out the complex negotiations of social relationships, build a repertoire of creative problem-solving skills, and so much more. There is also an important role for adults in guiding children through playful learning opportunities.
          <br /><br />Full consensus on a formal definition of play continues to elude the researchers and theorists who study it. Definitions range from discrete descriptions of various types of play such as physical, construction, language, or symbolic play (Miller & Almon 2009), to lists of broad criteria, based on observations and attitudes, that are meant to capture the essence of all play behaviors (e.g. Rubin et al. 1983).
          <br /><br />A majority of the contemporary definitions of play focus on several key criteria. The founder of the National Institute for Play, Stuart Brown, has described play as 'anything that spontaneously is done for its own sake'. More specifically, he says it 'appears purposeless, produces pleasure and joy, [and] leads one to the next stage of mastery' (as quoted in Tippett 2008). Similarly, Miller and Almon (2009) say that play includes 'activities that are freely chosen and directed by children and arise from intrinsic motivation'. Often, play is defined along a continuum as more or less playful using the following set of behavioral and dispositional criteria (e.g. Rubin et al. 1983):
          <br /><br />Play is pleasurable: Children must enjoy the activity or it is not play. It is intrinsically motivated: Children engage in play simply for the satisfaction the behavior itself brings. It has no extrinsically motivated function or goal. Play is process oriented: When children play, the means are more important than the ends. It is freely chosen, spontaneous and voluntary. If a child is pressured, they will likely not think of the activity as play. Play is actively engaged: Players must be physically and/or mentally involved in the activity. Play is non-literal. It involves make-believe.
          <br /><br />According to this view, children's playful behaviors can range in degree from 0% to 100% playful. Rubin and colleagues did not assign greater weight to any one dimension in determining playfulness; however, other researchers have suggested that process orientation and a lack of obvious functional purpose may be the most important aspects of play (e.g. Pellegrini 2009).
          <br /><br />From the perspective of a continuum, play can thus blend with other motives and attitudes that are less playful, such as work. Unlike play, work is typically not viewed as enjoyable and it is extrinsically motivated (i.e. it is goal oriented). Researcher Joan Goodman (1994) suggested that hybrid forms of work and play are not a detriment to learning; rather, they can provide optimal contexts for learning. For example, a child may be engaged in a difficult, goal-directed activity set up by their teacher, but they may still be actively engaged and intrinsically motivated. At this mid-point between play and work, the child's motivation, coupled with guidance from an adult, can create robust opportunities for playful learning.
          <br /><br />Critically, recent research supports the idea that adults can facilitate children's learning while maintaining a playful approach in interactions known as 'guided play' (Fisher et al. 2011). The adult's role in play varies as a function of their educational goals and the child's developmental level (Hirsch-Pasek et al. 2009).
          <br /><br />Guided play takes two forms. At a very basic level, adults can enrich the child's environment by providing objects or experiences that promote aspects of a curriculum. In the more direct form of guided play, parents or other adults can support children's play by joining in the fun as a co-player, raising thoughtful questions, commenting on children's discoveries, or encouraging further exploration or new facets to the child's activity. Although playful learning can be somewhat structured, it must also be child-centered (Nicolopolou et al. 2006). Play should stem from the child's own desire.
          <br /><br />Both free and guided play are essential elements in a child-centered approach to playful learning. Intrinsically motivated free play provides the child with true autonomy, while guided play is an avenue through which parents and educators can provide more targeted learning experiences. In either case, play should be actively engaged, it should be predominantly child-directed, and it must be fun.
          </Paragraph>
        </div>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <p>Questions 27-31</p>
          <p>Look at the following statements (Questions 27-31) and the list of researchers below.</p>
          <p>Match each statement with the correct researcher, <b>A-G</b>.</p>
          <p>Write the correct letter, <b>A-G</b>, in boxes 27-31 on your answer sheet.</p>
          <br />
          <p><b>27</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Play can be divided into a number of separate categories. <select onChange={(e) => handleInputChange(e, 27, 'reading')} value={readingAnswers[27] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></p>
          <p><b>28</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adults' intended goals affect how they play with children. <select onChange={(e) => handleInputChange(e, 28, 'reading')} value={readingAnswers[28] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></p>
          <p><b>29</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Combining work with play may be the best way for children to learn. <select onChange={(e) => handleInputChange(e, 29, 'reading')} value={readingAnswers[29] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></p>
          <p><b>30</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certain elements of play are more significant than others. <select onChange={(e) => handleInputChange(e, 30, 'reading')} value={readingAnswers[30] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></p>
          <p><b>31</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Activities can be classified on a scale of playfulness. <select onChange={(e) => handleInputChange(e, 31, 'reading')} value={readingAnswers[31] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></p>
          <br />
          <div className="test1">
            <p style={{textAlign: 'center'}}><b>List of Researchers</b></p>
            <br />
            <p><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Elkind</p>
            <p><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Miller & Almon</p>
            <p><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rubin et al.</p>
            <p><b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stuart Brown</p>
            <p><b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pellegrini</p>
            <p><b>F</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Joan Goodman</p>
            <p><b>G</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hirsch-Pasek et al.</p>
          </div>
          <br /><hr /><br />
          <p>Questions 32-36</p>
          <p>Do the following statements agree with the claims of the writer in Reading Passage 3?</p>
          <p>In boxes 32-36 on your answer sheet, write</p>
          <br />
          <p><b>YES</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement agrees with the claims of the writer</p>
          <p><b>NO</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if the statement contradicts the claims of the writer</p>
          <p><b>NOT GIVEN</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if it is impossible to say what the writer thinks about this</p>
          <br /><br />
          <p><b>32</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children need toys in order to play. <select onChange={(e) => handleInputChange(e, 32, 'reading')} value={readingAnswers[32] || ''}><option>Select</option><option>YES</option><option>NO</option><option>NOT GIVEN</option></select></p>
          <p><b>33</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is a mistake to treat play and learning as separate types of activities. <select onChange={(e) => handleInputChange(e, 33, 'reading')} value={readingAnswers[33] || ''}><option>Select</option><option>YES</option><option>NO</option><option>NOT GIVEN</option></select></p>
          <p><b>34</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Play helps children to develop their artistic talents. <select onChange={(e) => handleInputChange(e, 34, 'reading')} value={readingAnswers[34] || ''}><option>Select</option><option>YES</option><option>NO</option><option>NOT GIVEN</option></select></p>
          <p><b>35</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Researchers have agreed on a definition of play. <select onChange={(e) => handleInputChange(e, 35, 'reading')} value={readingAnswers[35] || ''}><option>Select</option><option>YES</option><option>NO</option><option>NOT GIVEN</option></select></p>
          <p><b>36</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Work and play differ in terms of whether or not they have a target. <select onChange={(e) => handleInputChange(e, 36, 'reading')} value={readingAnswers[36] || ''}><option>Select</option><option>YES</option><option>NO</option><option>NOT GIVEN</option></select></p>
        <br /><hr /><br />
        <p>Questions 37-40</p>
        <p>Complete the summary below.</p>
        <p>Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p>
        <p>Write your answers in boxes 37-40 on your answer sheet.</p>
        <br />
        <p style={{textAlign: 'center'}}><b>Guided play</b></p>
        <br />
        <div style={{textAlign: 'justify'}}>
        <p>In the simplest form of guided play, an adult contributes to the environment in which the child is playing. Alternatively, an adult can play with a child and develop the play, for instance by <input onChange={(e) => handleInputChange(e, 37, 'reading')} value={readingAnswers[37] || ''} type="text" placeholder='Question 37' /> the child to investigate different aspects of their game. Adults can help children to learn through play, and may make the activity rather structured, but it should still be based on the child's <input onChange={(e) => handleInputChange(e, 38, 'reading')} value={readingAnswers[38] || ''} type="text" placeholder='Question 38' /> to play.</p>
        <br />
        <p>Play without the intervention of adults gives children real <input onChange={(e) => handleInputChange(e, 39, 'reading')} value={readingAnswers[39] || ''} type="text" placeholder='Question 39' />; with adults, play can be <input onChange={(e) => handleInputChange(e, 40, 'reading')} value={readingAnswers[40] || ''} type="text" placeholder='Question 40' /> at particular goals. However, all forms of play should be an opportunity for children to have fun.</p>
        </div>
        </div>
      </OCnfg>)}

      {/* LISTENING */}
      {currentPage === 4  && (
        <OCnfg style={{display: 'flex', justifyContent: 'center'}} className='listening'>
          <div className='box5'>
            {/* Section 1 */}
            <div style={{width: '100vh'}} className="">
              <h1 style={{textAlign: 'center'}}>SECTION 1</h1><br />
              <audio style={{width: '50%'}} controls>
                <source src={audio3_1} type='audio/mp3' />
              </audio>
              <br /><br />
              <p>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>
              <br />
              <img src={sect3} style={{width: '60%', position: 'relative', left: '20%'}} alt="" />
              <div>
                <input onChange={(e) => handleInputChange(e, 1, 'listening')} value={listeningAnswers[1] || ''} type="text" placeholder='Question 1' /><br /><br />
                <input onChange={(e) => handleInputChange(e, 2, 'listening')} value={listeningAnswers[2] || ''} type="text" placeholder='Question 2' /><br /><br />
                <input onChange={(e) => handleInputChange(e, 3, 'listening')} value={listeningAnswers[3] || ''} type="text" placeholder='Question 3' /><br /><br />
                <input onChange={(e) => handleInputChange(e, 4, 'listening')} value={listeningAnswers[4] || ''} type="text" placeholder='Question 4' /><br /><br />
                <input onChange={(e) => handleInputChange(e, 5, 'listening')} value={listeningAnswers[5] || ''} type="text" placeholder='Question 5' /><br /><br />
                <input onChange={(e) => handleInputChange(e, 6, 'listening')} value={listeningAnswers[6] || ''} type="text" placeholder='Question 6' /><br /><br />
                <input onChange={(e) => handleInputChange(e, 7, 'listening')} value={listeningAnswers[7] || ''} type="text" placeholder='Question 7' /><br /><br />
                <input onChange={(e) => handleInputChange(e, 8, 'listening')} value={listeningAnswers[8] || ''} type="text" placeholder='Question 8' /><br /><br />
                <input onChange={(e) => handleInputChange(e, 9, 'listening')} value={listeningAnswers[9] || ''} type="text" placeholder='Question 9' /><br /><br />
                <input onChange={(e) => handleInputChange(e, 10, 'listening')} value={listeningAnswers[10] || ''} type="text" placeholder='Question 10' /><br /><br />
              </div>
            </div>
            <br /><hr />
            {/* section 2 */}
            <div style={{width: '100vh'}} className=""><br />
            <h1 style={{textAlign: 'center'}}>SECTION 2</h1><br />
            <audio style={{width: '50%'}} controls>
              <source src={audio3_2} type='audio/mp3' />
            </audio><br /><br />
            <p>Questions 11 and 12</p>
            <p>Which <b>TWO</b> activities that volunteers do are mentioned?</p>
            <br />
            <p><input type="checkbox" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;decorating</p>
            <p><input type="checkbox" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cleaning</p>
            <p><input type="checkbox" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delivering meals</p>
            <p><input type="checkbox" />&nbsp;<b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shopping</p>
            <p><input type="checkbox" />&nbsp;<b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;childcare</p>
            <br />
            <input onChange={(e) => handleInputChange(e, 11, 'listening')} value={listeningAnswers[11] || ''} type="text" placeholder='Question 11' />
            <input onChange={(e) => handleInputChange(e, 12, 'listening')} value={listeningAnswers[12] || ''} type="text" placeholder='Question 12' />
            <br /><br />
            <p>Questions 13 and 14</p>
            <p>Which <b>TWO</b> ways that volunteers can benefit from volunteering are mentioned?</p>
            <br />
            <p><input type="checkbox" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;learning how to be part of a team</p>
            <p><input type="checkbox" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;having a sense of purpose</p>
            <p><input type="checkbox" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;realising how lucky they are</p>
            <p><input type="checkbox" />&nbsp;<b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;improved ability at time management </p>
            <p><input type="checkbox" />&nbsp;<b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boosting their employment prospects</p>
            <br />
            <input onChange={(e) => handleInputChange(e, 13, 'listening')} value={listeningAnswers[13] || ''} type="text" placeholder='Question 13' />
            <input onChange={(e) => handleInputChange(e, 14, 'listening')} value={listeningAnswers[14] || ''} type="text" placeholder='Question 14' />
            <br /><br />
            <p>Questions 15-20</p>
            <p>What has each of the following volunteers helped someone to do?</p>
            <br />
            <div className="test1">
              <p style={{textAlign: 'center'}}><b>What volunteers have helped people to do</b></p>
              <br />
              <p>&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;overcome physical difficulties</p>
              <p>&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rediscover skills not used for a long time</p>
              <p>&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;improve their communication skills</p>
              <p>&nbsp;<b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solve problems independently</p>
              <p>&nbsp;<b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;escape isolation</p>
              <p>&nbsp;<b>F</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;remember past times</p>
              <p>&nbsp;<b>G</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start a new hobby</p>
            </div>
            <br />
            <p><b>Volunteers</b></p>
            <br />
            <p><b>15</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Habib <select onChange={(e) => handleInputChange(e, 15, 'listening')} value={listeningAnswers[15] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></p>
            <p><b>16</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consuela <select onChange={(e) => handleInputChange(e, 16, 'listening')} value={listeningAnswers[16] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></p>
            <p><b>17</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minh <select> onChange={(e) => handleInputChange(e, 17, 'listening')} value={listeningAnswers[17] || ''}<option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></p>
            <p><b>18</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tanya <select onChange={(e) => handleInputChange(e, 18, 'listening')} value={listeningAnswers[18] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></p>
            <p><b>19</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alexei <select onChange={(e) => handleInputChange(e, 19, 'listening')} value={listeningAnswers[19] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></p>
            <p><b>20</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Juba <select onChange={(e) => handleInputChange(e, 20, 'listening')} value={listeningAnswers[20] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></p>
            </div>
            <br /><hr />
            {/* section 3 */}
            <div style={{width: '100vh'}} className=""><br />
              <h1 style={{textAlign: 'center'}}>Section 3</h1><br />
              <audio style={{width: '50%'}} controls>
              <source src={audio3_3} type='audio/mp3' />
            </audio><br /><br />
            <p>Questions 21-26</p>
            <p>Complete the notes below.</p>
            <p>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>
            <br />
            <div className="test1">
              <p className="best1">Background on school marching band</p>
              <br />
              <p>It consists of around <input onChange={(e) => handleInputChange(e, 21, 'listening')} value={listeningAnswers[21] || ''} type="text" placeholder='Question 21' /> students.</p>
              <p>It is due to play in a <input onChange={(e) => handleInputChange(e, 22, 'listening')} value={listeningAnswers[22] || ''} type="text" placeholder='Question 22' /> band competition.</p>
              <p>It has been invited to play in the town's <input onChange={(e) => handleInputChange(e, 23, 'listening')} value={listeningAnswers[23] || ''} type="text" placeholder='Question 23' />.</p>
              <p>They have listened to a talk by a <input onChange={(e) => handleInputChange(e, 24, 'listening')} value={listeningAnswers[24] || ''} type="text" placeholder='Question 24' />.</p>
              <p>Joe will discuss a <input onChange={(e) => handleInputChange(e, 25, 'listening')} value={listeningAnswers[25] || ''} type="text" placeholder='Quetiton 25' /> with the band.</p>
              <p>Joe hopes the band will attend a <input onChange={(e) => handleInputChange(e, 26, 'listening')} value={listeningAnswers[26] || ''} type="text" placeholder='Question 26' /> next month.</p>
              </div>
              <br /><br />
              <p>Questions 27-30</p>
              <p>What problem does Joe mention in connection with each of the following band members?</p>
              <br />
              <div className="test1">
                <p className="best1">Problems</p>
                <br />
                <p><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;makes a lot of mistakes in rehearsals</p>
                <p><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;keeps making unhelpful suggestions</p>
                <p><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has difficulty with rhythm</p>
                <p><b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;misses too many rehearsals</p>
                <p><b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has a health problem</p>
                <p><b>F</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;doesn't mix with other students</p>
                </div>
                <br />
                <p className="best1">Band members</p>
                <br />
                <p><b>27</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flautist <select onChange={(e) => handleInputChange(e, 27, 'listening')} value={listeningAnswers[27] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option></select></p>
                <p><b>28</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trumpeter <select onChange={(e) => handleInputChange(e, 28, 'listening')} value={listeningAnswers[28] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option></select></p>
                <p><b>29</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trombonist <select onChange={(e) => handleInputChange(e, 29, 'listening')} value={listeningAnswers[29] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option></select></p>
                <p><b>30</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;percussionist <select onChange={(e) => handleInputChange(e, 30, 'listening')} value={listeningAnswers[30] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option></select></p>
              </div>
            <br /><hr />
            {/* section 4 */}
            <div style={{width: '100vh'}} className=""><br />
              <h1 style={{textAlign: 'center'}}>Section 4</h1><br />
              <audio style={{width: '50%'}} controls>
              <source src={audio3_4} type='audio/mp3' />
            </audio><br /><br />
            <p>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>
            <br />
            <div className="test1">
              <p className="best1">Concerts in university arts festival</p>
              <br />
              <p className="best2">Concert 1</p>
              <br /><ul>
                <li>Australian composer: Liza Lim</li>
                <li>studied piano and <input onChange={(e) => handleInputChange(e, 31, 'listening')} value={listeningAnswers[31] || ''} type="text" placeholder='Question 31' /> before turning to composition</li>
                <li>performers and festivals around the world have given her a lot of commissions</li>
                <li>compositions show a great deal of <input onChange={(e) => handleInputChange(e, 32, 'listening')} value={listeningAnswers[32] || ''} type="text" placeholder='Question 32' /> and are drawn from various cultural sources</li>
                <li>her music is very expressive and also <input onChange={(e) => handleInputChange(e, 33, 'listening')} value={listeningAnswers[33] || ''} type="text" placeholder='Question 33' /></li>
                <li>festival will include her <input onChange={(e) => handleInputChange(e, 34, 'listening')} value={listeningAnswers[34] || ''} type="text" placeholder='Question 34' /> called The Oresteia</li>
                <li>Lim described the sounds in The Oresteia as <input onChange={(e) => handleInputChange(e, 35, 'listening')} value={listeningAnswers[35] || ''} type="text" placeholder='Question 35' /></li>
                <li>British composers: Ralph Vaughan Williams, Frederick Delius</li>
                </ul>
                <br />
                <p className="best2">Concert 2</p>
                <br />
                <ul>
                  <li>British composers: Benjamin Britten, Judith Weir</li>
                  <li>Australian composer: Ross Edwards</li>
                  <li>festival will include The Tower of Remoteness, inspired by nature </li>
                  <li>The Tower of Remoteness is performed by piano and <input onChange={(e) => handleInputChange(e, 36, 'listening')} value={listeningAnswers[36] || ''} type="text" placeholder='Question 36' /></li>
                  <li>compositions include music for children</li>
                  <li>celebrates Australia's cultural <input onChange={(e) => handleInputChange(e, 37, 'listening')} value={listeningAnswers[37] || ''} type="text" placeholder='Question 37' /></li>
                </ul>
                <br />
                <p className="best2">Concert 3</p>
                <br />
                <ul>
                  <li>Australian composer: Carl Vine</li>
                  <li>played cornet then piano</li>
                  <li>studied <input onChange={(e) => handleInputChange(e, 38, 'listening')} value={listeningAnswers[38] || ''} type="text" placeholder='Question 38' /> before studying music</li>
                  <li>worked in Sydney as a pianist and composer</li>
                  <li>became well known as composer of music for <input onChange={(e) => handleInputChange(e, 39, 'listening')} value={listeningAnswers[39] || ''} type="text" placeholder='Question 39' /></li>
                  <li>festival will include his music for the 1996 <input onChange={(e) => handleInputChange(e, 40, 'listening')} value={listeningAnswers[40] || ''} type="text" placeholder='Question 40' /></li>
                  <li>British composers: Edward Elgar, Thomas Adès</li>
                </ul>
              
            </div>
            <br /><br /><br /><br /><br />
          </div>
        </div>
        </OCnfg>
      )}

<div style={{ textAlign: 'center' }}>
  <footer className='nav2'>
    <button onClick={() => setCurrentPage(1)}>
      Passage 1
    </button>
    <button onClick={() => setCurrentPage(2)}>
    Passage 2
    </button>
    <button onClick={() => setCurrentPage(3)}>
    Passage 3
    </button>
    <button onClick={() => setCurrentPage(4)}>
     Listening
    </button>
    <button onClick={handleSubmit}>
      Finish
    </button>
  </footer>
</div>
</>
) : (
        // RESULTS PAGE
<div>
  <h1 style={{ textAlign: 'center' }}>Your Answers</h1>
<div className='bhg'>
  <div>
  <h2>Reading Answers</h2>
  <ul>
    {Object.keys(readingAnswers).map((key) => (
      <li key={`reading-${key}`}>
        <b>Question {key}:</b> {readingAnswers[key] || 'No answer provided'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" />
      </li>
    ))}
  </ul>
</div>
<div>
  <h2>Listening Answers</h2>
  <ul>
    {Object.keys(listeningAnswers).map((key) => (
      <li key={`listening-${key}`}>
        <b>Question {key}:</b> {listeningAnswers[key] || 'No answer provided'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" />
      </li>
    ))}
  </ul>
</div>
</div>
  <button onClick={() => setShowResults(false)} style={{ textAlign: 'center' }}>
    Go Back to Test
  </button>
</div>
      )}

    </div>
  );
}

export default Rtest3;