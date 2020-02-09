import React from 'react';
import LanguageContext from '../contexts/LanguageContext.js';

class languageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className='flag us'
          onClick={() => this.context.onLanguageChange('english')}
        />
        <i
          className='flag nl'
          onClick={() => this.context.onLanguageChange('dutch')}
        />
      </div>
    );
  }
}

export default languageSelector;
