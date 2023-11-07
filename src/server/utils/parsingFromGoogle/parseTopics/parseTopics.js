const { google } = require("googleapis");
const creds = require("../сredentials.json"); // Загрузка учетных данных Google API из файла credentials.json
const mongoDB = require("../../../db");
const logErrorToFile = require("../logErrorToFile");
const TopicsList = require("../../../models/Tech/TopicsList");
require("colors");

const client = new google.auth.JWT(
  creds.client_email,
  null,
  creds.private_key,
  ["https://www.googleapis.com/auth/spreadsheets.readonly"]
);

// ID Google Docs файлов
const questionDocs = {
  javascript: {
    1: "14zmPc3goZTuklbMA8eeVolgwC3NTlvYG8R8IhZ8hDKo",
    2: "15pnb5RLqMwUhKQpble49v3-nSNn19c7YjcEM5NZPU6o",
    3: "145aSRuoH_hCIL91E-P7hh1UcvtBgCzq9UqN23O3LqSY",
    4: "1uY6gb_ybkldu8zU_TD8x5dAWsj4JPvCit-dZx1tPGDc",
    5: "1Lt7V2tJIheDMeeby-pjNGqFYdUN5BEY06K_mYCSsR78",
    6: "1szEDJa3J5h3F6-Wr7hbnnGJbsifNrKsFKch6Ho-Ib_g",
    7: "1OY8HE2E1xtTgmY7NXIUSIv1QezH6RX0jIjhJOvjDCgY",
    8: "1DGhxzJIa1cF6d77MdrWg-oxfdI3VQ70uzhBHQQEwa1Y",
    9: "1YLELlIEfuPSOZIqcDLAOFrGZO08k8z31EjCMZd4Cr3k",
    10: "1ltdwLkpp4Rk2TXytJNDMtrgmCEvC422DKpD2leTezJU",
    11: "1ZmUR00UkfMpD0jBx4Vlu5XluUYpyUqB4RfZq_qtkEWs",
    12: "1XOtByF3DZXTi59ESkozptU75D5MaaNQoi0u1FPIPpxA",
    13: "1HAkuM5xfof2k8CRq7h1XHUijMtV1NrlA60SattSOv6A",
    14: "1_JdQK_bdXTpoRQdd6goPl74rAcMkb5Zb_dnAVGuKcZM",
    15: "1JrYVkhtInSj__ntYy1bcKX9FBCxoJMiaXgNMDXz-n5k",
    16: "107V8lyHFGCEjrzlHkXkeHoAm2Tg4CTlFkr5KpC-ECYM",
    17: "1K4RzXU16bzdXVIPbwz-pgAJLYU7j9qx2AjciBeIufWo",
    18: "19QtjZyvOmcfDx4xjk-8Qa5P_Y4DWZ-4dGWGLb33qqAs",
    19: "1TcgBohsdpAx-hzy2NjPwcVP9hqK8yWWJEbl53Bnuu2M",
    20: "1wvGSGvqiUCHbYca8p2d2H1FROm4_YLnn0ygZOYMp8k0",
    21: "1ALNMySvdalI5LdtmLSS_l90K0Y7TnNvl3jj-1rzNxDI",
    22: "1MVLwpzLxijvdTLxhc21ZIgrUm0HjXhKtMLaKKlFJy-0",
    23: "1OSB-45qHkGEktfDOilxqAMirvn5vB5fCyFL8Qup13pU",
    24: "1cQEz92-t7YM0H4KmtpSr3jhHyL0dXo1kftDY_keyPoM",
    25: "1ufMwpdXdXVMXpkxc02oA6x0OEgGVQo8A8IGQmweAj2c",
    26: "1mBvBa6yIAOEO2OHN6hrQwZE4TwMhCHq3UpLzwsNzi0A",
    27: "1-_lmC7388St-6yZq0GrzxvgKc3BnzCyAWAdvt27yUVM",
    28: "1vhw7A91Bf-nwTwmlolLuSBF5ZAqusn5LXgjs2D7YNnU",
    29: "1JGagg0NTolFlflYkypRHmETxWKTg_DAwRTHVCWVGBWY",
    30: "10WVivNVmETNOSCWracgIsvqFjzQPjyLxLYXpkuyd3cE",
  },
  python: {
    1: "1IoH5TKEPxft5ooSDigyi0cj13LNcJyqyxyQQdxWxU0c",
    2: "1rvtoTTMWW791U6eIdDRNNpC6c51mdsBby5CZoKXq8B8",
    3: "11iY0m7TvBxcJu6-R6g7y4Ah2npawoXrkrRd5w_22h3s",
    4: "1VLQoBZNYby55Effu-O4od8X1cduo8bxjAvmCWDUhcKA",
    5: "1qWzcYPpVkhQjonzGyc8QNDNP3Rq1yAk_VH6jgnmV4P8",
    6: "1UatHB1IyPG-BYgbUBkfGflWlNZ2ZEO-_pc9fCXKEYhU",
    7: "10A5EDm0owox4vBIOGXKm4e6uY-KrX1CnHYlY5G23rY0",
    8: "1i03AmJMkMKGBd9-OhkYlRIb4wCKPCPqj9hbkufWDRRM",
    9: "1gin7zeFbp0EVJ6UE12Fnwq2xglfnGRT56yNayEq0eb4",
    10: "14YBiwxYTniS2q5q7bJGGX-1RSfCiVlMvrU_eeBvnL94",
    11: "1iII1iYTkDk5LDz-Jy9sx7oaZs2118gFvP-FeL9Q0B1A",
    12: "1NO7EDkW0X5gnfikwQvK3iQJlYSPA1wl4tSt4MlMI-Xo",
    13: "1gGDHeqdyXhSLxvT7HX_jNnQ-9XDPmikRWf8ZcXJIJj4",
    14: "1eDjyZZ947s3kRkGn_9wmRi-N3N8y7ZkJ8oOCXx2p54g",
    15: "1V5ZeqAAzu5rm2XH92P74xKJN4Ph1-YfDscHkDAE3nVQ",
    16: "14t9WUaQQ6DT99Z_LToLV2iY5Kgq--OIVdYv4G1nQRjY",
    17: "11gqss-r9o_dxYoDxgfaQ09EMJTZRyU5exY1VsR_rVFw",
    18: "1F7F8RL_EyTehU5LNvlOTngxo2cF4N4MbC6nhZ60RsQQ",
    19: "18AemM5ZB06Iyh3xwih9mODlVXGo5K-HOeaP-bmSiUAY",
    20: "1Yon0D53xaAzf8D-4G_0u-bXNCpj0KE4mVyp2iVQeZWI",
    21: "1g7J1FhF_XgpvgGd1Q_1d5YZ-66hwCA5RKCM0_khI2U8",
    22: "1b-ksBLoiJ3ZobyyOuSOZE6vR1mQPlOChj-mNHH54RWk",
    23: "1fwbNRiX8j08yxvtBGbPU6wysY3X5nhT1ZOYCF_L02A4",
    24: "1uUaOFw4wIPvAyWFm4Hg3RMmCDOx8DGMLJMIOK5IIyqY",
    25: "1CbPEnb9dcAqpsr6vBXFuiGEUbwSllbcGwW138GuXdJw",
    26: "1jrM4BGbExU7EccACsp4jE_QoX1YXUNQpRNlvxR8gj3o",
    27: "1Qgf-k7RVto2KQ4LfI-ROMziYoaAATteAFT1Tmbc2QoI",
  },
};

