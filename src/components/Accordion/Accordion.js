import Section from '../Section/Section';

const data = [
  {
    title: 'Section 1',
    content: 'Content section 1...',
  },
  {
    title: 'Section 2',
    content: 'Content section 2...',
  },
  {
    title: 'Section 3',
    content: 'Content section 3...',
  },
];

class Accordion {
  //constructor() {}

  handleClickSection = () => {
    const sections = this.getElementsInArray('accordion__section');
    sections.map(section => {section.addEventListener('click', this.handleToggleSection);});
  };

  handleToggleSection = (e) => {
    const selectedSection = e.target.nextElementSibling;
    return selectedSection.classList.contains('active')
      ? this.removeActiveClass(selectedSection) : this.addActiveClass(selectedSection);
  };

  removeActiveClass = section => {
    section.classList.remove('active');
  };

  addActiveClass = async(section) => {
    let activeSections = await this.getElementsInArray('accordion__section__content');
    await activeSections.forEach((section, index) => {this.removeActiveClass(section);});
    section.classList.add('active');
  };

  getElementsInArray = className => {
    return Array.from(document.getElementsByClassName(className));
  };

  render() {
    return `
    <h1 class='title'>Accordion JS</h1>
    <dl class='accordion'>
      ${data.map((dataSection, index) =>
        new Section(dataSection).render()
      ).join('')}
    </dl>`;
  }

  init() {
    this.handleClickSection();
  }
}

export default Accordion;