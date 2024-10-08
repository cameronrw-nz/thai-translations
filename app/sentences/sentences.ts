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

    return [sentence.trim(), words];
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
เข้าใจไหมครับ เข้าใจ ไหม ครับ
===
เข้าใจครับ เข้าใจ ครับ
ไม่เข้าใจครับ ไม่ เข้าใจ ครับ
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
ขอโทษครับ ขอโทษ ครับ
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
คุณชอบพูดภาษาอังกฤษไหมครับ คุณ ชอบ พูด ภาษา อังกฤษ ไหม ครับ
===
ดิฉันชอบพูดภาษาอังกฤษค่ะ ดิฉัน ชอบ พูด ภาษา อังกฤษ ค่ะ
ผมไม่ชอบพูดภาษาอังกฤษครับ ผม ไม่ ชอบ พูด ภาษา อังกฤษ ครับ
Sentences
|||
Level 2 - Speaking
---
วันที่ 2
Questions
คุณออกกำลังกับใครครับ คุณ ออกกำลัง กับ ใคร ครับ
===
ผมออกกำลังคนเดียวครับ ผม ออกกำลัง คน เดียว ครับ
+++
คุณทานอาหารเย็นกับใครครับ คุณ ทาน อาหารเย็น กับ ใคร ครับ
===
ผมทานอาหารเย็นคนเดียวครับ ผม ทาน อาหารเย็น คน เดียว ครับ
+++
คุณดูกีฬากับใครครับ คุณ ดู กีฬา กับ ใคร ครับ
===
ผมดูกีฬาคนเดียวครับ ผม ดู กีฬา คน เดียว ครับ
+++
คุณไปตลาดนำ้กับใครครับ คุณ ไป ตลาด นำ้ กับ ใคร ครับ
===
ผมไปตลาดนำ้คนเดียวครับ ผม ไป ตลาด นำ้ คน เดียว ครับ
Sentences
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
ปกติครูนอนดึก ปกติ ครู นอน ดึก
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
จะไปภูเขารึทะเลก็แล้วแต่ฦดู จะ ไป ภูเขา รึ ทะเล ก็ แล้วแต่ ฦดู
ขอโทษครับ_ผมต้องรีบไปต่อวีซาครับ ขอโทษ ครับ ผม ต้อง รีบ ไป ต่อ วีซา ครับ
ขอโทษครับ_ผมต้องรีบไปลงทะเบียนครับ ขอโทษ ครับ ผม ต้อง รีบ ไป ลง ทะเบียน ครับ
ขอโทษครับ_ผมต้องรีบไปจองตั๋วครับ ขอโทษ ครับ ผม ต้อง รีบ ไป จอง ตั๋ว ครับ
---
วันที่ 15
Questions
สตางค์หายตอนไหนนะครับ สตางค์ หาย ตอน ไหน นะ ครับ
Sentences
แม่ครัวทำนาฬิกาเสีย แม่ครัว ทำ นาฬิกา เสีย
พ่อทำชามร้าว พ่อ ทำ ชาม ร้าว
นักเรียนทำสมุดขาด นักเรียน ทำ สมุด ขาด
เพี่อนทำกระเป๋าสตางค์หาย เพี่อน ทำ กระเป๋า สตางค์ หาย
ใครทำจานบิ่น ใคร ทำ จาน บิ่น
กินขนมมากมากทำให้อ้วนขึ้น กิน ขนม มาก มาก ทำ ให้ อ้วน ขึ้น
เรียนมากมากทำให้ปวดหัว เรียน มาก มาก ทำ ให้ ปวด หัว
พูดมากมากทำให้คอแห้ง พูด มาก มาก ทำ ให้ คอ แห้ง
อากาศร้อนทำให้เหนื่ย อากาศ ร้อน ทำ ให้ เหนื่อย
ตำรวจไม่ให้จอดที่ที่นะครับ ตำรวจ ไม่ ให้ จอด ที่ ที่ นะ ครับ
วันนี้เขาจะกลับบ้านเร็วนะครับ วัน นี้ เขา จะ กลับ บ้าน เร็ว นะ ครับ
พรุ่งนี้นักเรียนต้องสอบนะครับ พรุ่ง นี้ นักเรียน ต้อง สอบ นะ ครับ
เก็บดีดีนะครับ_ระวังจะหาย เก็บ ดี ดี นะ ครับ ระวัง จะ หาย
วางดีดีนะครับ_ระวังจะแตก วาง ดี ดี นะ ครับ ระวัง จะ แตก
ถืดีดีนะครับ_เดี๋ยวจะตก ถื ดี ดี นะ ครับ เดี๋ยว จะ ตก
ขับดีดีนะครับ_เดี๋ยวจะขนกัน ขับ ดี ดี นะ ครับ เดี๋ยว จะ ขน กัน
เวลาเสื้อคับไปก็ต้องแก้ เวลา เสื้อ คับ ไป ก็ ต้อง แก้
เวลาปวดหัวก็ตองกินยาแก้ปวด เวลา ปวด หัว ก็ ตอง กิน ยา แก้ ปวด
เวลาเก้าอี้หักก็ต้องซ่อม เวลา เก้าอี้ หัก ก็ ต้อง ซ่อม
เวลาทีวีเสียก็ต้องซ่อม เวลา ทีวี เสีย ก็ ต้อง ซ่อม
เวลากางเกงคาดก็ต้องเย็บ เวลา กางเกง คาด ก็ ต้อง เย็บ
เวลาแก้วแตกก็ต้องทิ้ง เวลา แก้ว แตก ก็ ต้อง ทิ้ง
---
วันที่ 16
Questions
Sentences
น้องสาวผมขิ่มอเตอร์ไซค์ไม่เป็น น้อง สาว ขิ่ มอเตอร์ไซค์ ไม่ เป็น
ผมเย็บเสื้อไม่เป็น ผม เย็บ เสื้อ ไม่ เป็น
พี่ชายผมขับรถไม่เป็น พี่ ชาย ผม ขับ รถ ไม่ เป็น
น้องชายผมซอยผมไม่เป็น น้อง ชาย ผม ซอย ผม ไม่ เป็น
พี่ชายขี่มอเตอร์ไซค์ไปเชีงใหม่ไม่ไหว พี่ ชาย ขี่ มอเตอร์ไซค์ ไป เชีงใหม่ ไม่ ไหว
พี่ชายเย็บเสื้อ10ตัวไม่ไหว พี่ ชาย เย็บ เสื้อ 10 ตัว ไม่ ไหว
ครูสอนวันละ10ชั่วโมงไม่ไหว ครู สอน วัน ละ 10 ชั่วโมง ไม่ ไหว
ครูทำงานทุกวันไม่ไหว ครู ทำงาน ทุก วัน ไม่ ไหว
เราเรียนภาษาไทยได้ เรา เรียน ภาษา ไทย ได้
เราเรียนภาษาไทยไม่ได้ เรา เรียน ภาษา ไทย ไม่ ได้
เราเรียนภาษาไทยไม่ค่อยได้ เรา เรียน ภาษา ไทย ไม่ ค่อย ได้
เราเรียนภาษาไทยยังไม่ได้ เรา เรียน ภาษา ไทย ยัง ไม่ ได้
เราเรียนภาษาไทยไม่ได้เลย เรา เรียน ภาษา ไทย ไม่ ได้ เลย
เขาพยายามฝึกหัดออกเสียงให้ชัด เขา พยายาม ฝึกหัด ออก เสียง ให้ ชัด
เขาพยายานอธิบายให้เข้าใจ เขา พยายาน อธิบาย ให้ เข้าใจ
ผมพยายามเขียนให้สวย ผม พยายาม เขียน ให้ สวย
คุณพยายามแก้ให้ถูก คุณ พยายาม แก้ ให้ ถูก
ผมเพิ่งเรีนภาษาไทย ผม เพิ่ง เรีน ภาษา ไทย
ผมเพิ่งฝึกหัดพูด ผม เพิ่ง ฝึกหัด พูด
ผมเพิ่งลองอ่าน ผม เพิ่ง ลอง อ่าน
ช่วยอธิบายประโยคนี้ให้หน่อยครับ ช่วย อธิบาย ประโยค นี้ ให้ หน่อย ครับ
ช่วยรูปประโยคนี้หน่อยครับ ช่วย รูป ประโยค นี้ หน่อย ครับ
ช่วยความหมายหน่อยครับ ช่วย ความ หมาย หน่อย ครับ
ช่วยคำนี้หน่อยครับ ช่วย คำ นี้ หน่อย ครับ
ถ้าอธิบายไม่ถูกช่วยบอกด้วยนะครับ ถ้า อธิบาย ไม่ ถูก ช่วย บอก ด้วย นะ ครับ
ถ้าตอบผิดช่วยแก้ด้วยนะครับ ถ้า ตอบ ผิด ช่วย แก้ ด้วย นะ ครับ
ถ้าอ่านผิดช่วยแก้ด้วยนะครับ ถ้า อ่าน ผิด ช่วย แก้ ด้วย นะ ครับ
ถ้าออกเสียงไม่ถูกช่วยแก้ด้วยนะครับ ถ้า ออก เสียง ไม่ ถูก ช่วย แก้ ด้วย นะ ครับ
พูดง่ายง่ายหน่อยค่ะ_ดิฉันไม่เข้าใจคะ พูด ง่าย ง่าย หน่อย ค่ะ ดิฉัน ไม่ เข้าใจ คะ
พูดดังดังหน่อยครับ_ผมไม่ได้ยินครับ พูด ดัง ดัง หน่อย ครับ ผม ไม่ ได้ ยิน ครับ
พูดช้าช้าหน่อยคะ_ดิฉันฟังไม่ได้คะ พูด ช้า ช้า หน่อย คะ ดิฉัน ฟัง ไม่ ได้ คะ
---
วันที่ 17
Questions
Sentences
หมอห้ามกินอาหารเผ็ด หมอ ห้าม กิน อาหาร เผ็ด
หมอห้ามยกของหนัก หมอ ห้าม ยก ของ หนัก
หมอห้ามดื่มนำ้เย็น หมอ ห้าม ดื่ม นำ้ เย็น
หมอบอกว่าต้องฉีดยาทุกอาทิตย์ หมอ บอก ว่า ต้อง ฉีด ยา ทุก อาทิตย์
หมอบอกว่าต้องไปตรวจทุกเดือน หมอ บอก ว่า ต้อง ไป ตรวจ ทุก เดือน
หมอบอกว่าอมยาทุก4ชั่วโมง หมอ บอก ว่า อม ยา ทุก 4 ชั่วโมง
หมอบอกว่าต้องทายาวันละ3ครั้ง หมอ บอก ว่า ต้อง ทา ยา วัน ละ 3 ครั้ง
อาเจียนทา3ชั้วโมงแล้ะนา่จะไปโรงพยาบาล อาเจียน ทา 3 ชั้วโมง แล้ะ นา่จะ ไป โรงพยาบาล
ปวดหัวมา4วันแล้ะน่าจะกินยา ปวด หัว มา 4 วัน แล้ะ น่าจะ กิน ยา
ท้องเสียมาหลายวันแล้ะน่าจะไปหาหมอ ท้อง เสีย มา หลาย วัน แล้ะ น่าจะ ไป หา หมอ
ไอมา2เดือนแล้ะน่าจะไปตรวจ ไอ มา 2 เดือน แล้ะ น่าจะ ไป ตรวจ
ท้องเดินอย่างนี้ไม่น่าจะไปเที่ยว ท้อง เดิน อย่าง นี้ ไม่ น่าจะ ไปเที่ยว
เป็นไข้อย่างนี้ไม่น่าจะเดินทาง เป็น ไข้ อย่าง นี้ ไม่ น่าจะ ดิน ทาง
เป็นหวัดอย่างนี้น่าจะเปิดแอร์ เป็น หวัด อย่ง นี้ น่าจะ เปิด แอร์
ไออย่างนี้ไม่น่าจะไปทำงาน ไอ อย่าง นี้ ไม่ น่าจะ ไป ทำงาน
`