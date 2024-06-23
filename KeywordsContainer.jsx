import React, { useEffect, useState } from 'react';

function KeywordsContainer({
  allMessages, allKeywords, allFilteredKeywords, allRejectedKeywords, onAllKeywords, onAllFilteredKeywords, onAllRejectedKeywords, isloadingKeywords,
}) {
  // Alle zusätzlichen States
  const [dragData, setDragData] = useState({});

  // Funktionen für Drag and Drop
  const handleDragStart = (e, id, group) => {
    setDragData({ id, initialGroup: group });
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e, newGroup) => {
    const selectedKeywordId = dragData.id;
    changeCategory(selectedKeywordId, dragData.initialGroup, newGroup);
    setDragData({});
  };

  // Funktion für + und - Button
  const handleGroupChangeClick = (id, oldGroup, newGroup) => {
    changeCategory(id, oldGroup, newGroup);
    setDragData({});
  };

  // Ändern des Item wenn es in einen anderen Bereich verschoben wird
  const changeCategory = (itemId, oldGroup, newGroup) => {
    // Möglichkeit 1
    if (oldGroup === 'start') {
      // Möglichkeit 1.1
      if (newGroup === 'fitting') {
        const changingKeywords = allFilteredKeywords.map((item, index) => { // individuell vom 2 if abhängig
          const newItem = { ...item };
          newItem.id = index + 2;
          return newItem;
        });
        const newItem = { id: 1, group: newGroup, keyword: allKeywords[itemId - 1].keyword }; // individuell vom 1 if abhängig
        onAllFilteredKeywords([newItem, ...changingKeywords]); // individuell vom 2 if abhängig

        const filteredItems = allKeywords.filter((item) => item.id !== itemId); // individuell vom 1 if abhängig
        const updatedItems = filteredItems.map((item, index) => ({
          ...item,
          id: index + 1,
        }));
        onAllKeywords(updatedItems); // individuell vom 1 if abhängig
      }

      // Möglichkeit 1.2
      else if (newGroup === 'unfitting') {
        const changingKeywords = allRejectedKeywords.map((item, index) => { // individuell vom 2 if abhängig
          const newItem = { ...item };
          newItem.id = index + 2;
          return newItem;
        });
        const newItem = { id: 1, group: newGroup, keyword: allKeywords[itemId - 1].keyword }; // individuell vom 1 if abhängig
        onAllRejectedKeywords([newItem, ...changingKeywords]); // individuell vom 2 if abhängig

        const filteredItems = allKeywords.filter((item) => item.id !== itemId); // individuell vom 1 if abhängig
        const updatedItems = filteredItems.map((item, index) => ({
          ...item,
          id: index + 1,
        }));

        onAllKeywords(updatedItems); // individuell vom 1 if abhängig
      }
    }
    // Möglichkeit 2
    else if (oldGroup === 'fitting') {
      // Möglichkeit 2.1
      if (newGroup === 'start') {
        const changingKeywords = allKeywords.map((item, index) => { // individuell vom 2 if abhängig
          const newItem = { ...item };
          newItem.id = index + 2;
          return newItem;
        });
        const newItem = { id: 1, group: newGroup, keyword: allFilteredKeywords[itemId - 1].keyword }; // individuell vom 1 if abhängig
        onAllKeywords([newItem, ...changingKeywords]); // individuell vom 2 if abhängig

        const filteredItems = allFilteredKeywords.filter((item) => item.id !== itemId); // individuell vom 1 if abhängig
        const updatedItems = filteredItems.map((item, index) => ({
          ...item,
          id: index + 1,
        }));

        onAllFilteredKeywords(updatedItems); // individuell vom 1 if abhängig
      }

      // Möglichkeit 2.2
      else if (newGroup === 'unfitting') {
        const changingKeywords = allRejectedKeywords.map((item, index) => { // individuell vom 2 if abhängig
          const newItem = { ...item };
          newItem.id = index + 2;
          return newItem;
        });
        const newItem = { id: 1, group: newGroup, keyword: allFilteredKeywords[itemId - 1].keyword }; // individuell vom 1 if abhängig
        onAllRejectedKeywords([newItem, ...changingKeywords]); // individuell vom 2 if abhängig

        const filteredItems = allFilteredKeywords.filter((item) => item.id !== itemId); // individuell vom 1 if abhängig
        const updatedItems = filteredItems.map((item, index) => ({
          ...item,
          id: index + 1,
        }));

        onAllFilteredKeywords(updatedItems); // individuell vom 1 if abhängig
      }
    }
    // Möglichkeit 3
    else if (oldGroup === 'unfitting') {
      // Möglichkeit 3.1
      if (newGroup === 'start') {
        const changingKeywords = allKeywords.map((item, index) => { // individuell vom 2 if abhängig
          const newItem = { ...item };
          newItem.id = index + 2;
          return newItem;
        });
        const newItem = { id: 1, group: newGroup, keyword: allRejectedKeywords[itemId - 1].keyword }; // individuell vom 1 if abhängig
        onAllKeywords([newItem, ...changingKeywords]); // individuell vom 2 if abhängig

        const filteredItems = allRejectedKeywords.filter((item) => item.id !== itemId); // individuell vom 1 if abhängig
        const updatedItems = filteredItems.map((item, index) => ({
          ...item,
          id: index + 1,
        }));

        onAllRejectedKeywords(updatedItems); // individuell vom 1 if abhängig
      }

      // Möglichkeit 3.2
      else if (newGroup === 'fitting') {
        const changingKeywords = allFilteredKeywords.map((item, index) => { // individuell vom 2 if abhängig
          const newItem = { ...item };
          newItem.id = index + 2;
          return newItem;
        });
        const newItem = { id: 1, group: newGroup, keyword: allRejectedKeywords[itemId - 1].keyword }; // individuell vom 1 if abhängig
        onAllFilteredKeywords([newItem, ...changingKeywords]); // individuell vom 2 if abhängig

        const filteredItems = allRejectedKeywords.filter((item) => item.id !== itemId); // individuell vom 1 if abhängig
        const updatedItems = filteredItems.map((item, index) => ({
          ...item,
          id: index + 1,
        }));

        onAllRejectedKeywords(updatedItems); // individuell vom 1 if abhängig
      }
    }
  };

  // Die API gibt ab und zu die gleichen Keywords zurück die bereits ausgewählt sind, damit die nicht angezeigt werden
  // wird zu nächst ein Array (ausgewaehlte) erzeugt, der alle ausgewählten Arrays enthält, der Array wird bei der Ausgabe
  // mit dem ausegewählten abgegelichen und es werden nur die angezeigt die nicht schon vorkommen
  function getausgewaehlte() {
    // Extrahieren der Keywords
    const firstarray = allFilteredKeywords.map((item) => item.keyword);
    const secondarray = allRejectedKeywords.map((item) => item.keyword);
    // Keywords in einem Array verbinden
    const ausgewaehlte = firstarray.concat(secondarray);
    // Array zurückgeben
    return ausgewaehlte;
  }

  //  Damit ausgewaehlte immer aktuell ist, ist glaube ich gar nicht notwendig, da der Array beim abgleich immer neu generiert wird
  useEffect(() => {
    getausgewaehlte();
  }, [allFilteredKeywords, allRejectedKeywords]);

  return (
    <div className="KeywordContainer">
      {isloadingKeywords && (
      <div>
        <div className="loading-spinner" />
      </div>
      )}
      <div
        className="container_kasten"
        id="container"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'start')}
        key="start"
      >
        <div style={{ marginBottom: '5px' }}>Um Lernangebote angezeigt zu bekommen, wähle mindestens 1 Keyword durch + klicken oder drag and drop in "Positive Keywords" aus</div>
        {allKeywords.filter((item) => item.group === 'start' && !getausgewaehlte().includes(item.keyword)).map((item) => (
          <div
            className="kastentest"
            key={item.id}
            id={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id, item.group)}
          >
            <div
              className="kasten_linkstest"
              onClick={() => handleGroupChangeClick(item.id, item.group, 'fitting')}
            >
              +
            </div>
            <div className="kasten_mittetest">{item.keyword}</div>
            <div
              className="kasten_rechtstest"
              onClick={() => handleGroupChangeClick(item.id, item.group, 'unfitting')}
            >
              -
            </div>
          </div>
        ))}
      </div>
      <div className="grid-container-keywordlists">
        <div
          className="fitting-keywords"
              // event handlers
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'fitting')}
          key="fitting"
        >
          <p style={{ paddingLeft: '4px' }}>Positive Keywords:</p>
          {allFilteredKeywords.filter((item) => item.group === 'fitting').map((item) => (
            <div
              className="kastentest"
              key={item.id}
              id={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id, item.group)}
            >
              <div
                className="kasten_linkstest"
                onClick={() => handleGroupChangeClick(item.id, item.group, 'fitting')}
              >
                +
              </div>
              <div className="kasten_mittetest">{item.keyword}</div>
              <div
                className="kasten_rechtstest"
                onClick={() => handleGroupChangeClick(item.id, item.group, 'unfitting')}
              >
                -
              </div>
            </div>
          ))}
        </div>
        <div
          className="unfitting_keywords"
              // event handlers
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'unfitting')}
          key="unfitting"
        >
          <p style={{ paddingLeft: '4px' }}>Negative Keywords:</p>
          {allRejectedKeywords.filter((item) => item.group === 'unfitting').map((item) => (
            <div
              className="kastentest"
              key={item.id}
              id={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id, item.group)}
            >
              <div
                className="kasten_linkstest"
                onClick={() => handleGroupChangeClick(item.id, item.group, 'fitting')}
              >
                +
              </div>
              <div className="kasten_mittetest">{item.keyword}</div>
              <div
                className="kasten_rechtstest"
                onClick={() => handleGroupChangeClick(item.id, item.group, 'unfitting')}
              >
                -
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeywordsContainer;
