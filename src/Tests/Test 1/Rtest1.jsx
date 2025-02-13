import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sect1 from '../Test 1/gvh/section1ms.png'
import audio1_1 from '../Test 1/gvh/audio1.1.mp3';
import audio1_2 from '../Test 1/gvh/audio1.2.mp3';
import audio1_3 from '../Test 1/gvh/audio1.3.mp3';
import audio1_4 from '../Test 1/gvh/audio1.4.mp3';

  const Heading = styled.h1`text-align: center;`
  const Paragraph = styled.p`text-align: justify; font-size: 1.2rem;`
  const OCnfg = styled.div`display: flex; justify-content: space-between; width: 100%; height: calc(98vh - 100px);`

const Rtest1 = () => {

  const [selected19_20, setSelected19_20] = useState(() => {
    return JSON.parse(sessionStorage.getItem('selected19_20')) || [];
  });

  const [selected21_22, setSelected21_22] = useState(() => {
    return JSON.parse(sessionStorage.getItem('selected21_22')) || [];
  });

  // Generalized state for other checkbox groups
  const [selectedAnswers, setSelectedAnswers] = useState({
    '11_12': [],
    '13_14': []
  });

  // Handle checkbox change for grouped questions (11-12, 13-14)
  const handleCheckboxChange = (questionGroup, option) => {
    if (questionGroup === '11_12' || questionGroup === '13_14') {
      setSelectedAnswers(prevState => {
        const newSelections = prevState[questionGroup].includes(option)
          ? prevState[questionGroup].filter(item => item !== option)
          : prevState[questionGroup].length < 2
          ? [...prevState[questionGroup], option]
          : prevState[questionGroup];

        return {
          ...prevState,
          [questionGroup]: newSelections
        };
      });
    } else if (questionGroup === '19_20') {
      setSelected19_20(prevState => {
        const newSelections = prevState.includes(option)
          ? prevState.filter(item => item !== option)
          : prevState.length < 2
          ? [...prevState, option]
          : prevState;
        return newSelections;
      });
    } else if (questionGroup === '21_22') {
      setSelected21_22(prevState => {
        const newSelections = prevState.includes(option)
          ? prevState.filter(item => item !== option)
          : prevState.length < 2
          ? [...prevState, option]
          : prevState;
        return newSelections;
      });
    }
  };

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
    sessionStorage.setItem('selected19_20', JSON.stringify(selected19_20));
    sessionStorage.setItem('selected21_22', JSON.stringify(selected21_22));
    sessionStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
  }, [currentPage, listeningAnswers, readingAnswers, selected19_20, selected21_22, selectedAnswers]);

  const handleInputChange = (e, questionNumber, section) => {
    const newValue = e.target.value;
    if (section === 'listening') {
      setListeningAnswers({ ...listeningAnswers, [questionNumber]: newValue });
    } else if (section === 'reading') {
      setReadingAnswers({ ...readingAnswers, [questionNumber]: newValue });
    }
  };

  const handleSubmit = () => {
    setReadingAnswers({
      ...readingAnswers,
      19: selected19_20[0] || '',
      20: selected19_20[1] || '',
      21: selected21_22[0] || '',
      22: selected21_22[1] || '',
    });

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
          <Heading>THE IMPORTANCE OF CHILDREN'S PLAY</Heading> <br />
          <Paragraph>
            Brick by brick, six-year-old Alice is building a magical kingdom. Imagining fairy-tale turrets and fire-breathing dragons, wicked witches and gallant heroes, she's creating an enchanting world. Although she isn't aware of it, this fantasy is helping her take her first steps towards her capacity for creativity and so it will have important repercussions in her adult life.
<br /><br />Minutes later, Alice has abandoned the kingdom in favour of playing schools with her younger brother. When she bosses him around as his 'teacher', she's practising how to regulate her emotions through pretence. Later on, when they tire of this and settle down with a board game, she's learning about the need to follow rules and take turns with a partner.
<br /><br />'Play in all its rich variety is one of the highest achievements of the human species,' says Dr David Whitebread from the Faculty of Education at the University of Cambridge, UK. 'It underpins how we develop as intellectual, problem-solving adults and is crucial to our success as a highly adaptable species.'
<br /><br />Recognising the importance of play is not new: over two millennia ago, the Greek philosopher Plato extolled its virtues as a means of developing skills for adult life, and ideas about play-based learning have been developing since the 19th century.
<br /><br />But we live in changing times, and Whitebread is mindful of a worldwide decline in play, pointing out that over half the people in the world now live in cities. 'The opportunities for free play, which I experienced almost every day of my childhood, are becoming increasingly scarce,' he says. Outdoor play is curtailed by perceptions of risk to do with traffic, as well as parents' increased wish to protect their children from being the victims of crime, and by the emphasis on 'earlier is better' which is leading to greater competition in academic learning and schools.
<br /><br />International bodies like the United Nations and the European Union have begun to develop policies concerned with children's right to play, and to consider implications for leisure facilities and educational programmes. But what they often lack is the evidence to base policies on.
<br /><br />"The type of play we are interested in is child-initiated, spontaneous and unpredictable - but, as soon as you ask a five-year-old "to play", then you as the researcher have intervened,' explains Dr Sara Baker. And we want to know what the long-term impact of play is. It's a real challenge.'
<br /><br />Dr Jenny Gibson agrees, pointing out that although some of the steps in the puzzle of how and why play is important have been looked at, there is very little data on the impact it has on the child's later life.
<br /><br />Now, thanks to the university's new Centre for Research on Play in Education, Development and Learning (PEDAL), Whitebread, Baker, Gibson and a team of researchers hope to provide evidence on the role played by play in how a child develops.
<br /><br />'A strong possibility is that play supports the early development of children's self-control,' explains Baker. "This is our ability to develop awareness of our own thinking processes-it influences how effectively we go about undertaking challenging activities.'
<br /><br />In a study carried out by Baker with toddlers and young pre-schoolers, she found that children with greater self-control solved problems more quickly when exploring an unfamiliar set-up requiring scientific reasoning. "This sort of evidence makes us think that giving children the chance to play will make them more successful problem-solvers in the long run.'
<br /><br />If playful experiences do facilitate this aspect of development, say the researchers, it could be extremely significant for educational practices, because the ability to self-regulate has been shown to be a key predictor of academic performance.
<br /><br />Gibson adds: 'Playful behaviour is also an important indicator of healthy social and emotional development. In my previous research, I investigated how observing children at play can give us important clues about their well-being and can even be useful in the diagnosis of neurodevelopmental disorders like autism.'
<br /><br />Whitebread's recent research has involved developing a play-based approach to supporting children's writing. 'Many primary school children find writing difficult, but we showed in a previous study that a playful stimulus was far more effective than an instructional one.' Children wrote longer and better-structured stories when they first played with dolls representing characters in the story. In the latest study, children first created their story with Lego*, with similar results. 'Many teachers commented that they had always previously had children saying they didn't know what to write about. With the Lego building, however, not a single child said this through the whole year of the project.'
<br /><br />Whitebread, who directs PEDAL, trained as a primary school teacher in the early 1970s, when, as he describes, "the teaching of young children was largely a quiet backwater, untroubled by any serious intellectual debate or controversy.' Now, the landscape is very different, with hotly debated topics such as school starting age.
<br /><br />"Somehow the importance of play has been lost in recent decades. It's regarded as something trivial, or even as something negative that contrasts with "work". Let's not lose sight of its benefits, and the fundamental contributions it makes to human achievements in the arts, sciences and technology. Let's make sure children have a rich diet of play experiences.'
        </Paragraph>
        </div>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <p>Questions 1-8</p>
          <p>Complete the notes below.</p>
          <p>Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p><br /><br />
          <div className='test1'>
            <h1 style={{textAlign: 'center'}}>Children's play</h1>
            <p><b>Uses of children's play</b></p> <br />
            <ul>
              <li>building a 'magical kingdom' may help develop <input type="text" onChange={(e) => handleInputChange(e, 1, 'reading')} value={readingAnswers[1] || ''} placeholder='Question 1' /></li>
              <li>board games involve and <input type="text" onChange={(e) => handleInputChange(e, 2, 'reading')} value={readingAnswers[2] || ''} placeholder='Question 2' /> turn-taking</li>
            </ul>
            <br /><p><b>Recent changes affecting children's play</b></p><br />
            <ul>
              <li>population of <input type="text" onChange={(e) => handleInputChange(e, 3, 'reading')} value={readingAnswers[3] || ''}  placeholder='Question 3' /> have grown</li>
              <li>opportunities for free play are limited due to</li>
              <p><b>-</b> fear of <input type="text" onChange={(e) => handleInputChange(e, 4, 'reading')} value={readingAnswers[4] || ''}  placeholder='Question 4' /></p>
              <p><b>-</b> fear of <input type="text" onChange={(e) => handleInputChange(e, 5, 'reading')} value={readingAnswers[5] || ''}  placeholder='Question 5' /></p>
              <p><b>-</b> increased in <input type="text" onChange={(e) => handleInputChange(e, 6, 'reading')} value={readingAnswers[6] || ''}  placeholder='Question 6' /> schools</p>
            </ul>
            <br /><p><b>International policies on children's play</b></p> <br />
            <ul>
              <li>it is difficult to find <input type="text" onChange={(e) => handleInputChange(e, 7, 'reading')} value={readingAnswers[7] || ''}  placeholder='Question 7' /> to support new policies</li>
              <li>research needs to study the impact of play on the rest of the child's <input type="text" onChange={(e) => handleInputChange(e, 8, 'reading')} value={readingAnswers[8] || ''}  placeholder='Question 8' /></li>
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
          <div>
            <p><b>9</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children with good self-control are known to be likely to do well at school later on. <select onChange={(e) => handleInputChange(e, 9, 'reading')} value={readingAnswers[9] || ''}  id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
            <p><b>10</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The way a child plays may provide information about possible medical problems. <select onChange={(e) => handleInputChange(e, 10, 'reading')} value={readingAnswers[10] || ''}  id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
            <p><b>11</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Playing with dolls was found to benefit girls' writing more than boys' writing. <select onChange={(e) => handleInputChange(e, 11, 'reading')} value={readingAnswers[11] || ''}  id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
            <p><b>12</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children had problems thinking up ideas when they first created the story with Lego. <select onChange={(e) => handleInputChange(e, 12, 'reading')} value={readingAnswers[12] || ''}  id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
            <p><b>13</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;People nowadays regard children's play as less significant than they did in the past. <select onChange={(e) => handleInputChange(e, 13, 'reading')} value={readingAnswers[13] || ''}  id="tfng" name="tfng"><option value="Select">Select</option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          </div>
        </div>
      </OCnfg>)}

      {/* PASSAGE 2 */}
      {currentPage === 2 && (
      <OCnfg className='passage2'>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <h1>Passage 2</h1>
          <Heading>The growth of bike-sharing schemes around the world</Heading>
          <h2 style={{textAlign: 'center'}}>How Dutch engineer Luud Schimmelpennink helped to devise urban bike-sharing schemes</h2><br />
          <Paragraph>
<b>A</b><br /><br /> The original idea for an urban bike-sharing scheme dates back to a summer's day in Amsterdam in 1965. Provo, the organisation that came up with the idea, was a group of Dutch activists who wanted to change society. They believed the scheme, which was known as the Witte Fietsenplan, was an answer to the perceived threats of air pollution and consumerism. In the centre of Amsterdam, they painted a small number of used bikes white. They also distributed leaflets describing the dangers of cars and inviting people to use the white bikes. The bikes were then left unlocked at various locations around the city, to be used by anyone in need of transport.
<br /><br /><b>B</b><br /><br /> Luud Schimmelpennink, a Dutch industrial engineer who still lives and cycles in Amsterdam, was heavily involved in the original scheme. He recalls how the scheme succeeded in attracting a great deal of attention - particularly when it came to publicising Provo's aims-but struggled to get off the ground. The police were opposed to Provo's initiatives and almost as soon as the white bikes were distributed around the city, they removed them. However, for Schimmelpennink and for bike-sharing schemes in general, this was just the beginning. The first Witte Fietsenplan was just a symbolic thing,' he says. 'We painted a few bikes white, that was all. Things got more serious when I became a member of the Amsterdam city council two years later.'
<br /><br /><b>C</b><br /><br /> Schimmelpennink seized this opportunity to present a more elaborate Witte Fietsenplan to the city council. 'My idea was that the municipality of Amsterdam would distribute 10,000 white bikes over the city, for everyone to use,' he explains. 'I made serious calculations. It turned out that a white bicycle - per person, per kilometre - would cost the municipality only 10% of what it contributed to public transport per person per kilometre.' Nevertheless, the council unanimously rejected the plan. They said that the bicycle belongs to the past. They saw a glorious future for the car,' says Schimmelpennink. But he was not in the least discouraged.
<br /><br /><b>D</b><br /><br /> Schimmelpennink never stopped believing in bike-sharing, and in the mid-90s, two Danes asked for his help to set up a system in Copenhagen. The result was the world's first large-scale bike-share programme. It worked on a deposit: 'You dropped a coin in the bike and when you returned it, you got your money back.' After setting up the Danish system, Schimmelpennink decided to try his luck again in the Netherlands - and this time he succeeded in arousing the interest of the Dutch Ministry of Transport. 'Times had changed,' he recalls. 'People had become more environmentally conscious, and the Danish experiment had proved that bike-sharing was a real possibility.' A new Witte Fietsenplan was launched in 1999 in Amsterdam. However, riding a white bike was no longer free; it cost one guilder per trip and payment was made with a chip card developed by the Dutch bank Postbank. Schimmelpennink designed conspicuous, sturdy white bikes locked in special racks which could be opened with the chip card - the plan started with 250 bikes, distributed over five stations.
<br /><br /><b>E</b><br /><br /> Theo Molenaar, who was a system designer for the project, worked alongside Schimmelpennink. 'I remember when we were testing the bike racks, he announced that he had already designed better ones. But of course, we had to go through with the ones we had.' The system, however, was prone to vandalism and theft. 'After every weekend there would always be a couple of bikes missing.' Molenaar says. 'I really have no idea what people did with them, because they could instantly be recognised as white bikes.' But the biggest blow came when Postbank decided to abolish the chip card, because it wasn't profitable. 'That chip card was pivotal to the system, Molenaar says. 'To continue the project we would have needed to set up another system, but the business partner had lost interest.'
<br /><br /><b>F</b><br /><br /> Schimmelpennink was disappointed, but - characteristically- not for long. In 2002 he got a call from the French advertising corporation JC Decaux, who wanted to set up his bike-sharing scheme in Vienna. That went really well. After Vienna, they set up a system in Lyon. Then in 2007, Paris followed. That was a decisive moment in the history of bike-sharing.' The huge and unexpected success of the Parisian bike-sharing programme, which now boasts more than 20,000 bicycles, inspired cities all over the world to set up their own schemes, all modelled on Schimmelpennink's. 'It's wonderful that this happened,' he says. 'But financially I didn't really benefit from it, because I never filed for a patent.'
<br /><br /><b>G</b><br /><br /> In Amsterdam today, 38% of all trips are made by bike and, along with Copenhagen, it is regarded as one of the two most cycle-friendly capitals in the world but the city never got another Witte Fietsenplan. Molenaar believes this may be because everybody in Amsterdam already has a bike. Schimmelpennink, however, cannot see that this changes Amsterdam's need for a bike-sharing scheme. 'People who travel on the underground don't carry their bikes around. But often they need additional transport to reach their final destination.' Although he thinks it is strange that a city like Amsterdam does not have a successful bike- sharing scheme, he is optimistic about the future. 'In the '60s we didn't stand a chance because people were prepared to give their lives to keep cars in the city. But that mentality has totally changed. Today everybody longs for cities that are not dominated by cars.'
          </Paragraph>
        </div>
        <div  style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <p>Questions 14-18</p>
          <p>Reading Passage 2 has seven paragraphs, <b>A-G</b>.</p>
          <p>Which paragraph contains the following information?</p>
          <p>Write the correct letter, <b>A-G</b>, in boxes 14-18 on your answer sheet.</p><br />
          <p><b>NB</b> You may use any letter more than once.</p><br /><br />
          <div>
            <p><b>14</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a description of how people misused a bike-sharing scheme <input onChange={(e) => handleInputChange(e, 14, 'reading')} value={readingAnswers[14] || ''}  type="text" placeholder='Answer' /></p>
            <p><b>15</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;an explanation of why a proposed bike-sharing scheme was turned down <input onChange={(e) => handleInputChange(e, 15, 'reading')} value={readingAnswers[15] || ''}  type="text" placeholder='Answer' /></p>
            <p><b>16</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a reference to a person being unable to profit from their work <input onChange={(e) => handleInputChange(e, 16, 'reading')} value={readingAnswers[16] || ''}  type="text" placeholder='Answer' /></p>
            <p><b>17</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;an explanation of the potential savings a bike-sharing scheme would bring <input onChange={(e) => handleInputChange(e, 17, 'reading')} value={readingAnswers[17] || ''}  type="text" placeholder='Answer' /></p>
            <p><b>18</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a reference to the problems a bike-sharing scheme was intended to solve <input onChange={(e) => handleInputChange(e, 18, 'reading')} value={readingAnswers[18] || ''}  type="text" placeholder='Answer' /></p>
          </div>
          <br /><hr /><br />
          <p>Questions 19 and 20</p>
<p>Which <b>TWO</b> of the following statements are made in the text about the Amsterdam bike-sharing scheme of 1999?</p>
<br />
{[
  { option: 'A', description: 'It was initially opposed by a government department.' },
  { option: 'B', description: 'It failed when a partner in the scheme withdrew support.' },
  { option: 'C', description: 'It aimed to be more successful than the Copenhagen scheme.' },
  { option: 'D', description: 'It was made possible by a change in people\'s attitudes.' },
  { option: 'E', description: 'It attracted interest from a range of bike designers.' }
].map(({ option, description }) => (
  <p key={`19_20-${option}`}>
    <input
      type="checkbox"
      checked={selected19_20.includes(option)}
      onChange={() => handleCheckboxChange('19_20', option)}
    />
    <b>&nbsp;{option}</b>&nbsp;&nbsp;&nbsp;&nbsp;{description}
  </p>
))}
<br />
<p>Questions 21 and 22</p>
<p>Which <b>TWO</b> of the following statements are made in the text about Amsterdam today?</p>
<br />
{[
  { option: 'A', description: 'The majority of residents would like to prevent all cars from entering the city.' },
  { option: 'B', description: 'There is little likelihood of the city having another bike-sharing scheme.' },
  { option: 'C', description: 'More trips in the city are made by bike than by any other form of transport.' },
  { option: 'D', description: 'A bike-sharing scheme would benefit residents who use public transport.' },
  { option: 'E', description: 'The city has a reputation as a place that welcomes cyclists.' }
].map(({ option, description }) => (
  <p key={`21_22-${option}`}>
    <input
      type="checkbox"
      checked={selected21_22.includes(option)}
      onChange={() => handleCheckboxChange('21_22', option)}
    />
    <b>&nbsp;{option}</b>&nbsp;&nbsp;&nbsp;&nbsp;{description}
  </p>
))}
          <br /><hr /><br />
          <p>Questions 23-26</p>
          <p>Complete the summary below.</p>
          <p>Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p> <br />
          <p style={{textAlign: 'center'}}><b>The first urban bike-sharing scheme</b></p><br />
          <p style={{textAlign: 'justify'}}>
          The first bike-sharing scheme was the idea of the Dutch group Provo. The people who belonged to this group were <input onChange={(e) => handleInputChange(e, 23, 'reading')} value={readingAnswers[23] || ''} type="text" placeholder='Question 23' />. They were concerned about damage to the environment and about <input type="text" onChange={(e) => handleInputChange(e, 24, 'reading')} value={readingAnswers[24] || ''} placeholder='Question 24' />, and believed that the bike-sharing scheme would draw attention to these issues. As well as painting some bikes white, they handed out <input type="text" onChange={(e) => handleInputChange(e, 25, 'reading')} value={readingAnswers[25] || ''} placeholder='Question 25' /> that condemned the use of cars.
          <br /><br />
          However, the scheme was not a great success: almost as quickly as Provo left the bikes around the city, the <input onChange={(e) => handleInputChange(e, 26, 'reading')} value={readingAnswers[26] || ''} type="text" placeholder='Question 26' /> took them away. According to Schimmelpennink, the scheme was intended to be symbolic. The idea was to get people thinking about the issues.
          </p>
        </div>
      </OCnfg>)}

      {/* PASSAGE 3 */}
      {currentPage === 3 && (
      <OCnfg className='passage3'>
        <div style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <h1>Passage 3</h1>
          <Heading>Motivational factors and the hospitality industry</Heading><br />
          <Paragraph>
            A critical ingredient in the success of hotels is developing and maintaining superior performance from their employees. How is that accomplished? What Human Resource Management (HRM) practices should organizations invest in to acquire and retain great employees?
<br /><br />Some hotels aim to provide superior working conditions for their employees. The idea originated from workplaces-usually in the non-service sector- that emphasized fun and enjoyment as part of work-life balance. By contrast, the service sector, and more specifically hotels, has traditionally not extended these practices to address basic employee needs, such as good working conditions.
<br /><br />Pfeffer (1994) emphasizes that in order to succeed in a global business environment, organizations must make investment in Human Resource Management (HRM) to allow them to acquire employees who possess better skills and capabilities than their competitors. This investment will be to their competitive advantage. Despite this recognition of the importance of employee development, the hospitality industry has historically been dominated by underdeveloped HR practices (Lucas, 2002).
<br /><br />Lucas also points out that 'the substance of HRM practices does not appear to be designed to foster constructive relations with employees or to represent a managerial approach that enables developing and drawing out the full potential of people, even though employees may be broadly satisfied with many aspects of their work' (Lucas, 2002). In addition, or maybe as a result, high employee turnover has been a recurring problem throughout the hospitality industry. Among the many cited reasons are low compensation, inadequate benefits, poor working conditions and compromised employee morale and attitudes (Maroudas et al., 2008).
<br /><br />Ng and Sorensen (2008) demonstrated that when managers provide recognition to employees, motivate employees to work together, and remove obstacles preventing effective performance, employees feel more obligated to stay with the company. This was succinctly summarized by Michel et al. (2013): '[P]roviding support to employees gives them the confidence to perform their jobs better and the motivation to stay with the organization.' Hospitality organizations can therefore enhance employee motivation and retention through the development and improvement of their working conditions. These conditions are inherently linked to the working environment.
<br /><br />While it seems likely that employees' reactions to their job characteristics could be affected by a predisposition to view their work environment negatively, no evidence exists to support this hypothesis (Spector et al., 2000). However, given the opportunity, many people will find something to complain about in relation to their workplace (Poulston, 2009). There is a strong link between the perceptions of employees and particular factors of their work environment that are separate from the work itself, including company policies, salary and vacations.
<br /><br />Such conditions are particularly troubling for the luxury hotel market, where high-quality service, requiring a sophisticated approach to HRM, is recognized as a critical source of competitive advantage (Maroudas et al., 2008). In a real sense, the services of hotel employees represent their industry (Schneider and Bowen, 1993). This representation has commonly been limited to guest experiences. This suggests that there has been a dichotomy between the guest environment provided in luxury hotels and the working conditions of their employees.
<br /><br />It is therefore essential for hotel management to develop HRM practices that enable them to inspire and retain competent employees. This requires an understanding of what motivates employees at different levels of management and different stages of their careers (Enz and Siguaw, 2000). This implies that it is beneficial for hotel managers to understand what practices are most favorable to increase employee satisfaction and retention.
<br /><br />Herzberg (1966) proposes that people have two major types of needs, the first being extrinsic motivation factors relating to the context in which work is performed, rather than the work itself. These include working conditions and job security. When these factors are unfavorable, job dissatisfaction may result. Significantly, though, just fulfilling these needs does not result in satisfaction, but only in the reduction of dissatisfaction (Maroudas et al., 2008).
<br /><br />Employees also have intrinsic motivation needs or motivators, which include such factors as achievement and recognition. Unlike extrinsic factors, motivator factors may ideally result in job satisfaction (Maroudas et al., 2008). Herzberg's (1966) theory discusses the need for a 'balance' of these two types of needs.
<br /><br />The impact of fun as a motivating factor at work has also been explored. For example, Tews, Michel and Stafford (2013) conducted a study focusing on staff from a chain of themed restaurants in the United States. It was found that fun activities had a favorable impact on performance and manager support for fun had a favorable impact in reducing turnover. Their findings support the view that fun may indeed have a beneficial effect, but the framing of that fun must be carefully aligned with both organizational goals and employee characteristics. 'Managers must learn how to achieve the delicate balance of allowing employees the freedom to enjoy themselves at work while simultaneously maintaining high levels of performance' (Tews et al., 2013).
<br /><br />Deery (2008) has recommended several actions that can be adopted at the organizational level to retain good staff as well as assist in balancing work and family life. Those particularly appropriate to the hospitality industry include allowing adequate breaks during the working day, staff functions that involve families, and providing health and well-being opportunities.
          </Paragraph>
        </div>
        <div  style={{width: '50%', overflowY: 'scroll', padding: '20px'}}>
          <p>Questions 27-31</p>
          <p>Look at the following statements (QuestioAns 27-31) and the list of researchers below.</p>
          <p>Match each statement with the correct researcher, <b>A-F</b>.</p>
          <p>Write the correct letter, <b>A-F</b>, in boxes 27-31 on your answer sheet.</p><br /> 
          <p><b>NB</b> You may use any letter more than once.</p><br /><br />
          <div>
            <p><b>27</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hotel managers need to know what would encourage good staff to remain. <select onChange={(e) => handleInputChange(e, 27, 'reading')} value={readingAnswers[27] || ''} name="researchers" id=""><option value="Select">Select</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option></select></p>
            <p><b>28</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The actions of managers may make staff feel they shouldn't move to a different employer. <select onChange={(e) => handleInputChange(e, 28, 'reading')} value={readingAnswers[28] || ''} name="researchers" id=""><option value="Select">Select</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option></select></p>
            <p><b>29</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Little is done in the hospitality industry to help workers improve their skills. <select onChange={(e) => handleInputChange(e, 29, 'reading')} value={readingAnswers[29] || ''} name="researchers" id=""><option value="Select">Select</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option></select></p>
            <p><b>30</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Staff are less likely to change jobs if cooperation is encouraged. <select onChange={(e) => handleInputChange(e, 30, 'reading')} value={readingAnswers[30] || ''} name="researchers" id=""><option value="Select">Select</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option></select></p>
            <p><b>31</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dissatisfaction with pay is not the only reason why hospitality workers change jobs. <select onChange={(e) => handleInputChange(e, 31, 'reading')} value={readingAnswers[31] || ''} name="researchers" id=""><option value="Select">Select</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option></select></p>
          </div>
          <br />
          <div className='headings1'>
            <p style={{textAlign: 'center'}}>List of Researchers</p><br />
            <p><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pfeffer</p>
            <p><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lucas</p>
            <p><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maroudas et al.</p>
            <p><b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ng and Sorensen</p>
            <p><b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enz and Siguaw</p>
            <p><b>F</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deery</p>
          </div>
          <br /><hr /><br />
          <p>Questions 32-35</p>
          <p>Do the following statements agree with the claims of the writer in Reading Passage 3?</p>
          <p>In boxes 32-35 on your answer sheet, write</p>
          <br />
          <p><b>YES</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement agrees with the claims of the writer</p>
          <p><b>NO</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if the statement contradicts the claims of the writer</p>
          <p><b>NOT GIVEN</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if it is impossible to say what the writer thinks about this</p>
          <br /><br />
          <p><b>32</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One reason for high staff turnover in the hospitality industry is poor morale. <select onChange={(e) => handleInputChange(e, 32, 'reading')} value={readingAnswers[32] || ''} name="YNNG" id="YNNG"><option value="Select">Select</option><option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>33</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Research has shown that staff have a tendency to dislike their workplace. <select onChange={(e) => handleInputChange(e, 33, 'reading')} value={readingAnswers[33] || ''} name="YNNG" id="YNNG"><option value="Select">Select</option><option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>34</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An improvement in working conditions and job security makes staff satisfied with their jobs. <select onChange={(e) => handleInputChange(e, 34, 'reading')} value={readingAnswers[34] || ''} name="YNNG" id="YNNG"><option value="Select">Select</option><option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
          <p><b>35</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Staff should be allowed to choose when they take breaks during the working day. <select onChange={(e) => handleInputChange(e, 35, 'reading')} value={readingAnswers[35] || ''} name="YNNG" id="YNNG"><option value="Select">Select</option><option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option></select></p>
        <br /><hr /><br />
        <p>Questions 36-40</p>
        <p>Complete the summary below.</p>
        <p>Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p>
        <p>Write your answers in boxes 36-40 on your answer sheet.</p> <br />
        <p style={{textAlign: 'center'}}><b>Fun at work</b></p>
        <p style={{textAlign: 'justify'}}> <br />
        Tews, Michel and Stafford carried out research on staff in an American chain of <input type="text" onChange={(e) => handleInputChange(e, 36, 'reading')} value={readingAnswers[36] || ''} placeholder='Quesetion 36' /> discovered that activities designed for staff to have fun improved their <input type="text" onChange={(e) => handleInputChange(e, 37, 'reading')} value={readingAnswers[37] || ''} placeholder='Quesetion 37' /> and that management involvement led to lower staff <input type="text" value={readingAnswers[38] || ''} onChange={(e) => handleInputChange(e, 38, 'reading')} placeholder='Quesetion 38' />. They also found that the activities needed to fit with both the company's <input type="text" onChange={(e) => handleInputChange(e, 39, 'reading')} value={readingAnswers[39] || ''} placeholder='Quesetion 39' /> and the <input type="text" onChange={(e) => handleInputChange(e, 40, 'reading')} value={readingAnswers[40] || ''} placeholder='Quesetion 40' /> the staff. A balance was required between a degree of freedom and maintaining work standards.
        </p>
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
                <source src={audio1_1} type='audio/mp3' />
              </audio><br /><br />
              <p>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>
              <br />
              <img src={sect1} style={{width: '60%', position: 'relative', left: '20%'}} alt="" />
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
            <h1 style={{textAlign: 'center'}}>SECTION 2</h1><br />
            <audio style={{width: '50%'}} controls>
              <source src={audio1_2} type='audio/mp3' />
            </audio>
            <br /><br />
            <h1 style={{textAlign: 'center'}}>Induction talk for new apprentices</h1>
          <div>
            <p>Questions 11 and 12</p>
            <p>Which <b>TWO</b> pieces of advice for the first week of an apprenticeship does the manager give?</p>
          <br />
            <p><input type="checkbox" name="" id="" /><b>&nbsp;A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get to know colleagues.</p>
            <p><input type="checkbox" name="" id="" /><b>&nbsp;B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;learn from any mistakes.</p>
            <p><input type="checkbox" name="" id="" /><b>&nbsp;C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ask lots of questions.</p>
            <p><input type="checkbox" name="" id="" /><b>&nbsp;D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;react positively to feedback.</p>
            <p><input type="checkbox" name="" id="" /><b>&nbsp;E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enjoy new challenges.</p>
            <br />
            <input type="text" onChange={(e) => handleInputChange(e, 11, 'listening')} value={listeningAnswers[11] || ''} placeholder='Question 11' />
            <input type="text" onChange={(e) => handleInputChange(e, 12, 'listening')} value={listeningAnswers[12] || ''} placeholder='Question 12' />
          </div>
          <br />
           <div>
            <p>Questions 13 and 14</p>
            <p>Which <b>TWO</b> things does the manager say mentors can help with?</p>
            <br />
            <p><input type="checkbox" name="" id="" /><b>&nbsp;A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;confidence-building</p>
            <p><input type="checkbox" name="" id="" /><b>&nbsp;B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;making career plans</p>
            <p><input type="checkbox" name="" id="" /><b>&nbsp;C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;completing difficult tasks </p>
            <p><input type="checkbox" name="" id="" /><b>&nbsp;D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;making a weekly timetable </p>
            <p><input type="checkbox" name="" id="" /><b>&nbsp;E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reviewing progress</p>
            <br />
            <input type="text" onChange={(e) => handleInputChange(e, 13, 'listening')} value={listeningAnswers[13] || ''} placeholder='Question 13' />
            <input type="text" onChange={(e) => handleInputChange(e, 14, 'listening')} value={listeningAnswers[14] || ''} placeholder='Question 14' />
          </div>
          <br /><br />
          <p>Questions 15-20</p>
          <p>What does the manager say about each of the following aspects of the company policy for apprentices?</p>
          <p>Write the correct letter, <b>A</b>, <b>B</b> or <b>C</b>, next to Questions 15-20.</p> <br />
          <div className='headings1'>
            <p><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is encouraged.</p>
            <p><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are some restrictions.</p>
            <p><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is against the rules.</p>
            </div><br />
            <p><b>Company policy for apprentices</b></p><br />
            <p><b>15</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using the internet <input onChange={(e) => handleInputChange(e, 15, 'listening')} value={listeningAnswers[15] || ''} type="text" placeholder='Answer' /></p>
            <p><b>16</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flexible working <input onChange={(e) => handleInputChange(e, 16, 'listening')} value={listeningAnswers[16] || ''} type="text" placeholder='Answer' /></p>
            <p><b>17</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Booking holidays <input onChange={(e) => handleInputChange(e, 17, 'listening')} value={listeningAnswers[17] || ''} type="text" placeholder='Answer' /></p>
            <p><b>18</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Working overtime <input onChange={(e) => handleInputChange(e, 18, 'listening')} value={listeningAnswers[18] || ''} type="text" placeholder='Answer' /></p>
            <p><b>19</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wearing trainers <input onChange={(e) => handleInputChange(e, 19, 'listening')} value={listeningAnswers[19] || ''} type="text" placeholder='Answer' /></p>
            <p><b>20</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bringing food to work <input onChange={(e) => handleInputChange(e, 20, 'listening')} value={listeningAnswers[20] || ''} type="text" placeholder='Answer' /></p>
            </div>
            <br /><hr /><br />
            {/* section 3 */}
            <div style={{width: '100vh'}} className="">
              <h1 style={{textAlign: 'center'}}>Section 3</h1><br />
              <audio style={{width: '50%'}} controls>
              <source src={audio1_3} type='audio/mp3' />
            </audio> <br /><br />
            <p>Questions 21-25</p>
            <p>Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.</p>
            <p style={{textAlign: 'center'}}><b>Cities built by the sea</b></p><br /> 
            <div>
              <p>&nbsp;<b>21</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Carla and Rob were surprised to learn that coastal cities</p><br />
              <p><input onChange={(e) => handleInputChange(e, 21, 'listening')} value="A" type="radio" checked={listeningAnswers[21] === 'A'} name="question21" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contain nearly half the world's population.</p>
              <p><input onChange={(e) => handleInputChange(e, 21, 'listening')} value="B" type="radio" checked={listeningAnswers[21] === 'B'} name="question21" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;include most of the world's largest cities.</p>
              <p><input onChange={(e) => handleInputChange(e, 21, 'listening')} value="C" type="radio" checked={listeningAnswers[21] === 'C'} name="question21" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;are growing twice as fast as other cities.</p>
            </div>
            <br />
            <div>
              <p>&nbsp;<b>22</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;According to Rob, building coastal cities near to rivers</p><br />
              <p><input onChange={(e) => handleInputChange(e, 22, 'listening')} value="A" checked={listeningAnswers[22] === 'A'} type="radio" name="question22" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;may bring pollution to the cities.</p>
              <p><input onChange={(e) => handleInputChange(e, 22, 'listening')} value="B" checked={listeningAnswers[22] === 'B'} type="radio" name="question22" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;may reduce the land available for agriculture.</p>
              <p><input onChange={(e) => handleInputChange(e, 22, 'listening')} value="C" checked={listeningAnswers[22] === 'C'} type="radio" name="question22" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;may mean the countryside is spoiled by industry.</p>
            </div>
            <br />
            <div>
              <p>&nbsp;<b>23</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What mistake was made when building water drainage channels in Miami in the 1950s?</p><br />
              <p><input onChange={(e) => handleInputChange(e, 23, 'listening')} value="A" checked={listeningAnswers[23] === 'A'} type="radio" name="question23" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There were not enough of them.</p>
              <p><input onChange={(e) => handleInputChange(e, 23, 'listening')} value="B" checked={listeningAnswers[23] === 'B'} type="radio" name="question23" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;They were made of unsuitable materials.</p>
              <p><input onChange={(e) => handleInputChange(e, 23, 'listening')} value="C" checked={listeningAnswers[23] === 'C'} type="radio" name="question23" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;They did not allow for the effects of climate change.</p>
            </div>
            <br />
            <div>
              <p>&nbsp;<b>24</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What do Rob and Carla think that the authorities in Miami should do immediately?</p><br />
              <p><input onChange={(e) => handleInputChange(e, 24, 'listening')} value="A" checked={listeningAnswers[24] === 'A'} type="radio" name="question24" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;take measures to restore ecosystems</p>
              <p><input onChange={(e) => handleInputChange(e, 24, 'listening')} value="B" checked={listeningAnswers[24] === 'B'} type="radio" name="question24" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pay for a new flood prevention system</p>
              <p><input onChange={(e) => handleInputChange(e, 24, 'listening')} value="C" checked={listeningAnswers[24] === 'C'} type="radio" name="question24" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stop disposing of waste materials into the ocean</p>
            </div>
            <br />
            <div>
              <p>&nbsp;<b>25</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What do they agree should be the priority for international action?</p><br />
              <p><input onChange={(e) => handleInputChange(e, 25, 'listening')} value="A" checked={listeningAnswers[25] === 'A'} type="radio" name="question25" />&nbsp;<b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;greater coordination of activities</p>
              <p><input onChange={(e) => handleInputChange(e, 25, 'listening')} value="B" checked={listeningAnswers[25] === 'B'} type="radio" name="question25" />&nbsp;<b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;more sharing of information</p>
              <p><input onChange={(e) => handleInputChange(e, 25, 'listening')} value="C" checked={listeningAnswers[25] === 'C'} type="radio" name="question25" />&nbsp;<b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;agreement on shared policies</p>
            </div>
            <br /><br />
            <p>Questions 26-30</p>
            <p>What decision do the students make about each of the following parts of their presentation?</p>
            <p>Choose FIVE answers from the box and write the correct letter, <b>A-G</b>, next to Questions 26-30.</p>
           <br />
            <div className='headings1'>
              <p style={{textAlign: 'center'}}><b>Decisions</b></p> 
              <br />
              <p><b>A</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;use visuals</p>
              <p><b>B</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;keep it short</p>
              <p><b>C</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;involve other students</p>
              <p><b>D</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;check the information is accurate</p>
              <p><b>E</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;provide a handout</p>
              <p><b>F</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;focus on one example</p>
              <p><b>G</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;do online research</p>
            </div><br />
            <p><b>Parts of the presentation</b></p> <br /> 
            <p><b>26</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Historical background <input onChange={(e) => handleInputChange(e, 26, 'listening')} value={listeningAnswers[26] || ''} type="text" placeholder='Answer' /></p> 
            <p><b>27</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Geographical factors <input onChange={(e) => handleInputChange(e, 27, 'listening')} value={listeningAnswers[27] || ''} type="text" placeholder='Answer' /></p> 
            <p><b>28</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Past mistakes <input onChange={(e) => handleInputChange(e, 28, 'listening')} value={listeningAnswers[28] || ''} type="text" placeholder='Answer' /></p> 
            <p><b>29</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Future risks <input onChange={(e) => handleInputChange(e, 29, 'listening')} value={listeningAnswers[29] || ''} type="text" placeholder='Answer' /></p>         
            <p><b>30</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;International implications <input onChange={(e) => handleInputChange(e, 30, 'listening')} value={listeningAnswers[30] || ''} type="text" placeholder='Answer' /></p>
            </div>
            <br /><hr /><br />
            {/* section 4 */}
            <div style={{width: '100vh'}} className="">
              <h1 style={{textAlign: 'center'}}>Section 4</h1><br />
              <audio style={{width: '50%'}} controls>
              <source src={audio1_4} type='audio/mp3' />
            </audio><br /><br />
            <p>Write <b>ONE WORD ONLY</b> for each answer.</p><br />
            <div className='headings2'>
              <p style={{textAlign: 'center'}}><b>Marine renewable energy (ocean energy)</b></p>
              <p><b>Introduction</b></p><br />
              <p>More energy required because of growth in population and <input onChange={(e) => handleInputChange(e, 31, 'listening')} value={listeningAnswers[31] || ''} type="text" placeholder='Question 31' /></p>
              <p>What's needed:</p>
              <ul>
                <li>renewable energy sources</li>
                <li>methods that won't create pollution</li>
              </ul><br />
              <p><b>Wave energy</b></p><br />
              <p>Advantage: waves provide a <input onChange={(e) => handleInputChange(e, 32, 'listening')} value={listeningAnswers[32] || ''} type="text" placeholder='Question 32' /> source of renewable energy</p>
              <p>Electricity can be generated using offshore or onshore systems</p>
              <p>Onshore systems may use a reservoir</p>
              <p>Problems:</p>
              <ul>
                <li>waves can move in any <input onChange={(e) => handleInputChange(e, 33, 'listening')} value={listeningAnswers[33] || ''} type="text" placeholder='Question 33' /></li>
                <li>movement of sand, etc. on the <input onChange={(e) => handleInputChange(e, 34, 'listening')} value={listeningAnswers[34] || ''} type="text" placeholder='Question 34' /> of the ocean may be affected</li>
              </ul><br />
              <p><b>Tidal energy</b></p><br />
              <p>Tides are more <input onChange={(e) => handleInputChange(e, 35, 'listening')} value={listeningAnswers[35] || ''} type="text" placeholder='Question 35' /> than waves</p>
              <p>Planned tidal lagoon in Wales:</p>
              <ul>
                <li>will be created in a <input onChange={(e) => handleInputChange(e, 36, 'listening')} value={listeningAnswers[36] || ''} type="text" placeholder='Question 36' /> at Swansea</li>
                <li>breakwater (dam) containing 16 turbines</li>
                <li>rising tide forces water through turbines, generating electricity</li>
                <li>stored water is released through <input onChange={(e) => handleInputChange(e, 37, 'listening')} value={listeningAnswers[37] || ''} type="text" placeholder='Question 37' />, driving the turbines in the reverse direction</li>
              </ul><br />
              <p><b>Advantages:</b></p><br />
              <ul>
                <li>not dependent on weather</li>
                <li>no <input onChange={(e) => handleInputChange(e, 38, 'listening')} value={listeningAnswers[38] || ''} type="text" placeholder='Question 38' /> is required to make it work</li>
                <li>likely to create a number of <input onChange={(e) => handleInputChange(e, 39, 'listening')} value={listeningAnswers[39] || ''} type="text" placeholder='Question 39' /></li>
              </ul><br />
              <p><b>Problem:</b></p><br />
              <ul>
                <li>may harm fish and birds, e.g. by affecting <input onChange={(e) => handleInputChange(e, 40, 'listening')} value={listeningAnswers[40] || ''} type="text" placeholder='Question 40' /> and building up silt</li>
              </ul><br />
              <p><b>Ocean thermal energy conversion</b></p><br />
              <p>Uses a difference in temperature between the surface and lower levels</p>
              <p>Water brought to the surface in a pipe</p>
            </div>
          </div><br /><br /><br />
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

export default Rtest1;