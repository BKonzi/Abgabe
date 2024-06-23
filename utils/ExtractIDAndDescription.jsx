import React from 'react';
import { courseArray } from '../data/course_daten.jsx';

function Extract() {
  const saveArrayToFile = (arrayToSave) => {
    // Convert the array to a string
    const arrayString = JSON.stringify(arrayToSave);

    // Create a Blob object from the string
    const blob = new Blob([arrayString], { type: 'application/json' });

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'myArray.json'; // Specify the file name

    // Trigger a click event on the anchor element to start the download
    a.click();

    // Cleanup
    window.URL.revokeObjectURL(a.href);
  };
  const textnoitem = 'ist nicht bekannt';

  function getShortDescription(item) {
    const x = 0;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getProvider(item) {
    const x = 1;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getProviderUrl(item) {
    const x = 2;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getProviderImageUrl(item) {
    const x = 3;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getCourseImage(item) {
    const x = 4;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getTitel(item) {
    const x = 5;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getDozentName(item) {
    const x = 6;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getKursTyp(item) {
    const x = 7;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getLongDescription(item) {
    const x = 8;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKursFachgebiet(item) {
    const x = 9;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKursFormat(item) {
    const x = 10;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getEmpfohleneVorekenntnisse(item) {
    const x = 11;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getErfoderlicheVorekenntnisse(item) {
    const x = 12;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getZielNiveaustufe(item) {
    const x = 13;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getAnmerkungNiveautsufe(item) {
    const x = 14;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getKursSprache(item) {
    const x = 15;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getSprachkursSprache(item) {
    const x = 16;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKostenPflichting(item) {
    const x = 17;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKosten(item) {
    const x = 18;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getKostenWaehrung(item) {
    const x = 19;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKursDauer(item) {
    const x = 20;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKursDauerEinheit(item) {
    const x = 21;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getKursablauf(item) {
    const x = 22;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKursZielGruppe(item) {
    const x = 23;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getVerfuegbarkeitStart(item) {
    const x = 24;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getVerfuegbarkeitEnde(item) {
    const x = 25;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKurslaufzeitAnmerkung(item) {
    const x = 26;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getVideoURL(item) {
    const x = 27;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKursInhalt(item) {
    const x = 28;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getLehrbuch(item) {
    const x = 29;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getSprachkursInhalt(item) {
    const x = 30;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getLehrergbnis(item) {
    const x = 31;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getNachweisVorkenntnisse(item) {
    const x = 32;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getKurslevel(item) {
    const x = 33;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKurslevelZiel(item) {
    const x = 34;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getZahlungsmoeglichkeit(item) {
    const x = 35;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getKurslizenz(item) {
    const x = 36;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getKursKapazitaet(item) {
    const x = 37;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKursLandingPageURL(item) {
    const x = 38;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getTeilnahmeVoraussetzung(item) {
    const x = 39;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getKursModus(item) {
    const x = 40;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getAnmeldeZeitraum(item) {
    const x = 41;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getVeroeffentlichungStart(item) {
    const x = 42;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getVeroeffentlichungEnde(item) {
    const x = 43;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getGesamtUnterrichtseinheitOnline(item) {
    const x = 44;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getWorkload(item) {
    const x = 45;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getZeitProWochePraesenz(item) {
    const x = 46;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getZeitProWocheOnline(item) {
    const x = 47;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getDauerProEinheit(item) {
    const x = 48;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getWorkloadProWoche(item) {
    const x = 49;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getAnbieterLand(item) {
    const x = 50;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getAnbieterStadt(item) {
    const x = 51;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getAnbieterAdresse(item) {
    const x = 52;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getBarrierfreiheit(item) {
    const x = 53;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getFreiePlaetze(item) {
    const x = 54;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  function getKursort(item) {
    const x = 55;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKursortAnschrift(item) {
    const x = 56;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getKursortGeodaten(item) {
    const x = 57;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getBereitetVorAuf(item) {
    const x = 58;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getMindestalter(item) {
    const x = 59;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getLeistungsnachweise(item) {
    const x = 60;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getAnzahlETCS(item) {
    const x = 61;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }
  function getAnbieterKursID(item) {
    const x = 62;
    if (item && item.metas && item.metas[x] && item.metas[x].values && item.metas[x].values[0] && item.metas[x].values[0].metaValues && item.metas[x].values[0].metaValues[0]) {
      return item.metas[x].values[0].metaValues[0];
    }
    return textnoitem;
  }

  const newDescriptionArray = courseArray.objects.map(((object) => ({
    titel: getTitel(object),
    longdiscription: getLongDescription(object),
    shortdiscription: getShortDescription(object),
  })));
  // console.log('halloo');
  // console.log(newDescriptionArray);
  saveArrayToFile(newDescriptionArray);
  const myjson = JSON.stringify(newDescriptionArray);
  // console.log(myjson);
  return (
    <div>empty</div>
  );
}
export default Extract;
