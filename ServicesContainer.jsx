import React, { useState } from 'react';
import OpenAI from 'openai';
import { courseArray } from './data/course_daten';
import './assets/css/LadeZeichen.css';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import courseImage from './assets/images/students.png';

function ServicesContainer({
  allFilteredKeywords,  allTitles, isLoading,
}) {
  let fiitingCourses = [];
  const [show, setShow] = useState(null);
  const [showChoosenCourse, setShowChoosenCourse] = useState(null);
  const [showCourseDetail, setShowCourseDetail] = useState(null);
  const handleClose = () => setShow(null);
  const handleCloseAuswahl = () => {
    if (showCourseDetail != null) {
      setShow(showChoosenCourse);
    }

    setShowChoosenCourse(null);
    setShowCourseDetail(null);
  };
  const handleShow = (item) => () => setShow(item);
  const handleShowChoosenCourse = (item) => () => {
    // setShow(null);
    setShowChoosenCourse(item);
  };
  const handleShowCourseDetail = (item) => () => {
    setShow(null);
    setShowCourseDetail(item);
    setShowChoosenCourse(item);
  };
  const handleCloseCourseDetail = () => {
    // setShow(showChoosenCourse);
    setShowChoosenCourse(null);
  };

  class ImageWithFallback extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        src: props.src,
      };
    }

    handleError = () => {
      this.setState({
        src: courseImage, // Pfad zum Alternativbild
      });
    };

    render() {
      return (
          <img
              src={this.state.src}
              alt={this.props.alt}
              onError={this.handleError}
              className="angebot-bild"
              style={{borderRadius: '5px' , alignSelf: "center"}}
          />
      );
    }
  }

  function cleanString(text) {
    return text.trim().toLowerCase().replace(/[^\w\s]/gi, '');
  }
  const textNoItem = 'ist nicht bekannt';

  function getTitel(item) {
    if (item && item.names && item.names[0] && item.names[0].objectName) {
      return item.names[0].objectName;
    }
    return textNoItem;
  }

  function getLongDescription(item) {
    const x = 8;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textNoItem;
  }
  function getShortDescription(item) {
    const x = 0;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textNoItem;
  }

  function getCourseImage(item) {
    const x = 4;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return '{courseImage}';
  }

  function getCourseLandingPageURL(item) {
    const x = 38;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textNoItem;
  }
  function getCourselanguage(item) {
    const x = 15;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textNoItem;
  }

  function createMarkup(description) {
    return { __html: description };
  }
  function OpenWebsiteButton(item) {
    const openWebsite = () => {
      // URL der Webseite, die geöffnet werden soll
      const url = getCourseLandingPageURL(item);
      // Öffnet die Webseite in einem neuen Browser-Tab
      window.open(url, '_blank');
    };
    if (getCourseLandingPageURL(item) != textNoItem) {
      return (
        <button className="btn btn-primary" onClick={openWebsite}>Webseite öffnen</button>
      );
    }
  }

  function getCourseFachgebiet(item) {
    const x = 9;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textNoItem;
  }
  function getCourseFormat(item) {
    const x = 10;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textNoItem;
  }
  function getCosts(item) {
    const x = 18;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textNoItem;
  }
  function getCourseDuration(item) {
    const x = 20;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textNoItem;
  }
  function getCourseDurationScale(item) {
    const x = 21;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textNoItem;
  }
  function getCourses() {
    const cleanAllTL = allTitles.map((item) => cleanString(item));
    fiitingCourses = courseArray.objects.filter((item) => cleanAllTL.includes(cleanString(item.names[0].objectName)));
  }
  return (
    <div>
      {isLoading && allFilteredKeywords.map((item) => (
        <div>
          {item.keyword}
        </div>
      ))}
      {isLoading && (
      <div>
        <div className="loading-spinner" />
      </div>
      )}
      {allTitles.map((titel) => {
        // console.log(`Titel${titel}`);
      })}
      {allFilteredKeywords && allFilteredKeywords.length > 0 && !isLoading && (
      <div className="grid-container-lernangebote">

        {getCourses()}
        { fiitingCourses.map((item) => (
          <div className="lernangebot">

            <div className="angebot-bild-kasten" style={{ padding: '5px' }}>
              {item && item.metas && item.metas[4] && item.metas[4].values && item.metas[4].values[0] && item.metas[4].values[0].metaValues && item.metas[4].values[0].metaValues[0] ? (

                // <img
                //   src={item.metas[4].values[0].metaValues[0]}
                //   // src={courseImage}
                //   alt={courseImage}
                //   className="angebot-bild"
                //   style={{ borderRadius: '5px' }}
                //
                // />
                 <ImageWithFallback
                  src={item.metas[4].values[0].metaValues[0]}
                  alt="Lernangebot Bild"
                  className="angebot-bild"
                  style={{ borderRadius: '5px' , alignSelf: "center"}}

                 />

              ) : (
                <div>"Es gibt kein Bild"</div>
              )}
            </div>

            <div className="angebot-info" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <h2 style={{ paddingTop: '5px' }}>
                <p dangerouslySetInnerHTML={createMarkup(getTitel(item))} />
              </h2>
              <p dangerouslySetInnerHTML={createMarkup(getShortDescription(item))} style={{ padding: '5px' }} />

              {/* <Button variant="secondary" onClick={handleShowChoosenCourse(item)}> */}
              {/*  Auswählen */}
              {/* </Button> */}
              {/* <Button variant="primary" onClick={handleShow(item) style={{ alignSelf: 'right' }}}> */}
              {/*  Details */}
              {/* </Button> */}
              <div style={{
                width: '100%',
                display: 'flex', // Aktiviert Flexbox
                justifyContent: 'flex-end',
              }}
              >
                <Button variant="secondary" onClick={handleShowChoosenCourse(item)}>
                  Auswählen
                </Button>
                <Button variant="primary" onClick={handleShow(item)}>
                  Details
                </Button>
              </div>
              <Modal id={item.id} show={showChoosenCourse === item} onHide={handleCloseAuswahl} centered>
                <Modal.Header closeButton>
                  <Modal.Title>{getTitel(item)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>

                    <p>
                      {' '}
                      Ziel erreicht, notiere diesen Titel auf dein Papier :
                      <p dangerouslySetInnerHTML={createMarkup(getTitel(item))} />
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <button type="button" className="btn btn-secondary" onClick={handleCloseAuswahl}>
                    Schließen
                  </button>
                </Modal.Footer>

              </Modal>

              <Modal id={item.id} show={show === item} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>{getTitel(item)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="angebot-bild-kasten">
                    {item && item.metas && item.metas[4] && item.metas[4].values && item.metas[4].values[0] && item.metas[4].values[0].metaValues && item.metas[4].values[0].metaValues[0] ? (

                      // <img
                      //   src={item.metas[4].values[0].metaValues[0]}
                      //   alt="Lernangebot Bild"
                      //   className="angebot-bild"
                      // />
                        <ImageWithFallback
                            src={item.metas[4].values[0].metaValues[0]}
                            alt="Lernangebot Bild"
                            className="angebot-bild"
                            style={{ borderRadius: '5px' , alignSelf: "center"}}

                        />



                    ) : (
                      <div>"Es gibt kein Bild"</div>
                    )}
                  </div>
                  <p dangerouslySetInnerHTML={createMarkup(getShortDescription(item))} />
                  <div className="autofit-col col-12">
                    <div className="autofit-row">
                      <div className="autofit-col col-6">Kurssprache :</div>
                      <div className="autofit-col col-7">{getCourselanguage(item)}</div>
                    </div>
                    <div className="autofit-row">
                      <div className="autofit-col col-6">Kursformat :</div>
                      <div className="autofit-col col-6">{getCourseFormat(item)}</div>
                    </div>
                    <div className="autofit-row">
                      <div className="autofit-col col-6">Fachgebiet :</div>
                      <div className="autofit-col col-6">{getCourseFachgebiet(item)}</div>
                    </div>
                    <div className="autofit-row">
                      <div className="autofit-col col-6">Kosten :</div>
                      <div className="autofit-col col-6">{getCosts(item)}</div>
                    </div>
                    <div className="autofit-row">
                      <div className="autofit-col col-6">Dauer :</div>
                      <div className="autofit-col col-6">
                        {getCourseDuration(item)}
                        {getCourseDurationScale(item)}
                      </div>
                    </div>
                  </div>
                </Modal.Body>

                <Modal.Footer>
                  {OpenWebsiteButton(item)}
                  <button type="button" className="btn btn-secondary" onClick={handleShowCourseDetail(item)}>
                    Auswählen
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={handleClose}>
                    Schließen
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default ServicesContainer;
