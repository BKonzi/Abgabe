import React, { useState, useEffect } from 'react';
import {
  MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

// Das ist API-Key von OpenAI, der ist bisher mit meiner Email_Adresse verbunden
const API_KEY = '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';

// Der Hauptfunktionsaufruf
function ChatEduinaContainer({
  onAllMessages, onAllKeywords, language, reloadImpulse, reloadKeywordsImpulse, onReloadKeywordsImpulse, onIsLoadingKeywords,
}) {
  // Alle Statuse die in dieser Funktion definiert werden
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: getIntroduction(),
      sentTime: 'just now',
      direction: 'incoming',
      sender: 'ChatGPT',
    },
  ]);

  // Variablen
  let allMessages = '';
  let hintMessageKeywords;
  let introductionEduina;

  // Falls sich neuLaden verändert wird der ChatContainer wieder auf Initial Wert gesetzt
  useEffect(() => {
    setMessages([
      {
        message: getIntroduction(),
        sentTime: 'just now',
        direction: 'incoming',
        sender: 'ChatGPT',
      },
    ]);
  }, [reloadImpulse]);

  // Sprachabhängige Variablen werden gesetzt
  switch (language) {
    case 'de':
      hintMessageKeywords = '<strong>Tipp</strong>: Wenn die Keywords rechts passen, wähle die Passenden aus. Wenn nicht chatte weiter.';
      introductionEduina = "Hei ich bin Eduina, dein Lernpfad-Assistent. Ich möchte dir helfen den nächsten Schritt auf deinem Lernpfad zu finden. Wenn du mir Informationen über dich, deine Situation und was du in Zukunft machen möchtest, mitteilst, dann gebe ich dir Tipps und stelle dir Fragen. Auf Basis von unserem Dialog werden dir im rechten Fenster 'Optionen' Keywords angezeigt, aus denen du auswählen kannst, um passende Angebote zu erhalten. \n Also gehe so vor: \n 1. chatte mit mir dem <b>Chatbot</b> \n 2. wähle passende Keywords im Bereich <b>Optionen</b> aus \n 3. wähle ein <b>Lernangebot</b> aus \n\n Ich freue mich dir zu helfen:)";
      break;
    case 'en':
      hintMessageKeywords = '<strong>Tip</strong>: If the keywords on the right fit, select the appropriate ones. If not, continue chatting.';
      introductionEduina = "Hi, I'm Eduina, your learning path chatbot assistant. I'd like to help you find your next step on your learning journey. If you tell me a bit about yourself and your situation, and give me some information about what you'd like to do in the future, I'll give you tips and ask you follow-up questions. Based on our conversation, I'll pick out keywords for you to choose from so you can get the right offers. I look forward to helping you :)";
      break;
    case 'es':
      hintMessageKeywords = '<strong>Consejo</strong>: Si las palabras clave a la derecha coinciden, selecciona las adecuadas. Si no, sigue chateando.';
      introductionEduina = 'Hola, soy Eduina, tu asistente de chatbot para el camino de aprendizaje. Me gustaría ayudarte a encontrar tu próximo paso en tu camino de aprendizaje. Si me cuentas un poco sobre ti y tu situación, y me das información sobre lo que te gustaría hacer en el futuro, te daré consejos y te haré preguntas de seguimiento. Basándome en nuestra conversación, seleccionaré palabras clave entre las que podrás elegir para que puedas obtener las ofertas adecuadas. ¡Espero poder ayudarte :)';
      break;
    case 'fr':
      hintMessageKeywords = '<strong>Conseil</strong>: Si les mots-clés à droite conviennent, sélectionnez ceux qui conviennent. Sinon, continuez à discuter.';
      introductionEduina = "Salut, je suis Eduina, votre assistant chatbot pour le parcours d'apprentissage. Je voudrais vous aider à trouver votre prochaine étape dans votre parcours d'apprentissage. Si vous me parlez un peu de vous et de votre situation, et me donnez des informations sur ce que vous aimeriez faire à l'avenir, je vous donnerai des conseils et vous poserai des questions de suivi. Sur la base de notre conversation, je choisirai des mots-clés parmi lesquels vous pourrez choisir afin que vous puissiez obtenir les bonnes offres. J'ai hâte de vous aider :)";
      break;
    case 'it':
      hintMessageKeywords = '<strong>Consiglio</strong>: Se le parole chiave a destra sono adatte, seleziona quelle appropriate. Altrimenti, continua a chattare.';
      introductionEduina = "Ciao, sono Eduina, il tuo assistente chatbot per il percorso di apprendimento. Vorrei aiutarti a trovare il tuo prossimo passo nel tuo percorso di apprendimento. Se mi racconti un po' di te e della tua situazione, e mi fornisci alcune informazioni su cosa vorresti fare in futuro, ti darò dei consigli e ti farò delle domande di approfondimento. Sulla base della nostra conversazione, selezionerò delle parole chiave tra cui potrai scegliere in modo da ottenere le offerte giuste. Non vedo l'ora di aiutarti :)";
      break;
    case 'pt':
      hintMessageKeywords = '<strong>Dica</strong>: Se as palavras-chave à direita forem adequadas, selecione as apropriadas. Se não, continue a conversar.';
      introductionEduina = 'Olá, eu sou a Eduina, sua assistente de chatbot para o caminho de aprendizado. Gostaria de ajudá-lo a encontrar seu próximo passo em sua jornada de aprendizado. Se você me contar um pouco sobre você e sua situação, e me fornecer algumas informações sobre o que gostaria de fazer no futuro, darei dicas e farei perguntas de acompanhamento. Com base em nossa conversa, selecionarei palavras-chave para você escolher, para que possa obter as ofertas certas. Estou ansiosa para ajudar :)';
      break;
    case 'nl':
      hintMessageKeywords = '<strong>Tip</strong>: Als de trefwoorden aan de rechterkant passen, selecteer dan de passende. Zo niet, ga dan verder met chatten.';
      introductionEduina = 'Hoi, ik ben Eduina, je leerpad-chatbotassistent. Ik wil je helpen je volgende stap te vinden op je leerreis. Als je me een beetje over jezelf en je situatie vertelt, en me wat informatie geeft over wat je in de toekomst zou willen doen, zal ik je tips geven en vervolgvragen stellen. Op basis van ons gesprek zal ik zoekwoorden selecteren waaruit je kunt kiezen, zodat je de juiste aanbiedingen krijgt. Ik kijk ernaar uit om je te helpen :)';
      break;
    case 'ru':
      hintMessageKeywords = '<strong>Совет</strong>: Если ключевые слова справа подходят, выберите подходящие. Если нет, продолжайте общение.';
      introductionEduina = 'Привет, я Эдуина, твой чат-бот-ассистент для обучения. Я хочу помочь тебе найти следующий шаг на твоем обучающем пути. Если ты расскажешь мне немного о себе и своей ситуации, и дашь мне информацию о том, что ты бы хотел делать в будущем, я дам тебе советы и задам дополнительные вопросы. На основе нашего разговора я выберу ключевые слова, из которых ты сможешь выбрать, чтобы получить правильные предложения. Я с нетерпением жду, чтобы помочь тебе :)';
      break;
    case 'zh':
      hintMessageKeywords = '<strong>提示</strong>: 如果右边的关键词合适，请选择合适的关键词。如果不是，继续聊天。';
      introductionEduina = '你好，我是 Eduina，你的学习路径聊天机器人助手。我想帮助你在学习之旅中找到下一个步骤。如果你向我介绍一下你自己和你的情况，并告诉我一些关于你未来想做的事情的信息，我会给你一些建议并提出后续问题。根据我们的对话，我会挑选出关键词供你选择，以便你获得正确的推荐。我期待着能帮助你 :)';
      break;
    case 'ja':
      hintMessageKeywords = '<strong>ヒント</strong>: 右側のキーワードが適切であれば、適切なものを選択してください。そうでなければ、チャットを続けてください。';
      introductionEduina = 'こんにちは、私はあなたの学習パスのチャットボットアシスタント、エディーナです。あなたの学習の旅で次のステップを見つけるお手伝いをしたいと思います。自分自身とあなたの状況について少し話していただければ、そして将来何をしたいかについていくつかの情報をいただければ、アドバイスをお伝えし、フォローアップの質問をさせていただきます。私たちの会話を基に、あなたが選択肢を持って正しいオファーを得られるように、キーワードを選びます。お手伝いできることを楽しみにしています :)';
      break;
    case 'uk':
      hintMessageKeywords = '<strong>Порада</strong>: Якщо ключові слова справа підходять, виберіть відповідні. Якщо ні, продовжуйте чат.';
      introductionEduina = 'Привіт, я Едуїна, твій помічник з навчального шляху. Я хочу допомогти тобі знайти наступний крок у твоєму навчальному шляху. Якщо ти розкажеш мені інформацію про себе, твою ситуацію і що ти хочеш робити у майбутньому, я дам тобі поради та задам тобі питання. На основі нашого діалогу в правому вікні «Опції» будуть відображатися ключові слова, з яких ти можеш вибрати, щоб отримати відповідні пропозиції. \n Отже, дій так: \n 1. спілкуйся зі мною, <b>чатботом</b> \n 2. вибери відповідні ключові слова в розділі <b>Опції</b> \n 3. вибери <b>навчальну пропозицію</b> \n\n Я з нетерпінням чекаю можливості допомогти тобі :)';
      break;
    default:
      hintMessageKeywords = '<strong>Tipp</strong>: Wenn die Keywords rechts passen, wähle die passenden aus. Wenn nicht chatte weiter.'; // Standardtext auf Deutsch
      introductionEduina = 'Hei ich bin Eduina, dein Lernpfad-Assistent. Ich möchte dir helfen den nächsten Schritt auf deinem Lernpfad zu finden. Wenn du mir Informationen über dich, deine Situation und was du in Zukunft machen möchtest, mitteilst, dann gebe ich dir Tipps und stelle dir Fragen. Auf Basis von unserem Dialog werden dir im rechten Fenster "Optionen" Keywords angezeigt, aus denen du auswählen kannst, um passende Angebote zu erhalten. \n Also gehe so vor: \n 1. chatte mit mir dem <b>Chatbot</b> \n 2. wähle passende Keywords im Bereich <b>Optionen</b> aus \n 3. wähle ein <b>Lernangebot</b> aus \n\n Ich freue mich dir zu helfen:)';
  }

  // 1. API Aufruf, damit der User im ChatContainer eine Antwort erhält
  async function getAnswerOpenAIChat(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === 'ChatGPT' ? 'assistant' : 'user';
      return {
        role,
        content: messageObject.message,
      };
    });

    const apiRequestBody = {
      model: 'gpt-3.5-turbo-0125',
      messages: apiMessages,
    };
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    });

    return response.json();
  }

  // 2. API Aufruf um die Keywors zu erhalten
  async function loadKeywords(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const rolethistime = messageObject.sender === 'ChatGPT' ? 'assistant' : 'user';
      return {
        role: rolethistime,
        content: messageObject.message,
      };
    });
    // Hier wird die Nachricht übergeben, mit dem Zusatz, das der User angeblich nach 10 Keywords fragt, Sprache sollte noch angepasst werden
    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [...apiMessages, { role: 'user', content: 'Gib mir einen Array mit maximal 10 Keywords, die mein Lernanliegen beschreiben.' }],
    };

    // Die Antwort von OPENAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    });
    console.log(response);
    return response.json();
  }

  // Vorbereitung von 1 tem API Aufruf
  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
    };
    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);

    try {
      const response = await getAnswerOpenAIChat([...messages, newMessage]);
      const content = response.choices[0]?.message?.content;
      if (content) {
        const chatGPTResponse = {
          message: `${content} ${hintMessageKeywords}`,
          direction: 'incoming',
          sender: 'ChatGPT',
        };
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.error('Error processing message:', error);
    } finally {
      setIsTyping(false);
    }
  };

  // Vorbereitung von 2tem API Aufruf
  async function getKeywords() {
    onIsLoadingKeywords(true);
    if (messages[messages.length - 1].direction === 'incoming' && messages.length > 1) {
      try {
        const response = await loadKeywords(messages);
        console.log(response);
        const content = response.choices[0]?.message?.content;
        if (content) {
          const index = content.indexOf('1.');
          const cleanedContent = index !== -1 ? content.substring(index) : content;
          const keywordarray = cleanedContent
            .split('\n') // Teile den Text in Zeilen auf
            .filter((item) => /^\d+\.\s*/.test(item)) // Behalte nur Zeilen mit einer Nummer am Anfang
            .map((item) => item.replace(/^\d+\.\s*/, '')); // Entferne die Nummer und das Leerzeichen am Anfang jeder Zeile
          if (keywordarray.length <= 1) {
            getKeywords();
          }
          const indexierung = keywordarray.map((keyword, index) => ({
            id: index + 1,
            group: 'start',
            keyword,
          }));
          onAllKeywords(indexierung);
        }
      } catch (error) {
        console.error('Error processing message:', error);
      } finally {
        setIsTyping(false);
      }
    }
    onIsLoadingKeywords(false);
  }

  // FUNKTIONEN
  // Text setzen
  function getIntroduction() {
    return introductionEduina;
  }
  // Nachrichten zum State Array hinzufügen
  const addMessage = (text) => {
    allMessages = `${allMessages} ${text}`;
    onAllMessages(allMessages);
  };

  // Immer wenn eine Nachricht hinzukommt, sollen Keywords abgerufen werden
  useEffect(() => {
    getKeywords();
  }, [messages]);

  // Wenn ein zusätzlicher Load gerufen wird, sollen noch mal Keywords geladen werden
  useEffect(() => {
    if (reloadKeywordsImpulse) {
      onIsLoadingKeywords(true);
      getKeywords();
      onReloadKeywordsImpulse(false);
    }
  }, [reloadKeywordsImpulse]);

  // Was an HTML Code zurückgegeben wird
  return (
    <div className="divChatContainer" style={{ position: 'relative', height: '90%' }}>

      <MainContainer>
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={isTyping ? <TypingIndicator content="Eduina schreibt gerade" /> : null}
          >
            {messages.map((message, i) => {
              addMessage(message.message);
              return <Message key={i} model={message} />;
            })}

          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>

    </div>
  );
}

export default ChatEduinaContainer;
