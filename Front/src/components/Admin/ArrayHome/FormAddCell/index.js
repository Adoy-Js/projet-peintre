// == Import de la lib React
import React, { PureComponent } from 'react';
import { useHistory } from 'react-router-dom';

// == Import npm

// == Imports locaux
import './styles.scss';

class FormAddCell extends PureComponent  {

  render() {
    return (
      <Button className="addCell" type="submit" value="+" onClick={this.Redirection} />
    )
  }
};

export default FormAddCell;

