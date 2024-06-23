import OpenAI from 'openai';
import React, { useEffect, useState } from 'react';

const API_KEY = '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';
const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

function CourseTitlesOpenAI({
  onTitles, allFilteredKeywords, onIsLoading, loadTitles, onLoadTitles,
}) {
  let courseTitleArray = [];

  async function getCourseTitles() {
    onIsLoading(true);
    let answerOpenAI = '';
    const thread = await openai.beta.threads.create();

    const message = await openai.beta.threads.messages.create(
      thread.id,
      {
        role: 'user',
        content: `Die Keywords stellen ein Nutzeranliegen dar, suche die passenden Kurse raus. Die Keywords: "${allFilteredKeywords.map((item) => item.keyword)}". Bitte geb eine nummerierte Liste mit den Titeln zurück!`,
      },
    );

    const run = await openai.beta.threads.runs.createAndPoll(
      thread.id,
      {
        assistant_id: 'asst_HDsYSt5CNb7LjMHDko48Stx3',
      },
    );

    if (run.status === 'completed') {
      const messages = await openai.beta.threads.messages.list(
        run.thread_id,
      );
      console.log(message);
      for (const message of messages.data.reverse()) {
        answerOpenAI = message.content[0].text.value;
      }
    } else {
      console.log(run.status);
    }
    let content = answerOpenAI;
    const index = content.indexOf('1.');
    content += '【5†source】';
    const cleanedContent = index !== -1 ? content.substring(index) : content; // Alles vor der 1 wegwerfen
    courseTitleArray = cleanedContent
      .split('\n') // Teile den Text in Zeilen auf
      .filter((item) => /^\d+\.\s*/.test(item)) // Behalte nur Zeilen mit einer Nummer am Anfang
      .map((item) => item.replace(/^\d+\.\s*/, '').replace(/【.*?】/g, '').replace(/\*/g, '')); // Entferne die Nummer und das Leerzeichen am Anfang jeder Zeile

    console.log(courseTitleArray);
    if (courseTitleArray.length < 1) {
      getCourseTitles();
    }
    onIsLoading(false);
    onTitles(courseTitleArray);
  }

  useEffect(() => {
    if (allFilteredKeywords.length >= 1) {
      getCourseTitles();
    }
  }, [allFilteredKeywords]);

  useEffect(() => {
    if (loadTitles) {
      getCourseTitles();
      onLoadTitles(false);
    }
  }, [loadTitles]);

  // return (
  //   <div>
  //     <button onClick={getCourseTitles}>ReloadTitel</button>
  //   </div>
  // );
}

export default CourseTitlesOpenAI;
