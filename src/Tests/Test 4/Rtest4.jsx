import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sect4 from '../Test 4/xvj/sect4.png';
import audio4_1 from '../Test 4/xvj/audio4.1.mp3';
import audio4_2 from '../Test 4/xvj/audio4.2.mp3';
import audio4_3 from '../Test 4/xvj/audio4.3.mp3';
import audio4_4 from '../Test 4/xvj/audio4.4.mp3';

  const Heading = styled.h1`text-align: center;`
  const Paragraph = styled.p`text-align: justify; font-size: 1.2rem;`
  const OCnfg = styled.div`display: flex; justify-content: space-between; width: 100%; height: calc(98vh - 100px);`

  const Rtest4 = () => {

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
          <Heading>The secret of staying young</Heading>
          <Paragraph>
<br /><br /> Pheidole dentata, a native ant of the south-eastern U.S., isn't immortal. But scientists have found that it doesn't seem to show any signs of aging. Old worker ants can do everything just as well as the youngsters, and their brains appear just as sharp. 'We get a picture that these ants really don't decline,' says Ysabel Giraldo, who studied the ants for her doctoral thesis at Boston University.
<br /><br /> Such age-defying feats are rare in the animal kingdom. Naked mole rats can live for almost 30 years and stay fit for nearly their entire lives. They can still reproduce even when old, and they never get cancer. But the vast majority of animals deteriorate with age just like people do. Like the naked mole rat, ants are social creatures that usually live in highly organised colonies. 'It's this social complexity that makes P. dentata useful for studying aging in people,' says Giraldo, now at the California Institute of Technology. Humans are also highly social, a trait that has been connected to healthier aging. By contrast, most animal studies of aging use mice, worms or fruit flies, which all lead much more isolated lives.
<br /><br /> In the lab, P. dentata worker ants typically live for around 140 days. Giraldo focused on ants at four age ranges: 20 to 22 days, 45 to 47 days, 95 to 97 days and 120 to 122 days. Unlike all previous studies, which only estimated how old the ants were, her work tracked the ants from the time the pupae became adults, so she knew their exact ages. Then she put them through a range of tests.
<br /><br /> Giraldo watched how well the ants took care of the young of the colony, recording how often each ant attended to, carried and fed them. She compared how well 20-day-old and 95-day-old ants followed the telltale scent that the insects usually leave to mark a trail to food. She tested how ants responded to light and also measured how active they were by counting how often ants in a small dish walked across a line. And she experimented with how ants react to live prey: a tethered fruit fly. Giraldo expected the older ants to perform poorly in all these tasks. But the elderly insects were all good caretakers and trail-followers the 95-day-old ants could track the scent even longer than their younger counterparts. They all responded to light well, and the older ants were more active. And when it came to reacting to prey, the older ants attacked the poor fruit fly just as aggressively as the young ones did, flaring their mandibles or pulling at the fly's legs.
<br /><br /> Then Giraldo compared the brains of 20-day-old and 95-day-old ants, identifying any cells that were close to death. She saw no major differences with age, nor was there any difference in the location of the dying cells, showing that age didn't seem to affect specific brain functions. Ants and other insects have structures in their brains called mushroom bodies, which are important for processing information, learning and memory. She also wanted to see if aging affects the density of synaptic complexes within these structures-regions where neurons come together. Again, the answer was no. What was more, the old ants didn't experience any drop in the levels of either serotonin or dopamine-brain chemicals whose decline often coincides with aging. In humans, for example, a decrease in serotonin has been linked to Alzheimer's disease.
<br /><br /> "This is the first time anyone has looked at both behavioral and neural changes in these ants so thoroughly,' says Giraldo, who recently published the findings in the Proceedings of the Royal Society B. Scientists have looked at some similar aspects in bees, but the results of recent bee studies were mixed-some studies showed age-related declines, which biologists call senescence, and others didn't. 'For now, the study raises more questions than it answers,' Giraldo says, 'including how P. dentata stays in such good shape.'
<br /><br /> Also, if the ants don't deteriorate with age, why do they die at all? Out in the wild, the ants probably don't live for a full 140 days thanks to predators, disease and just being in an environment that's much harsher than the comforts of the lab. 'The lucky ants that do live into old age may suffer a steep decline just before dying,' Giraldo says, but she can't say for sure because her study wasn't designed to follow an ant's final moments.
<br /><br /> 'It will be important to extend these findings to other species of social insects,' says Gene E. Robinson, an entomologist at the University of Illinois at Urbana-Champaign. This ant might be unique, or it might represent a broader pattern among other social bugs with possible clues to the science of aging in larger animals. Either way, it seems that for these ants, age really doesn't matter.
         </Paragraph>
        </div>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <p>Questions 1-8</p>
          <p>Complete the notes below.</p>
          <p>Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p>
          <p>Write your answer in boxes 1-8 on your answer sheet.</p>
          <br />
          <div className="test1">
            <p className="best1">Ysabel Giraldo's research</p>
            <br />
            <p>Focused on a total of <input onChange={(e) => handleInputChange(e, 1, 'reading')} value={readingAnswers[1] || ''} type="text" placeholder='Question 1' /> different age groups of ants, analysing</p>
            <br />
            <p className="best2">Behaviour:</p>
            <ul>
              <li>how well ants looked after their <input onChange={(e) => handleInputChange(e, 2, 'reading')} value={readingAnswers[2] || ''} type="text" placeholder='Question 2' /></li>
              <li>their ability to locate <input onChange={(e) => handleInputChange(e, 3, 'reading')} value={readingAnswers[3] || ''} type="text" placeholder='Question 3' /> using a scent trail</li>
              <li>the effect that  <input onChange={(e) => handleInputChange(e, 4, 'reading')} value={readingAnswers[4] || ''} type="text" placeholder='Question 4' /> had on them</li>
              <li>how <input onChange={(e) => handleInputChange(e, 5, 'reading')} value={readingAnswers[5] || ''} type="text" placeholder='Question 5' /> they attacked prey</li>
            </ul>
            <br />
            <p className="best2">Brains:</p>
            <br />
            <ul>
              <li>comparison between age and the <input onChange={(e) => handleInputChange(e, 6, 'reading')} value={readingAnswers[6] || ''} type="text" placeholder='Question 6' /> of dying cells in the brains of ants</li>
              <li>condition of synaptic complexes (areas in which <input onChange={(e) => handleInputChange(e, 7, 'reading')} value={readingAnswers[7] || ''} type="text" placeholder='Question 7' /> meet) in the brains 'mushroom bodies'</li>
              <li>level of two <input onChange={(e) => handleInputChange(e, 8, 'reading')} value={readingAnswers[8] || ''} type="text" placeholder='Question 8' /> in the brain associated with ageing</li>
            </ul>
          </div>
          <br /><hr /><br />
          <p>Questions 9-13</p>
          <p>Do the following statements agree with the information given in Reading Passage 1?</p>
          <p>In boxes 9-13 on your answer sheet, write</p>
          <br />
          <p><b>TRUE</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement agrees with the information</p>
          <p><b>FALSE</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement contradicts the information</p>
          <p><b>NOT GIVEN</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if there is no information on this</p>
          <br /><br />
          <p><b>9</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pheidole dentata ants are the only known animals which remain active for almost their whole lives. <select onChange={(e) => handleInputChange(e, 9, 'reading')} value={readingAnswers[9] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>10</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ysabel Giraldo was the first person to study Pheidole dentata ants using precise data about the insects' ages. <select onChange={(e) => handleInputChange(e, 10, 'reading')} value={readingAnswers[10] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>11</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The ants in Giraldo's experiments behaved as she had predicted that they would. <select onChange={(e) => handleInputChange(e, 11, 'reading')} value={readingAnswers[11] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>12</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The recent studies of bees used different methods of measuring age-related decline. <select onChange={(e) => handleInputChange(e, 12, 'reading')} value={readingAnswers[12] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>13</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pheidole dentata ants kept in laboratory conditions tend to live longer lives. <select onChange={(e) => handleInputChange(e, 13, 'reading')} value={readingAnswers[13] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
        </div>
      </OCnfg>)}

      {/* PASSAGE 2 */}
      {currentPage === 2 && (
      <OCnfg className='passage2'>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <h1>Passage 2</h1>
          <Heading>Why zoos are good</Heading>
          <h2 style={{textAlign: 'center'}}>Scientist David Hone makes the case for zoos</h2><br />
          <Paragraph>
          <b>A</b><br /><br /> In my view, it is perfectly possible for many species of animals living in zoos or wildlife parks to have a quality of life as high as, or higher than, in the wild. Animals in good zoos get a varied and high-quality diet with all the supplements required, and any illnesses they might have will be treated. Their movement might be somewhat restricted, but they have a safe environment in which to live, and they are spared bullying and social ostracism by others of their kind. They do not suffer from the threat or stress of predators, or the irritation and pain of parasites or injuries. The average captive animal will have a greater life expectancy compared with its wild counterpart, and will not die of drought, of starvation or in the jaws of a predator. A lot of very nasty things happen to truly 'wild' animals that simply don't happen in good zoos, and to view a life that is 'free' as one that is automatically 'good' is, I think, an error. Furthermore, zoos serve several key purposes.
          <br /><br /><b>B</b><br /><br />  Firstly, zoos aid conservation. Colossal numbers of species are becoming extinct across the world, and many more are increasingly threatened and therefore risk extinction. Moreover, some of these collapses have been sudden, dramatic and unexpected, or were simply discovered very late in the day. A species protected in captivity can be bred up to provide a reservoir population against a population crash or extinction in the wild. A good number of species only exist in captivity, with many of these living in zoos. Still more only exist in the wild because they have been reintroduced from zoos, or have wild populations that have been boosted by captive bred animals. Without these efforts there would be fewer species alive today. Although reintroduction successes are few and far between, the numbers are increasing, and the very fact that species have been saved or reintroduced as a result of captive breeding proves the value of such initiatives.
          <br /><br /><b>C</b><br /><br />  Zoos also provide education. Many children and adults, especially those in cities, will never see a wild animal beyond a fox or pigeon. While it is true that television documentaries are becoming ever more detailed and impressive, and many natural history specimens are on display in museums, there really is nothing to compare with seeing a living creature in the flesh, hearing it, smelling it, watching what it does and having the time to absorb details. That alone will bring a greater understanding and perspective to many, and hopefully give them a greater appreciation for wildlife, conservation efforts and how they can contribute.      
          <br /><br /><b>D</b><br /><br /> In addition to this, there is also the education that can take place in zoos through signs, talks and presentations which directly communicate information to visitors about the animals they are seeing and their place in the world. This was an area where zoos used to be lacking, but they are now increasingly sophisticated in their communication and outreach work. Many zoos also work directly to educate conservation workers in other countries, or send their animal keepers abroad to contribute their knowledge and skills to those working in zoos and reserves, thereby helping to improve conditions and reintroductions all over the world. 
          <br /><br /><b>E</b><br /><br /> Zoos also play a key role in research. If we are to save wild species and restore and repair ecosystems we need to know about how key species live, act and react. Being able to undertake research on animals in zoos where there is less risk and fewer variables means real changes can be effected on wild populations. Finding out about, for example, the oestrus cycle of an animal or its breeding rate helps us manage wild populations. Procedures such as capturing and moving at-risk or dangerous individuals are bolstered by knowledge gained in zoos about doses for anaesthetics, and by experience in handling and transporting animals. This can make a real difference to conservation efforts and to the reduction of human-animal conflicts, and can provide a knowledge base for helping with the increasing threats of habitat destruction and other problems.
          <br /><br /><b>F</b><br /><br /> In conclusion, considering the many ongoing global threats to the environment, it is hard for me to see zoos as anything other than essential to the long-term survival of numerous species. They are vital not just in terms of protecting animals, but as a means of learning about them to aid those still in the wild, as well as educating and informing the general population about these animals and their world so that they can assist or at least accept the need to be more environmentally conscious. Without them, the world would be, and would increasingly become, a much poorer place.</Paragraph>
        </div>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <p>Questions 14-17</p>
          <p>Reading Passage 2 has six paragraphs, <b>A-F</b>.</p>
          <p>Which paragraph contains the following information?</p>
          <p>Write the correct letter, <b>A-F</b>, in boxes 14-17 on your answer sheet.</p>
          <br />
          <p><b>14</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a reference to how quickly animal species can die out <input placeholder='Question 14' onChange={(e) => handleInputChange(e, 14, 'reading')} value={readingAnswers[14] || ''} type="text" /></p>
          <p><b>15</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reasons why it is preferable to study animals in captivity rather than in the wild <input placeholder='Question 15' onChange={(e) => handleInputChange(e, 15, 'reading')} value={readingAnswers[15] || ''} type="text" /></p>
          <p><b>16</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mention of two ways of learning about animals other than visiting them in zoos <input placeholder='Question 16' onChange={(e) => handleInputChange(e, 16, 'reading')} value={readingAnswers[16] || ''} type="text"  /></p>
          <p><b>17</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reasons why animals in zoos may be healthier than those in the wild <input placeholder='Question 17' onChange={(e) => handleInputChange(e, 17, 'reading')} value={readingAnswers[17] || ''} type="text"  /></p>
          <br /><hr /><br />
          <p>Questions 18-22</p>
          <p>Do the following statements agree with the information given in Reading Passage 2?</p>
          <p>In boxes 18-22 on your answer sheet, write</p>
          <br />
          <p><b>TRUE</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement agrees with the information</p>
          <p><b>FALSE</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement contradicts the information</p>
          <p><b>NOT GIVEN</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if there is no information on this</p>
          <br /><br />
          <p><b>18</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An animal is likely to live longer in a zoo than in the wild. <select onChange={(e) => handleInputChange(e, 18, 'reading')} value={readingAnswers[18] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>19</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are some species in zoos which can no longer be found in the wild. <select onChange={(e) => handleInputChange(e, 19, 'reading')} value={readingAnswers[19] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>20</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Improvements in the quality of TV wildlife documentaries have resulted in increased numbers of zoo visitors. <select onChange={(e) => handleInputChange(e, 20, 'reading')} value={readingAnswers[20] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>21</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zoos have always excelled at transmitting information about animals to the public. <select onChange={(e) => handleInputChange(e, 21, 'reading')} value={readingAnswers[21] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>22</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Studying animals in zoos is less stressful for the animals than studying them in the wild. <select onChange={(e) => handleInputChange(e, 22, 'reading')} value={readingAnswers[22] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <br /><hr /><br />
          <p>Questions 23 and 24</p>
          <p>Which <b>TWO</b> of the following are stated about zoo staff in the text?</p>
          <br />
          <p><input type="checkbox" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some take part in television documentaries about animals.</p>
          <p><input type="checkbox" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some travel to overseas locations to join teams in zoos.</p>
          <p><input type="checkbox" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some get experience with species in the wild before taking up zoo jobs. </p>
          <p><input type="checkbox" />&nbsp;<b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some teach people who are involved with conservation projects.</p>
          <p><input type="checkbox" />&nbsp;<b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some specialise in caring for species which are under threat.</p>
          <br />
          <input type="text" placeholder='Question 23' onChange={(e) => handleInputChange(e, 23, 'reading')} value={readingAnswers[23] || ''} />
          <input type="text" placeholder='Question 24' onChange={(e) => handleInputChange(e, 24, 'reading')} value={readingAnswers[24] || ''} />
          <br /><br />
          <p>Questions 25 and 26</p>
          <p>Which <b>TWO</b> of these beliefs about zoos does the writer mention in the text?</p>
          <br />
          <p><input type="checkbox" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;They can help children overcome their fears of wild animals.</p>
          <p><input type="checkbox" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;They can increase public awareness of environmental issues.</p>
          <p><input type="checkbox" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;They can provide employment for a range of professional people. </p>
          <p><input type="checkbox" />&nbsp;<b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;They can generate income to support wildlife conservation projects. </p>
          <p><input type="checkbox" />&nbsp;<b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;They can raise animals which can later be released into the wild.</p>
          <br />
          <input type="text" placeholder='Question 25' onChange={(e) => handleInputChange(e, 25, 'reading')} value={readingAnswers[25] || ''} />
          <input type="text" placeholder='Question 26' onChange={(e) => handleInputChange(e, 26, 'reading')} value={readingAnswers[26] || ''} />
        </div>
      </OCnfg>)}

      {/* PASSAGE 3 */}
      {currentPage === 3 && (
      <OCnfg className='passage3'>
                <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <h1>Passage 3</h1>
          <br /><br />
          <Paragraph>
Chelsea Rochman, an ecologist at the University of California, Davis, has been trying to answer a dismal question: Is everything terrible, or are things just very, very bad?
<br /><br />Rochman is a member of the National Center for Ecological Analysis and Synthesis's marine-debris working group, a collection of scientists who study, among other things, the growing problem of marine debris, also known as ocean trash. Plenty of studies have sounded alarm bells about the state of marine debris; in a recent paper published in the journal Ecology, Rochman and her colleagues set out to determine how many of those perceived risks are real.
<br /><br />Often, Rochman says, scientists will end a paper by speculating about the broader impacts of what they've found. For example, a study could show that certain seabirds cat plastic bags, and go on to warn that whole bird populations are at risk of dying out. 'But the truth was that nobody had yet tested those perceived threats,' Rochman says. "There wasn't a lot of information.'
<br /><br />Rochman and her colleagues examined more than a hundred papers on the impacts of marine debris that were published through 2013. Within each paper, they asked what threats scientists had studied-366 perceived threats in all -- and what they'd actually found.
<br /><br />In 83 percent of cases, the perceived dangers of ocean trash were proven true. In the remaining cases, the working group found the studies had weaknesses in design and content which affected the validity of their conclusions - they lacked a control group, for example, or used faulty statistics.
<br /><br />Strikingly, Rochman says, only one well-designed study failed to find the effect it was looking for, an investigation of mussels ingesting microscopic plastic bits. The plastic moved from the mussels' stomachs to their bloodstreams, scientists found, and stayed there for weeks -- but didn't seem to stress out the shellfish.
<br /><br />While mussels may be fine eating trash, though, the analysis also gave a clearer picture of the many ways that ocean debris is bothersome.
<br /><br />Within the studies they looked at, most of the proven threats came from plastic debris, rather than other materials like metal or wood. Most of the dangers also involved large pieces of debris - animals getting entangled in trash, for example, or eating it and severely injuring themselves.
<br /><br />But a lot of ocean debris is 'microplastic', or pieces smaller than five millimeters. These may be ingredients used in cosmetics and toiletries, fibers shed by synthetic clothing in the wash, or eroded remnants of larger debris. Compared to the number of studies investigating large-scale debris, Rochman's group found little research on the effects of these tiny bits. "There are a lot of open questions still for microplastic,' Rochman says, though she notes that more papers on the subject have been published since 2013, the cutoff point for the group's analysis.
<br /><br />There are also, she adds, a lot of open questions about the ways that ocean debris can lead to sea-creature death. Many studies have looked at how plastic affects an individual animal, or that animal's tissues or cells, rather than whole populations. And in the lab, scientists often use higher concentrations of plastic than what's really in the ocean. None of that tells us how many birds or fish or sea turtles could die from plastic pollution - or how deaths in one species could affect that animal's predators, or the rest of the ecosystem.
<br /><br />"We need to be asking more ecologically relevant questions,' Rochman says. Usually, scientists don't know exactly how disasters such as a tanker accidentally spilling its whole cargo of oil and polluting huge areas of the ocean will affect the environment until after they've happened. 'We don't ask the right questions early enough,' she says. But if ecologists can understand how the slow-moving effect of ocean trash is damaging ecosystems, they might be able to prevent things from getting worse.
<br /><br />Asking the right questions can help policy makers, and the public, figure out where to focus their attention. The problems that look or sound most dramatic may not be the best places to start. For example, the name of the 'Great Pacific Garbage Patch'- a collection of marine debris in the northern Pacific Ocean - might conjure up a vast, floating trash island. In reality though, much of the debris is tiny or below the surface; a person could sail through the area without seeing any trash at all. A Dutch group called 'The Ocean Cleanup' is currently working on plans to put mechanical devices in the Pacific Garbage Patch and similar areas to suck up plastic. But a recent paper used simulations to show that strategically positioning the cleanup devices closer to shore would more effectively reduce pollution over the long term.
<br /><br />'I think clearing up some of these misperceptions is really important,' Rochman says. Among scientists as well as in the media, she says, 'A lot of the images about strandings and entanglement and all of that cause the perception that plastic debris is killing everything in the ocean.' Interrogating the existing scientific literature can help ecologists figure out which problems really need addressing, and which ones they'd be better off- like the mussels -- absorbing and ignoring.
          </Paragraph>
        </div>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
        <p>Questions 27-33</p>
          <p>Do the following statements agree with the information given in Reading Passage 3?</p>
          <p>In boxes 27-33 on your answer sheet, write</p>
          <br />
          <p><b>TRUE</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement agrees with the information</p>
          <p><b>FALSE</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement contradicts the information</p>
          <p><b>NOT GIVEN</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if there is no information on this</p>
          <br /><br />
          <p><b>27</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rochman and her colleagues were the first people to research the problem of marine debris. <select onChange={(e) => handleInputChange(e, 27, 'reading')} value={readingAnswers[27] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>28</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The creatures most in danger from ocean trash are certain seabirds. <select onChange={(e) => handleInputChange(e, 28, 'reading')} value={readingAnswers[28] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>29</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The studies Rochman has reviewed have already proved that populations of some birds will soon become extinct. <select onChange={(e) => handleInputChange(e, 29, 'reading')} value={readingAnswers[29] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>30</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rochman analysed papers on the different kinds of danger caused by ocean trash. <select onChange={(e) => handleInputChange(e, 30, 'reading')} value={readingAnswers[30] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>31</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Most of the research analysed by Rochman and her colleagues was badlybdesigned. <select onChange={(e) => handleInputChange(e, 31, 'reading')} value={readingAnswers[31] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>32</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One study examined by Rochman was expecting to find that mussels were harmed by eating plastic. <select onChange={(e) => handleInputChange(e, 32, 'reading')} value={readingAnswers[32] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>33</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some mussels choose to eat plastic in preference to their natural diet. <select onChange={(e) => handleInputChange(e, 33, 'reading')} value={readingAnswers[33] || ''}><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <br /><hr /><br />
          <p>Questions 34-39</p>
          <p>Complete the notes below.</p>
          <p>Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p>
          <p>Write your answers in boxes 34-39 on your answer sheet.</p>
          <br />
          <div className="test1">
            <p className="best1">Findings related to marine debris</p>
            <br />
            <p className="best2">Studies of marine debris found the biggest threats were</p>
            <br />
            <ul>
              <li>plastic (not metal or wood)</li>
              <li>bite of debris that were <input onChange={(e) => handleInputChange(e, 34, 'reading')} value={readingAnswers[34] || ''} type="text" placeholder='Question 34' /> (harmful to animals)</li>
            </ul>
            <p>There was little research into <input onChange={(e) => handleInputChange(e, 35, 'reading')} value={readingAnswers[35] || ''} type="text" placeholder='Question 35' /> .e.g. from synthetic fibres.</p>
            <br />
            <p className="best2">Drawbacks of the studies examined</p>
            <br />
            <ul>
              <li>most of them focused on individual animals, not entire <input onChange={(e) => handleInputChange(e, 36, 'reading')} value={readingAnswers[36] || ''} type="text" placeholder='Question 36' /></li>
              <li>the <input onChange={(e) => handleInputChange(e, 37, 'reading')} value={readingAnswers[37] || ''} type="text" placeholder='Question 37' /> of plastic used in the lab did not always reflect those in the ocean</li>
              <li>there was insufficient information on</li>
              <p><b>-</b> numbers of animals which could be affected</p>
              <p><b>-</b> the impact of a reduction in numbers on the <input onChange={(e) => handleInputChange(e, 38, 'reading')} value={readingAnswers[38] || ''} type="text" placeholder='Question 38' /> of that species</p>
              <p><b>-</b> the impact on the ecosystem</p>
              </ul>
              <br />
              <p>Rochman says more information is needed on the possible impact of future <input onChange={(e) => handleInputChange(e, 39, 'reading')} value={readingAnswers[39] || ''} type="text" placeholder='Question 39' /> (e.g. involving oil).</p>
          </div>
          <br /><hr /><br />
          <p>Question 40</p>
          <p>Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.</p>
          <p>Write the correct letter in box 40 on your answer sheet.</p>
          <br />
          <p><b>40</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What would be the best title for this passage?</p>
          <br />
        <div onChange={(e) => handleInputChange(e, 40)}>
  <p><input onChange={(e) => handleInputChange(e, 40, 'reading')} value="A" type="radio" checked={readingAnswers[40] === 'A'} name="question40" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assessing the threat of marine debris</p>
  <p><input onChange={(e) => handleInputChange(e, 40, 'reading')} value="B" type="radio" checked={readingAnswers[40] === 'B'} name="question40" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Marine debris: who is to blame?</p>
  <p><input onChange={(e) => handleInputChange(e, 40, 'reading')} value="C" type="radio" checked={readingAnswers[40] === 'C'} name="question40" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A new solution to the problem of marine debris</p>
  <p><input onChange={(e) => handleInputChange(e, 40, 'reading')} value="E" type="radio" checked={readingAnswers[40] === 'E'} name="question40" />&nbsp;<b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Marine debris: the need for international action</p>
         </div>
        </div>
      </OCnfg>)}

      {/* LISTENING */}
      {currentPage === 4  && (
        <OCnfg style={{display: 'flex', justifyContent: 'center'}} className='listening'>
          <div className='box5'>
            {/* Section 1 */}
            <div style={{width: '100vh'}} className=""><br />
              <h1 style={{textAlign: 'center'}}>SECTION 1</h1><br />
              <audio style={{width: '50%'}} controls>
                <source src={audio4_1} type='audio/mp3' />
              </audio><br /><br />
              <p>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>
              <br />
              <img src={sect4} style={{width: '60%', position: 'relative', left: '20%'}} alt="" />
              <div>
                <input type="text" onChange={(e) => handleInputChange(e, 1, 'listening')} value={listeningAnswers[1] || ''} placeholder='Question 1' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 2, 'listening')} value={listeningAnswers[2] || ''} placeholder='Question 2' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 3, 'listening')} value={listeningAnswers[3] || ''} placeholder='Question 3' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 4, 'listening')} value={listeningAnswers[4] || ''} placeholder='Question 4' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 5, 'listening')} value={listeningAnswers[5] || ''} placeholder='Question 5' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 6, 'listening')} value={listeningAnswers[6] || ''} placeholder='Question 6' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 7, 'listening')} value={listeningAnswers[7] || ''} placeholder='Question 7' /><br /><br />
              </div>
              <br />
              <p>Questions 8-10</p>
              <p>What is said about using each of the following hotel facilities?</p>
              <br />
              <div className="test1">
                <p className="best1">Availability</p>
                <br />
                <p><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;included in cost of hiring room</p>
                <p><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;available at extra charge</p>
                <p><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;not available</p>
              </div>
              <br />
              <p className="best2">Hotel facilities</p>
              <br />
              <p><b>8</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;outdoor swimming pool <select onChange={(e) => handleInputChange(e, 8, 'listening')} value={listeningAnswers[8] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option></select></p>
              <p><b>9</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gym <select onChange={(e) => handleInputChange(e, 9, 'listening')} value={listeningAnswers[9] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option></select></p>
              <p><b>10</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tennis courts <select onChange={(e) => handleInputChange(e, 10, 'listening')} value={listeningAnswers[10] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option></select></p>
            </div>
            <br /><hr />
            {/* section 2 */}
            <div style={{width: '100vh'}} className=""><br />
            <h1 style={{textAlign: 'center'}}>SECTION 2</h1><br />
            <audio style={{width: '50%'}} controls>
              <source src={audio4_2} type='audio/mp3' />
            </audio><br /><br />
            <p>Questions 11-16</p>
            <p>What information does the speaker give about each of the following excursions?</p>
            <br />
            <div className="test1">
              <p className="best1">Information</p>
              <br />
              <p><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all downhill</p>
              <p><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;suitable for beginners</p>
              <p><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;only in good weather</p>
              <p><b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;food included</p>
              <p><b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;no charge</p>
              <p><b>F</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swimming possible</p>
              <p><b>G</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fully booked today</p>
              <p><b>H</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transport not included</p>
            </div>
            <br />
            <p className="best2">Excursions</p>
            <br />
            <p><b>11</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dolphin watching <select onChange={(e) => handleInputChange(e, 11, 'listening')} value={listeningAnswers[11] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option> <option>G</option><option>H</option></select></p>
            <p><b>12</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;forest walk <select onChange={(e) => handleInputChange(e, 12, 'listening')} value={listeningAnswers[12] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option> <option>G</option><option>H</option></select></p>
            <p><b>13</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cycle trip <select onChange={(e) => handleInputChange(e, 13, 'listening')} value={listeningAnswers[13] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option> <option>G</option><option>H</option></select></p>
            <p><b>14</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;local craft tour <select onChange={(e) => handleInputChange(e, 14, 'listening')} value={listeningAnswers[14] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option> <option>G</option><option>H</option></select></p>
            <p><b>15</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;observatory trip <select onChange={(e) => handleInputChange(e, 15, 'listening')} value={listeningAnswers[15] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option> <option>G</option><option>H</option></select></p>
            <p><b>16</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;horse riding <select onChange={(e) => handleInputChange(e, 16, 'listening')} value={listeningAnswers[16] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option> <option>G</option><option>H</option></select></p>
            <br />
            <p>Questions 17 and 18</p>
            <p>Which <b>TWO</b> things does the speaker say about the attraction called Musical Favourites?</p>
            <br />
            <p><input type="checkbox" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You pay extra for drinks.</p>
            <p><input type="checkbox" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You must book it in advance.</p>
            <p><input type="checkbox" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You get a reduction if you buy two tickets.</p>
            <p><input type="checkbox" />&nbsp;<b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You can meet the performers.</p>
            <p><input type="checkbox" />&nbsp;<b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You can take part in the show.</p>
            <br />
            <input type="text" placeholder='Question 17'  onChange={(e) => handleInputChange(e, 17, 'listening')} value={listeningAnswers[17] || ''} />
            <input type="text" placeholder='Question 18'  onChange={(e) => handleInputChange(e, 18, 'listening')} value={listeningAnswers[18] || ''} />
            <br /><br />
            <p>Questions 19 and 20</p>
            <p>Which <b>TWO</b> things does the speaker say about the Castle Feast?</p>
            <br />
            <p><input type="checkbox" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visitors can dance after the meal.</p>
            <p><input type="checkbox" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There is a choice of food.</p>
            <p><input type="checkbox" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visitors wear historical costume.</p>
            <p><input type="checkbox" />&nbsp;<b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Knives and forks are not used.</p>
            <p><input type="checkbox" />&nbsp;<b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The entertainment includes horse races.</p>
            <br />
            <input type="text" placeholder='Question 19'  onChange={(e) => handleInputChange(e, 19, 'listening')} value={listeningAnswers[19] || ''} />
            <input type="text" placeholder='Question 20'  onChange={(e) => handleInputChange(e, 20, 'listening')} value={listeningAnswers[20] || ''} />
            </div>
            <br /><hr />
            {/* section 3 */}
            <div style={{width: '100vh'}} className=""><br />
              <h1 style={{textAlign: 'center'}}>Section 3</h1><br />
              <audio style={{width: '50%'}} controls>
              <source src={audio4_3} type='audio/mp3' />
            </audio><br /><br />
            <p>Questions 21-25</p>
            <br />
            <div>
              <p><b>21</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What does Trevor find interesting about the purpose of children's literature?</p>
              <br />
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 21, 'listening')} value="A" type="radio" checked={listeningAnswers[21] === 'A'} name="question21" /><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the fact that authors may not realise what values they're teaching</p>
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 21, 'listening')} value="B" type="radio" checked={listeningAnswers[21] === 'B'} name="question21" /><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the fact that literature can be entertaining and educational at the same time</p>
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 21, 'listening')} value="A" type="radio" checked={listeningAnswers[21] === 'C'} name="question21" /><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the fact that adults expect children to imitate characters in literature</p>
            </div>
            <br />
            <div>
              <p><b>22</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trevor says the module about the purpose of children's literature made him</p>
              <br />
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 22, 'listening')} value="A" type="radio" checked={listeningAnswers[22] === 'A'} name="question22" /><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;analyse some of the stories that his niece reads.</p>
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 22, 'listening')} value="B" type="radio" checked={listeningAnswers[22] === 'B'} name="question22" /><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wonder how far popularity reflects good quality.</p>
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 22, 'listening')} value="C" type="radio" checked={listeningAnswers[22] === 'C'} name="question22" /><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;decide to start writing some children's stories.</p>
            </div>
            <br />
            <div>
              <p><b>23</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stephanie is interested in the Pictures module because</p>
              <br />
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 23, 'listening')} value="A" type="radio" checked={listeningAnswers[23] === 'A'} name="question23" /><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;she intends to become an illustrator.</p>
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 23, 'listening')} value="B" type="radio" checked={listeningAnswers[23] === 'B'} name="question23" /><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;she can remember beautiful illustrations from her childhood.</p>
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 23, 'listening')} value="C" type="radio" checked={listeningAnswers[23] === 'C'} name="question23" /><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;she believes illustrations are more important than words.</p>
            </div>
            <br />
            <div>
              <p><b>24</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trevor and Stephanie agree that comics</p>
              <br />
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 24, 'listening')} value="A" type="radio" checked={listeningAnswers[24] === 'A'} name="question24" /><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;are inferior to books.</p>
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 24, 'listening')} value="B" type="radio" checked={listeningAnswers[24] === 'B'} name="question24" /><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;have the potential for being useful.</p>
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 24, 'listening')} value="C" type="radio" checked={listeningAnswers[24] === 'C'} name="question24" /><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;discourage children from using their imagination.</p>
            </div>
            <br />
            <div>
              <p><b>25</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With regard to books aimed at only boys or only girls, Trevor was surprised</p>
              <br />
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 25, 'listening')} value="A" type="radio" checked={listeningAnswers[25] === 'A'} name="question25" /><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;how long the distinction had gone unquestioned.</p>
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 25, 'listening')} value="B" type="radio" checked={listeningAnswers[25] === 'B'} name="question25" /><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;how few books were aimed at both girls and boys.</p>
              <p>&nbsp;<input onChange={(e) => handleInputChange(e, 25, 'listening')} value="C" type="radio" checked={listeningAnswers[25] === 'C'} name="question25" /><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;how many children enjoyed books intended for the opposite sex.</p>
            </div>
            <br /><br />
            <p>Questions 26-30</p>
            <p>What comment is made about each of these stories?</p>
            <br />
            <div className="test1">
              <p className="best1">Comments</p>
              <br />
              <p><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;translated into many other languages</p>
              <p><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hard to read</p>
              <p><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inspired a work in a different area of art</p>
              <p><b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;more popular than the author's other works</p>
              <p><b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;original title refers to another book</p>
              <p><b>F</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;started a new genre</p>
              <p><b>G</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unlikely topic</p>
            </div>
            <br />
            <p className="best2">Stories</p>
            <br />
            <p><b>26</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Perrault's fairy tales <select onChange={(e) => handleInputChange(e, 26, 'listening')} value={listeningAnswers[26] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option> <option>G</option></select></p>
            <p><b>27</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Swiss Family Robinson <select onChange={(e) => handleInputChange(e, 27, 'listening')} value={listeningAnswers[27] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option> <option>G</option></select></p>
            <p><b>28</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Nutcracker and The Mouse King <select onChange={(e) => handleInputChange(e, 28, 'listening')} value={listeningAnswers[28] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option> <option>G</option></select></p>
            <p><b>29</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Lord of the Rings <select onChange={(e) => handleInputChange(e, 29, 'listening')} value={listeningAnswers[29] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option> <option>G</option></select></p>
            <p><b>30</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;War Horse <select onChange={(e) => handleInputChange(e, 30, 'listening')} value={listeningAnswers[30] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option> <option>G</option></select></p>
          </div>
            <br /><hr />
            {/* section 4 */}
            <div style={{width: '100vh'}} className=""><br />
              <h1 style={{textAlign: 'center'}}>Section 4</h1><br />
              <audio style={{width: '50%'}} controls>
              <source src={audio4_4} type='audio/mp3' />
            </audio><br /><br />
            <p>Write <b>ONE WORD ONLY</b> for each answer.</p>
            <br />
            <div className="test1">
              <p className="best1">The hunt for sunken settlements and ancient shipwrecks</p>
              <br />
              <p className="best2">ATLIT-YAM</p>
              <br />
              <ul>
                <li>was a village on coast of eastern Mediterranean</li>
                <li>thrived until about 7,000 BC</li>
                <li>stone homes had a courtyard</li>
                <li>had a semicircle of large stones round a <input onChange={(e) => handleInputChange(e, 31, 'listening')} value={listeningAnswers[31] || ''} type="text" placeholder='Question 31' /></li>
                <li>cause of destruction unknown - now under the sea</li>
                <li>biggest settlement from the prehistoric period found on the seabed</li>
                <li>research carried out into structures, <input onChange={(e) => handleInputChange(e, 32, 'listening')} value={listeningAnswers[32] || ''} type="text" placeholder='Question 32' /> and human remains</li>
              </ul>
              <br />
              <p className="best2">TRADITIONAL AUTONOMOUS UNDERWATER VEHICLES (AUVS)</p>
              <br />
              <ul>
                <li>used in the oil industry, e.g. to make <input onChange={(e) => handleInputChange(e, 33, 'listening')} value={listeningAnswers[33] || ''} type="text" placeholder='Question 33' /></li>
                <li>problems: they were expensive and <input onChange={(e) => handleInputChange(e, 34, 'listening')} value={listeningAnswers[34] || ''} type="text" placeholder='Question 34' /></li>
              </ul>
              <br />
              <p className="best2">LATEST AUVS</p>
              <br />
              <ul>
                <li>much easier to use, relatively cheap, sophisticated</li>
              </ul>
              <br />
              <p className="best2">Tests:</p>
              <br />
              <ul>
                <li>Marzamemi, Sicily: found ancient Roman ships carrying architectural elements made of <input onChange={(e) => handleInputChange(e, 35, 'listening')} value={listeningAnswers[35] || ''} type="text" placeholder='Question 35' /></li>
              </ul>
              <br />
              <p className="best2">Underwater internet:</p>
              <br />
              <ul>
                <li><input onChange={(e) => handleInputChange(e, 36, 'listening')} value={listeningAnswers[36] || ''} type="text" placeholder='Question 36' />is used for short distance communication, acoustic waves for long distance</li>
                <li>plans for communication with researchers by satellite</li>
                <li>AUV can send data to another AUV that has better <input onChange={(e) => handleInputChange(e, 37, 'listening')} value={listeningAnswers[37] || ''} type="text" placeholder='Question 37' />. for example</li>
              </ul>
              <br />
              <p className="best2">Planned research in Gulf of Baratti:</p>
              <br />
              <ul>
                <li>to find out more about wrecks of ancient Roman ships, including</li>
                <p><b>-</b> one carrying <input onChange={(e) => handleInputChange(e, 38, 'listening')} value={listeningAnswers[38] || ''} type="text" placeholder='Question 38' /> supplies; tablets may have been used for cleaning the <input onChange={(e) => handleInputChange(e, 39, 'listening')} value={listeningAnswers[39] || ''} type="text" placeholder='Question 39' /></p>
                <p><b>-</b> others carrying containers of olive oil or <input onChange={(e) => handleInputChange(e, 40, 'listening')} value={listeningAnswers[40] || ''} type="text" placeholder='Question 40' /></p>
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

export default Rtest4;