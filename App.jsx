import React, { useState } from 'react';
import './index.css';
import { Button } from 'react-bootstrap';
import { MdAutorenew } from 'react-icons/md';
import ChatEduinaContainer from './ChatEduinaContainer';
import ServicesContainer from './ServicesContainer';
import KeywordsContainer from './KeywordsContainer';
import CourseTitlesOpenAI from './AssistantCall';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Alle States definieren
  const [allMessages, setAllMessages] = useState('');
  const [allKeywords, setAllKeywords] = useState([]);
  const [allFilteredKeywords, setAllFilteredKeywords] = useState([]);
  const [allRejectedKeywords, setAllRejectedKeywords] = useState([]);
  const [titleLearnOffer, setTitleLearnOffer] = useState([]);
  const [language, setLanguage] = useState('de');
  const [reloadImpulse, setReloadImpulse] = useState(1);
  const [isLoadingLearnOffer, setIsLoadingLearnOffer] = useState(false);
  const [isLoadingKeywords, setIsLoadingKeywords] = useState(false);
  const [reloadKeywordsImpulse, setReloadKeywordsImpulse] = useState(false);
  const [reloadLearnOfferImpulse, setReloadLearnOfferImpulse] = useState(false);

  // Alle States wieder initialisieren = Neustart
  function reloadPage() {
    setReloadImpulse(reloadImpulse + 1);
    setAllMessages('');
    setAllKeywords([]);
    setAllFilteredKeywords([]);
    setAllRejectedKeywords([]);
    setTitleLearnOffer([]);
  }
  // Bei Sprachwechsel, die neue Sprache setzen und den Rest der States wieder initialisieren
  const handleLanguageChange = (event) => {
    reloadPage();
    setLanguage(event.target.value);
  };

  // Eine erneute Keywords Anfrage starten
  function reloadKeywords() {
    setReloadKeywordsImpulse(true);
    // console.log('ok');
  }

  // Eine erneute Kurs Anfrage starten
  function reloadCourses() {
    setReloadLearnOfferImpulse(true);
    // console.log('ok');
  }

  // Texte die von der Sprache abhängig sind
  let textReloadButton;
  let textKeywordInstruction;

  switch (language) {
    case 'de':
      textReloadButton = 'Neue Anfrage';
      textKeywordInstruction = 'Per Drag und Drop oder per Klick auf + / - Keywords auswählen';
      break;
    case 'en':
      textReloadButton = 'New Request';
      textKeywordInstruction = 'Select keywords by drag and drop or by clicking + / -';
      break;
    case 'es':
      textReloadButton = 'Nueva Solicitud';
      textKeywordInstruction = 'Seleccione palabras clave arrastrando y soltando o haciendo clic en + / -';
      break;
    case 'fr':
      textReloadButton = 'Nouvelle Demande';
      textKeywordInstruction = 'Sélectionnez des mots-clés par glisser-déposer ou en cliquant sur + / -';
      break;
    case 'it':
      textReloadButton = 'Nuova Richiesta';
      textKeywordInstruction = 'Seleziona le parole chiave trascinandole o cliccando su + / -';
      break;
    case 'pt':
      textReloadButton = 'Nova Solicitação';
      textKeywordInstruction = 'Selecione palavras-chave por arrastar e soltar ou clicando em + / -';
      break;
    case 'nl':
      textReloadButton = 'Nieuw Verzoek';
      textKeywordInstruction = 'Selecteer trefwoorden door te slepen en neer te zetten of door op + / - te klikken';
      break;
    case 'ru':
      textReloadButton = 'Новый Запрос';
      textKeywordInstruction = 'Выберите ключевые слова перетаскиванием или нажатием на + / -';
      break;
    case 'zh':
      textReloadButton = '新请求';
      textKeywordInstruction = '通过拖放或点击 + / - 选择关键词';
      break;
    case 'ja':
      textReloadButton = '新しいリクエスト';
      textKeywordInstruction = 'ドラッグ＆ドロップまたは+ / -をクリックしてキーワードを選択';
      break;
    case 'uk':
      textReloadButton = 'Новий запит';
      textKeywordInstruction = 'Виберіть ключові слова за допомогою перетягування або натискання на + / -';
      break;
    default:
      textReloadButton = 'Neue Anfrage'; // Standardwert, falls keine Sprache zutrifft
      textKeywordInstruction = 'Per Drag und Drop oder per Klick auf + / - Keywords auswählen';
  }

  return (
  // kompletes React Modul
    <div className="container-fluid h-100 p-0">
      {/* Toolbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand" style={{ paddingLeft: '4px' }}>Toolbar</div>
        <div className="collapse navbar-collapse">
          <div className="container-fluid">
            <div className="row">
              <div className="col-auto d-flex align-items-center">
                {/* Language Select */}
                <select
                  className="form-select form-select-sm me-2 justify-content-start"
                  aria-label=".form-select-sm example"
                  id="languageSelect"
                  value={language}
                  onChange={handleLanguageChange}
                  title="language"
                >
                  <option value="de">Deutsch</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="it">Italiano</option>
                  <option value="pt">Português</option>
                  <option value="nl">Nederlands</option>
                  <option value="ru">Русский</option>
                  <option value="zh">中文</option>
                  <option value="ja">日本語</option>
                  <option value="uk">Українська</option>
                </select>
                {/* Buttons */}
                <Button variant="primary d-flex justify-content-start col-auto" size="sm" onClick={reloadPage}>
                  <MdAutorenew />
                  {textReloadButton}
                </Button>

                {/* Zusätzliche Button für Reload von Keywords und Courses */}
                {/* <Button variant="secondary d-flex justify-content-start col-auto" size="sm"
                style={{ marginLeft: '5px' }} onClick={reloadKeywords} > */}
                {/*  <MdAutorenew /> */}
                {/*  Andere Keywords */}
                {/* </Button> */}
                {/* <Button variant="secondary d-flex justify-content-start col-auto" size="sm"
                 style={{ marginLeft: '5px' }} onClick={reloadCourses} > */}
                {/*  <MdAutorenew /> */}
                {/*  Andere Angebote */}
                {/* </Button> */}
              </div>
            </div>
          </div>

        </div>
      </nav>
      {/* Hauptmodul */}
      <div className="row h-100 m-0">
        {/* Chatbot-Bereich */}
        <div className="col-4 p-3" style={{ height: '89vh' }}>
          <div className="d-flex flex-column h-100 bg-light border rounded">
            <h4 style={{ alignSelf: 'center', marginTop: '4px' }}>1. Chatbot</h4>
            {/* Weitere Elemente für den ChatContainer hier */}
            <ChatEduinaContainer
              onAllMessages={setAllMessages}
              onAllKeywords={setAllKeywords}
              language={language}
              reloadImpulse={reloadImpulse}
              onReloadKeywordsImpulse={setReloadKeywordsImpulse}
              reloadKeywordsImpulse={reloadKeywordsImpulse}
              onIsLoadingKeywords={setIsLoadingKeywords}

            />
          </div>
        </div>

        {/* Keywords und Lernangebote Bereich */}
        <div className="col-8 p-3">
          <div className="row h-55">
            {/* Keywords-Bereich */}
            <div className="col-12 p-2 bg-light border rounded mb-3 h-100" style={{ overflowY: 'auto' }}>
              <div className="row">
                <div className="col-auto">
                  <h4 style={{ paddingLeft: '4px' }}>
                    2. Optionen
                  </h4>
                </div>
                <div className="col">
                  <b>
                    <p style={{ marginTop: '8px', fontSize: '12px', color: 'red' }}>
                      {textKeywordInstruction}
                    </p>
                  </b>
                </div>
              </div>
              <KeywordsContainer
                allMessages={allMessages}
                allKeywords={allKeywords}
                allFilteredKeywords={allFilteredKeywords}
                allRejectedKeywords={allRejectedKeywords}
                onAllKeywords={setAllKeywords}
                onAllFilteredKeywords={setAllFilteredKeywords}
                onAllRejectedKeywords={setAllRejectedKeywords}
                isloadingKeywords={isLoadingKeywords}
              />
            </div>
          </div>
          {/* Lernangebote-Bereich */}
          <div className="row h-45" style={{ marginTop: '15px', overflowY: 'auto' }}>

            <div className="col-12 p-2 bg-light border rounded">
              <h4>3. Lernangebote</h4>
              {/* eslint-disable-next-line max-len */}
              <CourseTitlesOpenAI onTitles={setTitleLearnOffer} allFilteredKeywords={allFilteredKeywords} onIsLoading={setIsLoadingLearnOffer} loadTitles={reloadLearnOfferImpulse} onLoadTitles={setReloadLearnOfferImpulse} />
              {/* eslint-disable-next-line max-len */}
              <ServicesContainer allFilteredKeywords={allFilteredKeywords} allTitles={titleLearnOffer} isLoading={isLoadingLearnOffer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
