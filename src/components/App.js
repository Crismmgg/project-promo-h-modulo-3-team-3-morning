import React from 'react';
import '../stylesheets/_commons.scss';
import '../stylesheets/Design.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import Collapsable from './Collapsable';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      job: '',
      file: undefined,
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      checkedPalette: 1
    };
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
  }

  handleChecked(checkedPalette) {
    this.setState({
      checkedPalette: checkedPalette
    });
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      name: '',
      job: '',
      file: undefined,
      phone: '',
      email: '',
      linkedin: '',
      github: ''
    });
  }

  handleChangeInputs(inputName, inputValue) {
    if (inputValue !== '') {
      this.setState({
        [inputName]: inputValue
      });
    } else {
      this.setState({
        [inputName]: undefined
      });
    }
  }

  handleChangeFile(file) {
    this.setState({
      file: file
    });
  }

  render() {
    return (
      <div>
        <Header />
        <main className='main'>
          <Card name={this.state.name} job={this.state.job} file={this.state.file} phone={this.state.phone} email={this.state.email} linkedin={this.state.linkedin} github={this.state.github} handleReset={this.handleReset} handleChecked={this.state.handleChecked} />
          <div className='container'>
            <form className='container-form js-containerForm' method='POST'>
              <Collapsable title='Diseña' icon='far fa-object-ungroup collapse__items-icon' defaultState='defaultState'>
                <Design checkedPalette={this.state.checkedPalette} handleChecked={this.handleChecked} />
              </Collapsable>
              <Collapsable title='Rellena' icon='far fa-keyboard collapse__items-icon'>
                <Fill handleChangeInputs={this.handleChangeInputs} handleChangeFile={this.handleChangeFile} name={this.state.name} job={this.state.job} file={this.state.file} phone={this.state.phone} email={this.state.email} linkedin={this.state.linkedin} github={this.state.github} />
              </Collapsable>
              <Collapsable title='Comparte' icon='fas fa-share-alt collapse__items-icon'>
                <Share />
              </Collapsable>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
