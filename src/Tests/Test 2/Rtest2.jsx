import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import map from '../Test 2/gf/map2.1.png';
import sect2 from '../Test 2/gf/sect2.png';
import audio2_1 from '../Test 2/gf/audio2.1.mp3';
import audio2_2 from '../Test 2/gf/audio2.2.mp3';
import audio2_3 from '../Test 2/gf/audio2.3.mp3';
import audio2_4 from '../Test 2/gf/audio2.4.mp3';

  const Heading = styled.h1`text-align: center;`
  const Paragraph = styled.p`text-align: justify; font-size: 1.2rem;`
  const OCnfg = styled.div`display: flex; justify-content: space-between; width: 100%; height: calc(98vh - 100px);`

const Rtest2 = () => {

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
          <Heading>Alexander Henderson (1831-1913)</Heading>
          <h2 style={{textAlign: 'center'}}>Born in Scotland, Henderson emigrated to Canada in 1855 and became a well-known landscape photographer</h2> <br />
          <Paragraph>
          Alexander Henderson was born in Scotland in 1831 and was the son of a successful merchant. His grandfather, also called Alexander, had founded the family business, and later became the first chairman of the National Bank of Scotland. The family had extensive landholdings in Scotland. Besides its residence in Edinburgh, it owned Press Estate, 650 acres of farmland about 35 miles southeast of the city. The family often stayed at Press Castle, the large mansion on the northern edge of the property, and Alexander spent much of his childhood in the area, playing on the beach near Eyemouth or fishing in the streams nearby.
<br /><br />Even after he went to school at Murcheston Academy on the outskirts of Edinburgh, Henderson returned to Press at weekends. In 1849 he began a three-year apprenticeship to become an accountant. Although he never liked the prospect of a business career, he stayed with it to please his family. In October 1855, however, he emigrated to Canada with his wife Agnes Elder Robertson and they settled in Montreal.
<br /><br />Henderson learned photography in Montreal around the year 1857 and quickly took it up as a serious amateur. He became a personal friend and colleague of the Scottish-Canadian photographer William Notman. The two men made a photographic excursion to Niagara Falls in 1860 and they cooperated on experiments with magnesium flares as a source of artificial light in 1865. They belonged to the same societies and were among the founding members of the Art Association of Montreal. Henderson acted as chairman of the association's first meeting, which was held in Notman's studio on 11 January 1860.
<br /><br />In spite of their friendship, their styles of photography were quite different. While Notman's landscapes were noted for their bold realism, Henderson for the first 20 years of his career produced romantic images, showing the strong influence of the British landscape tradition. His artistic and technical progress was rapid and in 1865 he published his first major collection of landscape photographs. The publication had limited circulation (only seven copies have ever been found), and was called Canadian Views and Studies. The contents of each copy vary significantly and have proved a useful source for evaluating Henderson's early work.
<br /><br />In 1866, he gave up his business to open a photographic studio, advertising himself as a portrait and landscape photographer. From about 1870 he dropped portraiture to specialize in landscape photography and other views. His numerous photographs of city life revealed in street scenes, houses, and markets are alive with human activity, and although his favourite subject was landscape he usually composed his scenes around such human pursuits as farming the land, cutting ice on a river, or sailing down a woodland stream. There was sufficient demand for these types of scenes and others he took depicting the lumber trade, steamboats and waterfalls to enable him to make a living. There was little competing hobby or amateur photography before the late 1880s because of the time-consuming techniques involved and the weight of the equipment. People wanted to buy photographs as souvenirs of a trip or as gifts, and catering to this market, Henderson had stock photographs on display at his studio for mounting, framing, or inclusion in albums.
<br /><br />Henderson frequently exhibited his photographs in Montreal and abroad, in London, Edinburgh, Dublin, Paris, New York, and Philadelphia. He met with greater success in 1877 and 1878 in New York when he won first prizes in the exhibition held by E and HT Anthony and Company for landscapes using the Lambertype process. In 1878 his work won second prize at the world exhibition in Paris.
<br /><br />In the 1870s and 1880s Henderson travelled widely throughout Quebec and Ontario, in Canada, documenting the major cities of the two provinces and many of the villages in Quebec. He was especially fond of the wilderness and often travelled by canoe on the Blanche, du Lièvre, and other noted eastern rivers. He went on several occasions to the Maritimes and in 1872 he sailed by yacht along the lower north shore of the St Lawrence River. That same year, while in the lower St Lawrence River region, he took some photographs of the construction of the Intercolonial Railway. This undertaking led in 1875 to a commission from the railway to record the principal structures along the almost-completed line connecting Montreal to Halifax. Commissions from other railways followed. In 1876 he photographed bridges on the Quebec, Montreal, Ottawa and Occidental Railway between Montreal and Ottawa. In 1885 he went west along the Canadian Pacific Railway (CPR) as far as Rogers Pass in British Columbia, where he took photographs of the mountains and the progress of construction.
<br /><br />In 1892 Henderson accepted a full-time position with the CPR as manager of a photographic department which he was to set up and administer. His duties included spending four months in the field each year. That summer he made his second trip west, photographing extensively along the railway line as far as Victoria. He continued in this post until 1897, when he retired completely from photography.
<br /><br />When Henderson died in 1913, his huge collection of glass negatives was stored in the basement of his house. Today collections of his work are held at the National Archives of Canada, Ottawa, and the McCord Museum of Canadian History, Montreal.
          </Paragraph>
        </div>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <p>Questions 1-8</p>
          <p>Do the following statements agree with the information given in Reading Passage 1?</p>
          <p>In boxes 9-13 on your answer sheet, write</p>
          <br />
          <p><b>TRUE</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement agrees with the information</p>
          <p><b>FALSE</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement contradicts the information</p>
          <p><b>NOT GIVEN</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if there is no information on this</p>
          <br /><br />
          <div>
            <p><b>1</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Henderson rarely visited the area around Press estate when he was younger. <select onChange={(e) => handleInputChange(e, 1, 'reading')} value={readingAnswers[1] || ''} id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
            <p><b>2</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Henderson pursued a business career because it was what his family wanted.  <select onChange={(e) => handleInputChange(e, 2, 'reading')} value={readingAnswers[2] || ''} id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
            <p><b>3</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Henderson and Notman were surprised by the results of their 1865 experiment. <select onChange={(e) => handleInputChange(e, 3, 'reading')} value={readingAnswers[3] || ''} id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
            <p><b>4</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There were many similarities between Henderson's early landscapes and those of Notman. <select onChange={(e) => handleInputChange(e, 4, 'reading')} value={readingAnswers[4] || ''} id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
            <p><b>5</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The studio that Henderson opened in 1866 was close to his home. <select onChange={(e) => handleInputChange(e, 5, 'reading')} value={readingAnswers[5] || ''} id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
            <p><b>6</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Henderson gave up portraiture so that he could focus on taking photographs of scenery. <select onChange={(e) => handleInputChange(e, 6, 'reading')} value={readingAnswers[6] || ''} id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
            <p><b>7</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When Henderson began work for the Intercolonial Railway, the Montreal to Halifax line had been finished. <select onChange={(e) => handleInputChange(e, 7, 'reading')} value={readingAnswers[7] || ''} id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
            <p><b>8</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Henderson's last work as a photographer was with the Canadian Pacific Railway. <select onChange={(e) => handleInputChange(e, 8, 'reading')} value={readingAnswers[8] || ''} id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          </div>
          <br /><hr /><br />
          <p>Questions 9-13</p>
          <p>Complete the notes below.</p>
          <p>Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p>
          <br /><br />
          <div className='test1'>
            <p style={{textAlign: 'center'}}><b>Alexander Henderson</b></p>
            <p><b>Early life</b></p>
            <ul>
              <li>was born in Scotland in 1831 - father was a <input onChange={(e) => handleInputChange(e, 9, 'reading')} value={readingAnswers[9] || ''} type="text" placeholder='Question 9' /></li>
              <li>trained as an accountant, emigrated to Canada in 1855</li>
            </ul>
            <br />
            <p><b>Start of a photographic career</b></p>
            <br />
            <ul>
              <li>opened up a photographic studio in 1866</li>
              <li>took photos of city life, but preferred landscape photography</li>
              <li>people bought Henderson's photos because photography took up considerable time and the <input onChange={(e) => handleInputChange(e, 10, 'reading')} value={readingAnswers[10] || ''} type="text" placeholder='Question 10' /> was heavy</li>
              <li>the photographs Henderson sold were <input onChange={(e) => handleInputChange(e, 11, 'reading')} value={readingAnswers[11] || ''} type="text" placeholder='Question 11' /> or souvenirs</li>
            </ul>
            <br />
            <p><b>Travelling as a professional photographer</b></p>
            <br />
            <ul>
              <li>travelled widely in Quebec and Ontario in 1870s and 1880s</li>
              <li>took many trips along eastern rivers in a <input onChange={(e) => handleInputChange(e, 12, 'reading')} value={readingAnswers[12] || ''} type="text" placeholder='Question 12' /></li>
              <li>worked for Canadian railways between 1875 and 1897</li>
              <li>worked for CPR in 1885 and photographed the <input onChange={(e) => handleInputChange(e, 13, 'reading')} value={readingAnswers[13] || ''} type="text" placeholder='Question 13' /> and the railway at Rogers Pass</li>
            </ul>
          </div>
        </div>
      </OCnfg>)}

      {/* PASSAGE 2 */}
      {currentPage === 2 && (
      <OCnfg className='passage2'>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <h1>Passage 2</h1>
          <Heading>Back to the future of skyscraper design</Heading>
          <h2 style={{textAlign: 'center'}}>Answers to the problem of excessive electricity use by skyscrapers and large public buildings can be found in ingenious but forgotten architectural designs of the 19th and early-20th centuries</h2> <br />
          <Paragraph>
<b>A</b><br /><br /> The Recovery of Natural Environments in Architecture by Professor Alan Short is the culmination of 30 years of research and award-winning green building design by Short and colleagues in Architecture, Engineering, Applied Maths and Earth Sciences at the University of Cambridge.
<br /><br />'The crisis in building design is already here,' said Short. 'Policy makers think you can solve energy and building problems with gadgets. You can't. As global temperatures continue to rise, we are going to continue to squander more and more energy on keeping our buildings mechanically cool until we have run out of capacity.' 
<br /><br /><b>B</b><br /><br /> Short is calling for a sweeping reinvention of how skyscrapers and major public buildings are designed to end the reliance on sealed buildings which exist solely via the 'life support' system of vast air conditioning units.
<br /><br /> Instead, he shows it is entirely possible to accommodate natural ventilation and cooling in large buildings by looking into the past, before the widespread introduction of air conditioning systems, which were 'relentlessly and aggressively marketed' by their inventors.
<br /><br /><b>C</b><br /><br /> Short points out that to make most contemporary buildings habitable, they have to be sealed and air conditioned. The energy use and carbon emissions this generates is spectacular and largely unnecessary. Buildings in the West account for 40-50% of electricity usage, generating substantial carbon emissions, and the rest of the world is catching up at a frightening rate. Short regards glass, steel and air-conditioned skyscrapers as symbols of status, rather than practical ways of meeting our requirements.
<br /><br /><b>D</b><br /><br /> Short's book highlights a developing and sophisticated art and science of ventilating buildings through the 19th and earlier-20th centuries, including the design of ingeniously ventilated hospitals. Of particular interest were those built to the designs of John Shaw Billings, including the first Johns Hopkins Hospital in the US city of Baltimore (1873-1889).
<br /><br />'We spent three years digitally modelling Billings' final designs,' says Short. 'We put pathogens in the airstreams, modelled for someone with tuberculosis (TB) coughing in the wards and we found the ventilation systems in the room would have kept other patients safe from harm.
<br /><br /><b>E</b><br /><br /> 'We discovered that 19th-century hospital wards could generate up to 24 air changes an hour-that's similar to the performance of a modern-day, computer-controlled operating theatre. We believe you could build wards based on these principles now. 
<br /><br />Single rooms are not appropriate for all patients. Communal wards appropriate for certain patients - older people with dementia, for example - would work just as well in today's hospitals, at a fraction of the energy cost.'
<br /><br />Professor Short contends the mindset and skill-sets behind these designs have been completely lost, lamenting the disappearance of expertly designed theatres, opera houses, and other buildings where up to half the volume of the building was given over to ensuring everyone got fresh air.
<br /><br /><b>F</b><br /><br /> Much of the ingenuity present in 19th-century hospital and building design was driven by a panicked public clamouring for buildings that could protect against what was thought to be the lethal threat of miasmas-toxic air that spread disease. Miasmas were feared as the principal agents of disease and epidemics for centuries, and were used to explain the spread of infection from the Middle Ages right through to the cholera outbreaks in London and Paris during the 1850s. Foul air, rather than germs, was believed to be the main driver of 'hospital fever', leading to disease and frequent death. The prosperous steered clear of hospitals.
<br /><br />While miasma theory has been long since disproved, Short has for the last 30 years advocated a retum to some of the building design principles produced in its wake.
<br /><br /><b>G</b><br /><br /> Today, huge amounts of a building's space and construction cost are given over to air conditioning. 'But I have designed and built a series of buildings over the past three decades which have tried to reinvent some of these ideas and then measure what happens.
<br /><br />'To go forward into our new low-energy, low-carbon future, we would be well advised to look back at design before our high-energy, high-carbon present appeared. What is surprising is what a rich legacy we have abandoned.' 
<br /><br /><b>H</b><br /><br /> Successful examples of Short's approach include the Queen's Building at De Montfort University in Leicester. Containing as many as 2,000 staff and students, the entire building is naturally ventilated, passively cooled and naturally lit, including the two largest auditoria, each seating more than 150 people. The award-winning building uses a fraction of the electricity of comparable buildings in the UK. 
<br /><br />Short contends that glass skyscrapers in London and around the world will become a liability over the next 20 or 30 years if climate modelling predictions and energy price rises come to pass as expected.
<br /><br /><b>I</b><br /><br /> He is convinced that sufficiently cooled skyscrapers using the natural environment can be produced in almost any climate. He and his team have worked on hybrid buildings in the harsh climates of Beijing and Chicago-built with natural ventilation assisted by back-up air conditioning-which, surprisingly perhaps, can be switched off more than half the time on milder days and during the spring and autumn. 
<br /><br /> Short looks at how we might reimagine the cities, offices and homes of the future. Maybe it's time we changed our outlook.
          </Paragraph>
        </div>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <p>Questions 14-18</p>
          <p>Reading Passage 2 has nine sections, <b>A-I</b>.</p>
          <p>Which section contains the following information?</p>
          <br />
          <p>Write the correct letter, <b>A-I</b>, in boxes 14-18 on your answer sheet.</p>
          <br /><br />
          <p><b>14</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;why some people avoided hospitals in the 19th century <input onChange={(e) => handleInputChange(e, 14, 'reading')} value={readingAnswers[14] || ''} type="text" placeholder='Answer' /></p>
          <p><b>15</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a suggestion that the popularity of tall buildings is linked to prestige <input onChange={(e) => handleInputChange(e, 15, 'reading')} value={readingAnswers[15] || ''} type="text" placeholder='Answer' /></p>
          <p><b>16</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a comparison between the circulation of air in a 19th-century building and modern standards <input onChange={(e) => handleInputChange(e, 16, 'reading')} value={readingAnswers[16] || ''} type="text" placeholder='Answer' /></p>
          <p><b>17</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;how Short tested the circulation of air in a 19th-century building <input onChange={(e) => handleInputChange(e, 17, 'reading')} value={readingAnswers[17] || ''} type="text" placeholder='Answer' /></p>
          <p><b>18</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;an implication that advertising led to the large increase in the use of air conditioning <input onChange={(e) => handleInputChange(e, 18, 'reading')} value={readingAnswers[18] || ''} type="text" placeholder='Answer' /></p>
          <br /><hr /><br />
          <p>Questions 19-26</p>
          <p>Complete the summary below.</p>
          <p>Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p>
          <br />
          <p style={{textAlign: 'center'}}><b>Ventilation in 19th-century hospital wards</b></p>
          <br />
        <div style={{textAlign: 'justify'}}>
          <p>Professor Alan Short examined the work of John Shaw Billings, who influenced the architectural <input onChange={(e) => handleInputChange(e, 19, 'reading')} value={readingAnswers[19] || ''} type="text" placeholder='Question 19' /> of hospitals to ensure they had good ventilation. He calculated that <input onChange={(e) => handleInputChange(e, 20, 'reading')} value={readingAnswers[20] || ''} type="text" placeholder='Question 20' /> in the air coming from patients suffering from <input onChange={(e) => handleInputChange(e, 21, 'reading')} value={readingAnswers[21] || ''} type="text" placeholder='Question 21' /> would not have harmed other patients. He also found that the air in <input onChange={(e) => handleInputChange(e, 22, 'reading')} value={readingAnswers[22] || ''} type="text" placeholder='Question 22' /> in hospitals could change as often as in a modern operating theatre. He suggests that energy use could be reduced by locating more patients in <input onChange={(e) => handleInputChange(e, 23, 'reading')} value={readingAnswers[23] || ''} type="text" placeholder='Question 23' /> areas.</p>
          <br />
          <p>A major reason for improving ventilation in 19th-century hospitals was the demand from the <input onChange={(e) => handleInputChange(e, 24, 'reading')} value={readingAnswers[24] || ''} type="text" placeholder='Question 24' /> for protection against bad air, known as <input onChange={(e) => handleInputChange(e, 25, 'reading')} value={readingAnswers[25] || ''} type="text" placeholder='Question 25' />. These were blamed for the spread of disease for hundreds of years, including epidemics of <input onChange={(e) => handleInputChange(e, 26, 'reading')} value={readingAnswers[26] || ''} type="text" placeholder='Question 26' /> in London and Paris in the middle of the 19th century.</p>
        </div>
        </div>
      </OCnfg>)}

      {/* PASSAGE 3 */}
      {currentPage === 3 && (
      <OCnfg className='passage3'>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <h1>Passage 3</h1>
          <Heading>Why companies should welcome disorder</Heading><br />
          <Paragraph>
<b>A</b><br /><br /> Organisation is big business. Whether it is of our lives - all those inboxes and calendars- or how companies are structured, a multi-billion dollar industry helps to meet this need.
<br /><br /> We have more strategies for time management, project management and self-organisation than at any other time in human history. We are told that we ought to organise our company, our home life, our week, our day and even our sleep, all as a means to becoming more productive. Every week, countless seminars and workshops take place around the world to tell a paying public that they ought to structure their lives in order to achieve this.
<br /><br /> This rhetoric has also crept into the thinking of business leaders and entrepreneurs, much to the delight of self-proclaimed perfectionists with the need to get everything right. The number of business schools and graduates has massively increased over the past 50 years. essentially teaching people how to organise well.
<br /><br /><b>B</b><br /><br /> Ironically, however, the number of businesses that fail has also steadily increased. Work-related stress has increased. A large proportion of workers from all demographics claim to be dissatisfied with the way their work is structured and the way they are managed. 
<br /><br />This begs the question: what has gone wrong? Why is it that on paper the drive for organisation seems a sure shot for increasing productivity, but in reality falls well short of what is expected?
<br /><br /><b>C</b><br /><br /> This has been a problem for a while now. Frederick Taylor was one of the forefathers of scientific management. Writing in the first half of the 20th century, he designed a number of principles to improve the efficiency of the work process, which have since become widespread in modern companies. So the approach has been around for a while.
<br /><br /><b>D</b><br /><br /> New research suggests that this obsession with efficiency is misguided. The problem is not necessarily the management theories or strategies we use to organise our work; it's the basic assumptions we hold in approaching how we work. Here it's the assumption that order is a necessary condition for productivity. This assumption has also fostered the idea that disorder must be detrimental to organisational productivity. The result is that businesses and people spend time and money organising themselves for the sake of organising, rather than actually looking at the end goal and usefulness of such an effort.
<br /><br /><b>E</b><br /><br /> What's more, recent studies show that order actually has diminishing returns. Order does increase productivity to a certain extent, but eventually the usefulness of the process of organisation, and the benefit it yields, reduce until the point where any further increase in order reduces productivity. Some argue that in a business, if the cost of formally structuring something outweighs the benefit of doing it, then that thing ought not to be formally structured. Instead, the resources involved can be better used elsewhere.
<br /><br /><b>F</b><br /><br /> In fact, research shows that, when innovating, the best approach is to create an environment devoid of structure and hierarchy and enable everyone involved to engage as one organic group. These environments can lead to new solutions that, under conventionally structured environments (filled with bottlenecks in terms of information flow, power structures, rules, and routines) would never be reached.
<br /><br /><b>G</b><br /><br /> In recent times companies have slowly started to embrace this disorganisation. Many of them embrace it in terms of perception (embracing the idea of disorder, as opposed to fearing it) and in terms of process (putting mechanisms in place to reduce structure). 
<br /><br /> For example, Oticon, a large Danish manufacturer of hearing aids, used what it called a 'spaghetti' structure in order to reduce the organisation's rigid hierarchies. This involved scrapping formal job titles and giving staff huge amounts of ownership over their own time and projects. This approach proved to be highly successful initially, with clear improvements in worker productivity in all facets of the business.
<br /><br /> In similar fashion, the former chairman of General Electric embraced disorganisation, putting forward the idea of the 'boundaryless' organisation. Again, it involves breaking down the barriers between different parts of a company and encouraging virtual collaboration and flexible working. Google and a number of other tech companies have embraced (at least in part) these kinds of flexible structures, facilitated by technology and strong company values which glue people together.
<br /><br /><b>H</b><br /><br /> A word of warning to others thinking of jumping on this bandwagon: the evidence so far suggests disorder, much like order, also seems to have diminishing utility, and can also have detrimental effects on performance if overused. Like order, disorder should be embraced only so far as it is useful. But we should not fear it- nor venerate one over the other. This research also shows that we should continually question whether or not our existing assumptions work.
          </Paragraph>
        </div>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <p>Questions 27-34</p>
          <p>Reading Passage 3 has eight sections, <b>A-H</b>.</p>
          <p>Choose the correct heading for each section from the list of headings below.</p>
          <br />
          <div className="test1">
            <p style={{textAlign: 'center'}}><b>List of Headings</b></p>
            <br />
            <p><b>i</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Complaints about the impact of a certain approach</p>
            <p><b>ii</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fundamental beliefs that are in fact incorrect</p>
            <p><b>iii</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Early recommendations concerning business activities</p>
            <p><b>iv</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Organisations that put a new approach into practice</p>
            <p><b>v</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Companies that have suffered from changing their approach</p>
            <p><b>vi</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What people are increasingly expected to do</p>
            <p><b>vii</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How to achieve outcomes that are currently impossible</p>
            <p><b>viii</b>&nbsp;&nbsp;&nbsp;&nbsp;Neither approach guarantees continuous improvement</p>
            <p><b>ix</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Evidence that a certain approach can have more disadvantages than advantages</p>
          </div>
          <br />
          <div>
            <p><b>27</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Section&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onChange={(e) => handleInputChange(e, 27, 'reading')} value={readingAnswers[27] || ''} name="heading" id=""><option>Choose</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option><option>viii</option><option>ix</option></select></p>
            <p><b>28</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Section&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onChange={(e) => handleInputChange(e, 28, 'reading')} value={readingAnswers[28] || ''} name="heading" id=""><option>Choose</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option><option>viii</option><option>ix</option></select></p>
            <p><b>29</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Section&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onChange={(e) => handleInputChange(e, 29, 'reading')} value={readingAnswers[29] || ''} name="heading" id=""><option>Choose</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option><option>viii</option><option>ix</option></select></p>
            <p><b>30</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Section&nbsp;D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onChange={(e) => handleInputChange(e, 30, 'reading')} value={readingAnswers[30] || ''} name="heading" id=""><option>Choose</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option><option>viii</option><option>ix</option></select></p>
            <p><b>31</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Section&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onChange={(e) => handleInputChange(e, 31, 'reading')} value={readingAnswers[31] || ''} name="heading" id=""><option>Choose</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option><option>viii</option><option>ix</option></select></p>
            <p><b>32</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Section&nbsp;F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onChange={(e) => handleInputChange(e, 32, 'reading')} value={readingAnswers[32] || ''} name="heading" id=""><option>Choose</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option><option>viii</option><option>ix</option></select></p>
            <p><b>33</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Section&nbsp;G&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onChange={(e) => handleInputChange(e, 33, 'reading')} value={readingAnswers[33] || ''} name="heading" id=""><option>Choose</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option><option>viii</option><option>ix</option></select></p>
            <p><b>34</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Section&nbsp;H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onChange={(e) => handleInputChange(e, 34, 'reading')} value={readingAnswers[34] || ''} name="heading" id=""><option>Choose</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option><option>viii</option><option>ix</option></select></p>
          </div>
          <br /><hr /><br />
          <p>Questions 35-37</p>
          <p>Complete the sentences below.</p>
          <p>Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p>
          <br />
          <p><b>35</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Numerous training sessions are aimed at people who feel they are not <input onChange={(e) => handleInputChange(e, 35, 'reading')} value={readingAnswers[35] || ''} type="text" placeholder='Answer' /> enough.</p>
          <p><b>36</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Being organised appeals to people who regard themselves as <input onChange={(e) => handleInputChange(e, 36, 'reading')} value={readingAnswers[36] || ''} type="text" placeholder='Answer' />.</p>
          <p><b>37</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Many people feel <input onChange={(e) => handleInputChange(e, 37, 'reading')} value={readingAnswers[37] || ''} type="text" placeholder='Answer' /> aspects of their work.</p>
          <br /><hr /><br />
          <p>Questions 38-40</p>
          <p>Do the following statements agree with the information given in Reading Passage 3?</p>
          <p>In boxes 38-40 on your answer sheet, write</p>
          <br />
          <p><b>TRUE</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement agrees with the information</p>
          <p><b>FALSE</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement contradicts the information</p>
          <p><b>NOT GIVEN</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if there is no information on this</p>
          <br /><br />
          <p><b>38</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Both businesses and people aim at order without really considering its value. <select onChange={(e) => handleInputChange(e, 38, 'reading')} value={readingAnswers[38] || ''} id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>39</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Innovation is most successful if the people involved have distinct roles. <select onChange={(e) => handleInputChange(e, 39, 'reading')} value={readingAnswers[39] || ''} id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>40</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Google was inspired to adopt flexibility by the success of General Electric. <select onChange={(e) => handleInputChange(e, 40, 'reading')} value={readingAnswers[40] || ''} id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
        </div>
      </OCnfg>)}

      {/* LISTENING */}
      {currentPage === 4  && (
        <OCnfg style={{display: 'flex', justifyContent: 'center'}} className='listening'>
          <div className='box5'>
            {/* Section 1 */}
            <div style={{width: '100vh'}} className="">
              <h1 style={{textAlign: 'center'}}>SECTION 1</h1>
              <br />
              <audio style={{width: '50%'}} controls>
                <source src={audio2_1} type='audio/mp3' />
              </audio>
              <br /><br />
              <p>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>
              <br />
              <img src={sect2} style={{width: '60%', position: 'relative', left: '20%'}} alt="" />
              <div>
                <input type="text" onChange={(e) => handleInputChange(e, 1, 'listening')} value={listeningAnswers[1] || ''} placeholder='Question 1' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 2, 'listening')} value={listeningAnswers[2] || ''} placeholder='Question 2' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 3, 'listening')} value={listeningAnswers[3] || ''} placeholder='Question 3' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 4, 'listening')} value={listeningAnswers[4] || ''} placeholder='Question 4' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 5, 'listening')} value={listeningAnswers[5] || ''} placeholder='Question 5' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 6, 'listening')} value={listeningAnswers[6] || ''} placeholder='Question 6' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 7, 'listening')} value={listeningAnswers[7] || ''} placeholder='Question 7' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 8, 'listening')} value={listeningAnswers[8] || ''} placeholder='Question 8' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 9, 'listening')} value={listeningAnswers[9] || ''} placeholder='Question 9' /><br /><br />
                <input type="text" onChange={(e) => handleInputChange(e, 10, 'listening')} value={listeningAnswers[10] || ''} placeholder='Question 10' /><br /><br />
              </div>
            </div>
            <br /><hr /><br />
            {/* section 2 */}
            <div style={{width: '100vh'}} className="">
            <h1 style={{textAlign: 'center'}}>SECTION 2</h1>
            <br />
            <audio style={{width: '50%'}} controls>
              <source src={audio2_2} type='audio/mp3' />
            </audio><br /><br />
            <p>Questions 11-15</p>
            <p>Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.</p>
            <p style={{textAlign: 'center'}}><b>Visit to Branley Castle</b></p>
            <br />
            <div>
              <p>&nbsp;<b>11</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Before Queen Elizabeth I visited the castle in 1576,</p><br />
              <p><input onChange={(e) => handleInputChange(e, 11, 'listening')} value="A" type="radio" checked={listeningAnswers[11] === 'A'} name="question11" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;repairs were carried out to the guest rooms.</p>
              <p><input onChange={(e) => handleInputChange(e, 11, 'listening')} value="B" type="radio" checked={listeningAnswers[11] === 'B'} name="question11" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a new building was constructed for her.</p>
              <p><input onChange={(e) => handleInputChange(e, 11, 'listening')} value="C" type="radio" checked={listeningAnswers[11] === 'C'} name="question11" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a fire damaged part of the main hall.</p>
            </div>
            <br />
            <div>
              <p>&nbsp;<b>12</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In 1982, the castle was sold to</p><br />
              <p><input onChange={(e) => handleInputChange(e, 12, 'listening')} value="A" type="radio" checked={listeningAnswers[12] === 'A'} name="question12" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the government.</p>
              <p><input onChange={(e) => handleInputChange(e, 12, 'listening')} value="B" type="radio" checked={listeningAnswers[12] === 'B'} name="question12" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the Fenys family.</p>
              <p><input onChange={(e) => handleInputChange(e, 12, 'listening')} value="C" type="radio" checked={listeningAnswers[12] === 'C'} name="question12" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;an entertainment company.</p>
            </div>
            <br />
            <div>
              <p>&nbsp;<b>13</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In some of the rooms, visitors can</p><br />
              <p><input onChange={(e) => handleInputChange(e, 13, 'listening')} value="A" type="radio" checked={listeningAnswers[13] === 'A'} name="question13" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;speak to experts on the history of the castle.</p>
              <p><input onChange={(e) => handleInputChange(e, 13, 'listening')} value="B" type="radio" checked={listeningAnswers[13] === 'B'} name="question13" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;interact with actors dressed as famous characters.</p>
              <p><input onChange={(e) => handleInputChange(e, 13, 'listening')} value="C" type="radio" checked={listeningAnswers[13] === 'C'} name="question13" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;see models of historical figures moving and talking.</p>
            </div>
            <br />
            <div>
              <p>&nbsp;<b>14</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the castle park, visitors can</p><br />
              <p><input onChange={(e) => handleInputChange(e, 14, 'listening')} value="A" type="radio" checked={listeningAnswers[14] === 'A'} name="question14" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;see an 800-year-old tree.</p>
              <p><input onChange={(e) => handleInputChange(e, 14, 'listening')} value="B" type="radio" checked={listeningAnswers[14] === 'B'} name="question14" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;go to an art exhibition.</p>
              <p><input onChange={(e) => handleInputChange(e, 14, 'listening')} value="C" type="radio" checked={listeningAnswers[14] === 'C'} name="question14" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visit a small zoo.</p>
            </div>
            <br />
            <div>
              <p>&nbsp;<b>15</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At the end of the visit, the group will have.</p><br />
              <p><input onChange={(e) => handleInputChange(e, 15, 'listening')} value="A" type="radio" checked={listeningAnswers[15] === 'A'} name="question15" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;afternoon tea in the conservatory.</p>
              <p><input onChange={(e) => handleInputChange(e, 15, 'listening')} value="B" type="radio" checked={listeningAnswers[15] === 'B'} name="question15" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the chance to meet the castle's owners.</p>
              <p><input onChange={(e) => handleInputChange(e, 15, 'listening')} value="C" type="radio" checked={listeningAnswers[15] === 'C'} name="question15" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a photograph together on the Great Staircase.</p>
            </div>
            <br />
            <img src={map} style={{width: '60%', position: 'relative', left: '20%'}} alt="" />
            <p><b>16</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting point for walking the walls <input onChange={(e) => handleInputChange(e, 16, 'listening')} value={listeningAnswers[16] || ''} type="text" placeholder='Answer' /></p>
            <p><b>17</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bow and arrow display <input onChange={(e) => handleInputChange(e, 17, 'listening')} value={listeningAnswers[17] || ''} type="text" placeholder='Answer' /></p>
            <p><b>18</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hunting birds display <input onChange={(e) => handleInputChange(e, 18, 'listening')} value={listeningAnswers[18] || ''} type="text" placeholder='Answer' /></p>
            <p><b>19</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Traditional dancing <input onChange={(e) => handleInputChange(e, 19, 'listening')} value={listeningAnswers[19] || ''} type="text" placeholder='Answer' /></p>
            <p><b>20</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shop <input onChange={(e) => handleInputChange(e, 20, 'listening')} value={listeningAnswers[20] || ''} type="text" placeholder='Answer' /></p>
            </div>
            <br /><hr /><br />
            {/* section 3 */}
            <div style={{width: '100vh'}} className="">
              <h1 style={{textAlign: 'center'}}>Section 3</h1>
              <br />
              <audio style={{width: '50%'}} controls>
              <source  src={audio2_3} type='audio/mp3' />
            </audio><br /><br />
            <p>Questions 21-24</p>
            <p>Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.</p>
            <br />
            <p style={{textAlign: 'center'}}><b>Woolly mammoths on St Paul's Island</b></p>
            <br />
            <div>
              <p>&nbsp;<b>21</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How will Rosie and Martin introduce their presentation?</p><br />
              <p><input onChange={(e) => handleInputChange(e, 21, 'listening')} value="A" type="radio" checked={listeningAnswers[21] === 'A'} name="question21" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with a drawing of woolly mammoths in their natural habitat</p>
              <p><input onChange={(e) => handleInputChange(e, 21, 'listening')} value="B" type="radio" checked={listeningAnswers[21] === 'B'} name="question21" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with a timeline showing when woolly mammoths lived</p>
              <p><input onChange={(e) => handleInputChange(e, 21, 'listening')} value="C" type="radio" checked={listeningAnswers[21] === 'C'} name="question" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with a video clip about woolly mammoths</p>
            </div>
            <br />
            <div>
              <p>&nbsp;<b>22</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What was surprising about the mammoth tooth found by Russell Graham?</p><br />
              <p><input onChange={(e) => handleInputChange(e, 22, 'listening')} value="A" type="radio" checked={listeningAnswers[22] === 'A'} name="question22" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It was still embedded in the mammoth's jawbone.</p>
              <p><input onChange={(e) => handleInputChange(e, 22, 'listening')} value="B" type="radio" checked={listeningAnswers[22] === 'B'} name="question22" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It was from an unknown species of mammoth.</p>
              <p><input onChange={(e) => handleInputChange(e, 22, 'listening')} value="C" type="radio" checked={listeningAnswers[22] === 'C'} name="question22" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It was not as old as mammoth remains from elsewhere.</p>
            </div>
            <br />
            <div>
              <p>&nbsp;<b>23</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The students will use an animated diagram to demonstrate how the mammoths</p><br />
              <p><input onChange={(e) => handleInputChange(e, 23, 'listening')} value="A" type="radio" checked={listeningAnswers[23] === 'A'} name="question23" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;became isolated on the island.</p>
              <p><input onChange={(e) => handleInputChange(e, 23, 'listening')} value="B" type="radio" checked={listeningAnswers[23] === 'B'} name="question23" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spread from the island to other areas.</p>
              <p><input onChange={(e) => handleInputChange(e, 23, 'listening')} value="C" type="radio" checked={listeningAnswers[23] === 'C'} name="question23" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coexisted with other animals on the island.</p>
            </div>
            <br />
            <div>
              <p>&nbsp;<b>24</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;According to Martin, what is unusual about the date of the mammoths' extinction on the island?</p><br />
              <p><input onChange={(e) => handleInputChange(e, 24, 'listening')} value="A" type="radio" checked={listeningAnswers[24] === 'A'} name="question24" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;how exact it is</p>
              <p><input onChange={(e) => handleInputChange(e, 24, 'listening')} value="B" type="radio" checked={listeningAnswers[24] === 'B'} name="question24" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;how early it is</p>
              <p><input onChange={(e) => handleInputChange(e, 24, 'listening')} value="C" type="radio" checked={listeningAnswers[24] === 'C'} name="question24" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;how it was established</p>
            </div>
            <br />
            <p>Questions 25-30</p>
            <p>What action will the students take for each of the following sections of their presentation?</p>
            <p>Choose SIX answers from the box and write the correct letter, A-H, next to Questions 25-30.</p>
            <br />
            <div className="test1">
              <p style={{textAlign: 'center'}}>Actions</p>
              <br />
              <p><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;make it more interactive</p>
              <p><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reduce visual input</p>
              <p><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add personal opinions</p>
              <p><b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contact one of the researchers</p>
              <p><b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;make detailed notes</p>
              <p><b>F</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;find information online</p>
              <p><b>G</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;check timing</p>
              <p><b>H</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;organise the content more clearly</p>
            </div>
            <br />
            <p><b>Sections of presentation</b></p>
            <br />
            <p><b>25</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Introduction <select onChange={(e) => handleInputChange(e, 25, 'listening')} value={listeningAnswers[25] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></p>
            <p><b>26</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discovery of the mammoth tooth <select onChange={(e) => handleInputChange(e, 26, 'listening')} value={listeningAnswers[26] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></p>
            <p><b>27</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Initial questions asked by the researchers <select onChange={(e) => handleInputChange(e, 27, 'listening')} value={listeningAnswers[27] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></p>
            <p><b>28</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Further research carried out on the island <select onChange={(e) => handleInputChange(e, 28, 'listening')} value={listeningAnswers[28] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></p>
            <p><b>29</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Findings and possible explanations <select onChange={(e) => handleInputChange(e, 29, 'listening')} value={listeningAnswers[29] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></p>
            <p><b>30</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Relevance to the present day <select onChange={(e) => handleInputChange(e, 30, 'listening')} value={listeningAnswers[30] || ''}><option>Select</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></p>
            </div>
            <br /><hr /><br />
            {/* section 4 */}
            <div style={{width: '100vh'}} className="">
              <h1 style={{textAlign: 'center'}}>Section 4</h1>
              <br />
              <audio style={{width: '50%'}} controls>
              <source src={audio2_4} type='audio/mp3' />
            </audio><br /><br />
            <p>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>
            <br />
            <div className="headings2">
              <p style={{textAlign: 'center'}}><b>The history of weather forecasting</b></p>
              <br />
              <p><b>Ancient cultures</b></p>
              <br />
              <ul>
                <li>many cultures believed that floods and other disasters were involved in the creation of the world</li>
                <li>many cultures invented <input onChange={(e) => handleInputChange(e, 31, 'listening')} value={listeningAnswers[31] || ''} type="text" placeholder='Question 31' /> and other ceremonies to make the weather gods friendly</li>
                <li>people needed to observe and interpret the sky to ensure their <input onChange={(e) => handleInputChange(e, 32, 'listening')} value={listeningAnswers[32] || ''} type="text" placeholder='Question 32' /></li>
                <li>around 650 BC, Babylonians started forecasting, using weather phenomena such as <input onChange={(e) => handleInputChange(e, 33, 'listening')} value={listeningAnswers[33] || ''} type="text" placeholder='Question 33' /></li>
                <li>by 300 BC, the Chinese had a calendar made up of a number of <input onChange={(e) => handleInputChange(e, 34, 'listening')} value={listeningAnswers[34] || ''} type="text" placeholder='Question 34' /> connected with the weather</li>
              </ul>
              <br />
              <p><b>Ancient Greeks</b></p>
              <br />
              <ul>
                <li>a more scientific approach</li>
                <li>Aristotle tried to explain the formation of various weather phenomena</li>
                <li>Aristotle also described haloes and <input onChange={(e) => handleInputChange(e, 35, 'listening')} value={listeningAnswers[35] || ''} type="text" placeholder='Question 35' /></li>
              </ul>
              <br />
              <p><b>Middle Ages</b></p>
              <br />
              <ul>
                <li>Aristotle's work considered accurate</li>
                <li>many proverbs, e.g. about the significance of the colour of the <input onChange={(e) => handleInputChange(e, 36, 'listening')} value={listeningAnswers[36] || ''} type="text" placeholder='Quesetion 36' /> passed on accurate information.</li>
              </ul>
              <br />
              <p><b>15th-19th centuries</b></p>
              <br />
              <ul>
                <li>15th century: scientists recognised value of <input onChange={(e) => handleInputChange(e, 37, 'listening')} value={listeningAnswers[37] || ''} type="text" placeholder='Question 37' /> for the first time</li>
                <li>Galileo invented the <input onChange={(e) => handleInputChange(e, 38, 'listening')} value={listeningAnswers[38] || ''} type="text" placeholder='Question 38' /></li>
                <li>Pascal showed relationship between atmospheric pressure and altitude</li>
                <li>from the 17th century, scientists could measure atmospheric pressure and temperature</li>
                <li>18th century: Franklin identified the movement of <input onChange={(e) => handleInputChange(e, 39, 'listening')} value={listeningAnswers[39] || ''} type="text" placeholder='Question 39' /></li>
                <li>19th century: data from different locations could be sent to the same place by <input onChange={(e) => handleInputChange(e, 40, 'listening')} value={listeningAnswers[40] || ''} type="text" placeholder='Question 40' /></li>
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

export default Rtest2;