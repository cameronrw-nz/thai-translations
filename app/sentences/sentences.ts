export interface ILearningSubject {
    topic: string;
    groupings: IGrouping[];
}

export interface IGrouping {
    groupingName: string;
    sentences: ISentence[];
    questions: IQuestion[];
}

export interface IQuestion {
    question: string;
    parts: string[];
    answers: IAnswer[];
}

interface IAnswer {
    answer: string;
    parts: string[];
}

export interface ISentence {
    sentence: string;
    parts: string[];
}

export function ProcessSentences(): ILearningSubject[] {
    const learningSubjectString = sentences.split("|||");

    const learningSubjects: ILearningSubject[] = [];
    learningSubjectString.forEach(learningSubjectString => {
        const splitGroup = learningSubjectString.split("---");

        let [learningSubjectName, ...groupingsString] = splitGroup;

        const learningSubject: ILearningSubject = { topic: learningSubjectName, groupings: [] }

        groupingsString.forEach(groupingString => {
            const [groupingName, ...groupingContents] = groupingString.split("Questions");
            const [questionsString, sentencesString] = groupingContents.join("\n").split("Sentences");

            const grouping: IGrouping = { groupingName: groupingName, sentences: [], questions: [] }

            const questionAnswersStrings = questionsString.split("+++");
            questionAnswersStrings.forEach(questionAnswerString => {
                const [questionString, answersString] = questionAnswerString.split("===");

                const [question, questionParts] = processLine(questionString);

                const answers = answersString?.split("\n").map(answerString => {
                    const [answer, answerParts] = processLine(answerString);

                    const answerObject: IAnswer = { answer, parts: answerParts };

                    return answerObject
                }) ?? []

                const questionObject: IQuestion = { question, parts: questionParts, answers: answers };

                grouping.questions.push(questionObject);
            });

            const sentencesStrings = sentencesString.split("\n");
            sentencesStrings.forEach(sentenceString => {
                const [sentence, sentenceParts] = processLine(sentenceString);

                const sentenceObject: ISentence = { sentence: sentence, parts: sentenceParts };

                grouping.sentences.push(sentenceObject);
            });

            learningSubject.groupings.push(grouping);
        });

        learningSubjects.push(learningSubject);
    });

    return learningSubjects;
}

function processLine(line: string): [string, string[]] {
    const parts = line.split(" ");
    const [sentence, ...words] = parts;

    return [sentence, words];
}