// Асинхронная функция для получения данных из Google Docs
async function getDataFromGoogleDocs(language, docNumber) {
  const sheets = google.sheets("v4");
  const spreadsheetId = questionDocs[language][docNumber];

  // Получение информации о документе
  const response = await sheets.spreadsheets.get({
    auth: client,
    spreadsheetId,
  });

  // Массив для хранения данных из всех листов
  const allData = [];

  for (const sheet of response.data.sheets) {
    const range = sheet.properties.title;

    // Получение данных из текущего листа
    const res = await sheets.spreadsheets.values.get({
      auth: client,
      spreadsheetId,
      range,
    });

    const rows = res.data.values;
    allData.push({ rows, title: range });
  }

  return allData;
}

// Асинхронная функция для разбора данных и сохранения из Excel d MongoDB
async function parseAndSaveTopics() {
  await mongoDB(); // подключились к базе данных
  const languages = [
    "javascript",
    //    "python"
  ];

  for (const language of languages) {
    const languageTopicList = await TopicsList.findById(
      "65187c8b450db5dd3ab77cb5"
    );
    const uniqueTopics = new Set();

    let countOfRequests = 0; // устанавливаю лимит на обращения к google
    for (const docNumber in questionDocs[language]) {
      const pages = await getDataFromGoogleDocs(language, docNumber);

      // если лимит достигнут - делаем паузу в 15 секунд и сбрасываем
      if (countOfRequests === 10) {
        console.log("Sleep for 15 seconds".blue);
        await new Promise((resolve) => setTimeout(resolve, 15000));
        countOfRequests = 0;
      }

      for (const sheet of pages) {
        let topic;
        let rowNumber = 1;
        while (!topic) {
          topic = parseRow(sheet.rows[rowNumber]).topic;
          rowNumber++;
        }

        if (uniqueTopics.has(topic)) {
          console.log(`The "${topic}" topic is not unique.\nRange: ${sheet.title}`.red); // prettier-ignore
          continue;
        }

        languageTopicList.topics.push({ topicTitle: topic });
        languageTopicList.save();

        console.log(`Topic "${topic}" was pushed to language topics list`.green); // prettier-ignore

        uniqueTopics.add(topic);
        countOfRequests += 1; // увеличиваем количество обращений по лимиту
      }
    }
  }

  console.log("\nTopics was parsed and saved.".yellow);
  console.log("Disconnected from the DB".yellow);
  process.exit(1); // Exit the application with a non-zero status code
}

function parseRow(row) {
  try {
    const [language, topic, text, example, questionText, answerText] = row;

    // Парсинг answerText
    const answerMatch = answerText.match(/\[(.*?)\]/);
    const answerDifficult = (answerMatch || [])[1]?.toLowerCase();
    const isCorrect = answerText.includes("[CORRECT]");
    const optionText = answerText.match(/\[.*?\] \[.*?\] (.*)/)[1];

    return {
      language,
      topic,
      text,
      example,
      questionText,
      answerDifficult,
      isCorrect,
      optionText,
    };
  } catch (error) {
    console.error(`Error parsing row: ${error}`.red);
  }
}

// Вызов функции для разбора данных
parseAndSaveTopics().catch((e) => {
  console.error(`Parsing error: ${e}`.red);
});
