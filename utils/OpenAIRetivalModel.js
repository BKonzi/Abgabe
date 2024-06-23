/* eslint-disable */

async function getCourseTitles(keywords, openai) {
  let retrievedText = '';
  const thread = await openai.beta.threads.create();

  const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: 'user',
      content: `Die Keywords stellen ein Nutzeranliegen dar, suche die passenden Kurse raus. Die Keywords: "${keywords.map((item) => item.keyword)}". Bitte geb eine nummerierte Liste mit den Titeln zurück!`,
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
      retrievedText = message.content[0].text.value;
    }
  } else {
    console.log(run.status);
  }
  let content = retrievedText;
  const index = content.indexOf('1.');
  content += '【5†source】';
  const cleanedContent = index !== -1 ? content.substring(index) : content; // Alles vor der 1 wegwerfen
  const courseTitles = cleanedContent
    .split('\n') // Teile den Text in Zeilen auf
    .filter((item) => /^\d+\.\s*/.test(item)) // Behalte nur Zeilen mit einer Nummer am Anfang
    .map((item) => item.replace(/^\d+\.\s*/, '').replace(/【.*?】/g, '').replace(/\*/g, '')); // Entferne die Nummer und das Leerzeichen am Anfang jeder Zeile

  if (courseTitles.length < 1) {
    await getCourseTitles(keywords);
  }

  return courseTitles;
}

export default getCourseTitles;