export const sentences = `
Level 1 - Speaking
---
วันที่ 1
Questions
ผิดไหมครับ ผิด ไหม ครับ
===
ไม่ผิดครับ ไม่ ผิด ครับ
ผิด2ครับ ผิด 2 ครับ
+++
เข้าใจไหมครับ เข้า ใจ ไหม ครับ
===
เข้าใจครับ เข้า ใจ ครับ
ไม่่เข้าใจครับ ไม่ เข้า ใจ ครับ
Sentences
---
วันที่ 2
Questions
สบายดีรึครับ สบาย ดี รึ ครับ
===
สบายดีครับ สบาย ดี ครับ
+++
คุณชื่ออะไรครับ คุณ ชื่อ อะไร ครับ
===
ผมชื่อสมชายครับ ผม ชื่อ สมชาย ครับ
ดิฉันชื่อสมหญิงค่ะ ดิฉัน ชื่อ สมหญิง ค่ะ
+++
เขาชื่ออะไรครับ เขา ชื่อ อะไร ครับ
===
เขาชื่อสมชายครับ เขา ชื่อ สมชาย ครับ
+++
คุณชื่อสมชายรึครับ คุณ ชื่อ สมชาย รึ ครับ
===
ครับ_ผมชื่อสมชายครับ ครับ ผม ชื่อ สมชาย ครับ
Sentences
ขอโทษครับ ขอ โทษ ครับ
สวัสดีครับ สวัสดี ครับ
ขอบคุณครับ ขอบคุณ ครับ
ไม่เป็นไรครับ ไม่ เป็น ไร ครับ
---
วันที่ 3
Questions
นี่ภาษาไทยเรียกว่าอะไรครับ นี่ ภาษา ไทย เรียก ว่า อะไร ครับ
===
นั่นภาษาไทยเรียกว่าปากกาครับ นั่น ภาษา ไทย เรียก ว่า ปากกา ครับ
+++
นี่ภาษาไทยเรียกว่าดินสอรึครับ นี่ ภาษา ไทย เรียก ว่า ดินสอ รึ ครับ
===
ครับ_นั่นภาษาไทยเรียกว่าดินสอครับ ครับ นั่น ภาษา ไทย เรียก ว่า ดินสอ ครับ
ไม่ใช่ครับ_นั่นภาษาไทยเรียกว่าปากกาครับ ไม่ ใช่ ครับ นั่น ภาษา ไทย เรียก ว่า ปากกา ครับ
ไม่ทราบครับ ไม่ ทราบ ครับ
+++
ดินสอสีอะไรครับ ดินสอ สี อะไร ครับ
===
ดินสอสีฟ้าครับ ดินสอ สี ฟ้า ครับ
+++
คุณชอบสีอะไรครับ คุณ ชอบ สี อะไร ครับ
===
ดิฉันชอบสีแดงค่ะ ดิฉัน ชอบ สี แดง ค่ะ
+++
คุณชอบดินสอสีอะไรครับ คุณ ชอบ ดินสอ สี อะไร ครับ
===
ดิฉันชอบดินสอสีส้มค่ะ ดิฉัน ชอบ ดินสอ สี ส้ม ค่ะ
+++
คุณชอบพูดภาษาอะไรครับ คุณ ชอบ พูด ภาษา อะไร ครับ
===
ผมชอบพูดภาษาไทยครับ ผม ชอบ พูด ภาษา ไทย ครับ
+++
คุณชอบพูดภาษาอังกฦษไหมครับ คุณ ชอบ พูด ภาษา อังกฦษ ไหม ครับ
===
ดิฉันชอบพูดภาษาอังกฦษค่ะ ดิฉัน ชอบ พูด ภาษา อังกฦษ ค่ะ
ผมไม่ชอบพูดภาษาอังกฦษครับ ผม ไม่ ชอบ พูด ภาษา อังกฦษ ครับ
Sentences
|||
Level 2 - Speaking
---
วันที่ 14
Questions
คุณต้องการตั๋วชั้นไหนครับ คุณ ต้องการ ตั๋ว ชั้น ไหน ครับ
+++
คุณต้องการห้องเดี่ยวหรือห้องคู่ครับ คุณ ต้องการ ห้อง เดี่ยว หรือ ห้อง คู่ ครับ
+++
คุณต้องการตั๋วเที่ยวเดี่ยวหรือไปกลับครับ คุณ ต้องการ ตั๋ว เที่ยว เดี่ยว หรือ ไป กลับ ครับ
Sentences
คนต่างประเทศต้องการวีซ่า คน ต่าง ประเทศ ต้องการ วีซ่า
โรงพยาบาลต้องการหมอ โรงพยาบาล ต้องการ หมอ
ต้นไม้ต้องการน้ำ ต้นไม้ ต้องการ น้ำ
ปกติผมทำงานก่อนมาโรงเรียน ปกติ ผม ทำงาน ก่อน มา โรงเรียน
ปกติครุนอนดึก ปกติ ครุ นอน ดึก
ผมขยันทำงานเป็นพิเศษ ผม ขยัน ทำงาน เป็น พิเศษ
ดิฉันแต่งหน้าสวยเป็นพิเศษ ดิฉัน แต่งหน้า สวย เป็น พิเศษ
ลดให้เป็นพิเศษ ลด ให้ เป็น พิเศษ
ทำให้เป็นพิเศษ ทำ ให้ เป็น พิเศษ
ขายให้เป็นพิเศษ ขาย ให้ เป็น พิเศษ
สมมุติว่าตั๋วเครื่องบินเต็ม_คุณจะทำยังไงครับ สมมุติ ว่า ตั๋ว เครื่องบิน เต็ม คุณ จะ ทำ ยังไง ครับ
สมมุติว่าบัตรประชาชนหมดอายุ_คุณจะทำยังไงครับ สมมุติ ว่า บัตร ประชาชน หมด อายุ คุณ จะ ทำ ยังไง ครับ
สมมุติว่าสืมจองตั๋ว_คุณจะทำยังไงครับ สมมุติ ว่า สืม จอง ตั๋ว คุณ จะ ทำ ยังไง ครับ
จะซื้อตั๋วเที่ยวเดี่ยวรึไปกลับก็แล้วแต่คุณ จะ ซื้อ ตั๋ว เที่ยว เดี่ยว รึ ไป กลับ ก็ แล้วแต่ คุณ
จะพักห้องเดี่ยวรึห้องคู่ก็แล้วแต่เพื่อน จะ พัก ห้อง เดี่ยว รึ ห้อง คู่ ก็ แล้วแต่ เพื่อน
`