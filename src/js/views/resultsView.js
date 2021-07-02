import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
import View from './View';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'Could not find that... 💥💥💥💥';
  _message = '';

  _generateMarkup() {
    //console.log(this._data);
    return this._data
      .map(results => previewView.render(results, false))
      .join('');
  }
}

export default new ResultsView();
