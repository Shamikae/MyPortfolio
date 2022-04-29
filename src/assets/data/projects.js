import { v4 as uuidv4 } from 'uuid';
import CalculatorPic from '../images/calculator.png';
import AffirmPic from '../images/affirmPic.png';
import BankPic from '../images/bankPic.png';
import NotflixPic from '../images/notflix.png';
import RacingPic from '../images/racinggame.png';
import ResumePic from '../images/resume.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Affirmation App',
    desc: 'An application to recieve positive quotes',
    img: AffirmPic,
    tool: 'HTML',
  },
  {
    id: uuidv4(),
    name: 'Smart Banking',
    desc: 'A banking app that allows you to login and view your Smart Bank account, make deposits, withdrawls, and view account summary',
    img: BankPic,
  },
  {
    id: uuidv4(),
    name: 'Notflix',
    desc: 'Netflix clone',
    img: NotflixPic,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc: 'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: RacingPic,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc: 'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ResumePic,
  },
  {
    id: uuidv4(),
    name: 'Simple Calculator',
    desc: 'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: CalculatorPic,
  },
];

export default projects;
