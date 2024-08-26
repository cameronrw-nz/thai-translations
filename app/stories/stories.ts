export interface ILine {
    sentences: string[];
    words: string[]
}

export interface IStoryGroup {
    group: string;
    stories: IStory[];
}

export interface IQuestion {
    question: string;
    answer: string;
}

export interface IStory {
    paragraphs: ILine[][]
    title?: string;
    group: string;
    questions: IQuestion[];
}

export function ProcessStories(): IStoryGroup[] {
    const storyGroupsString = Stories.split("###");

    const storyGroups: IStoryGroup[] = [];
    storyGroupsString.forEach(storyGroup => {
        const splitGroup = storyGroup.split("---");
        let [group, ...stringStories] = splitGroup;

        const groupOfStories: IStoryGroup = { group, stories: [] }

        stringStories.forEach(storyString => {
            const story: IStory = { paragraphs: [], group: group, questions: [] };

            const [storyContentString, questionsAnswersString] = storyString.split("|||");

            const paragraphs = storyContentString.split("\n\n");
            paragraphs.forEach(paragraphString => {
                const stringLines = paragraphString.split("\n");

                const paragraph: ILine[] = []
                stringLines.forEach(line => {
                    if (!line) {
                        return;
                    }

                    if (!story.title) {
                        story.title = line;
                    }
                    else {
                        const parts = line.split(" ")
                        const [jointSentences, ...words] = parts

                        const sentences = jointSentences.split(",");

                        paragraph.push({
                            sentences,
                            words
                        })
                    }
                })

                const questionsAnswers = questionsAnswersString?.split("\n");
                questionsAnswers?.forEach(questionAnswer => {
                    if (!questionAnswer) {
                        return;
                    }
                    const [question, answer] = questionAnswer.split(" ")
                    story.questions.push({ question, answer })
                })

                story.paragraphs.push(paragraph)
            })

            if (story.title) {
                groupOfStories.stories.push(story)
            }
        })

        if (groupOfStories.stories.length) {
            storyGroups.push(groupOfStories)
        }
    })

    return storyGroups
}

export const Stories = `
### 
Childrens Stories
---
แมวน้อยไร้ชื่อ
ฉันเป็นแมว,แมวที่ไม่มีชื่อ ฉัน เป็น แมว แมว ที่ ไม่ มี ชื่อ
ไม่มีใครเคยตั้งชื่อให้ฉันเลย ไม่ มี ใคร เคย ตั้ง ชื่อ ให้ ฉัน เลย
ตอนยังเล็ก,ฉันเป็นแค่,"เจ้าแมวน้อย" ตอน ยัง เล็ก ฉัน เป็น แค่ เจ้า แมว น้อย
พอโตขึ้นมาหน่อย,ก็เหลือแค่,"เจ้าแมว" พอ โต ขึ้น มา หน่อย ก็ เหลือ แค่ เจ้า แมว

แมวในเมืองนี้ทุกตัวต่างก็มีชื่อ แมว ใน เมือง นี้ ทุก ตัว ต่าง ก็ มี ชื่อ
แมวร้านรองเท้าชือ,ลีโอ แมว ร้าน รอง เท้า ชือ ลีโอ
ชื่อของฉันแปลว่าสิงโตนะรู้ไหม ชื่อ ของ ฉัน แปล ว่า สิงโต นะ รู้ ไหม
เจ้าลโอมักจะพูดอย่างภาคภูมิใจ เจ้า ลิโอ มัก จะ พูด อย่าง ภาคภูมิใจ

แมวร้านหนังสือชื่อ,เก็นตะ,หรือเจ้าแจ่มใส แมว ร้าน หนังสือ ชื่อ เก็นตะ หรือ เจ้า แจ่ม ใส
คำว่า"เก็น"มาจากคำว่า"เก็งกิ"ที่แปลว่าร่าเริงแจ่มใส คำ ว่า เก็น มา จาก คำ ว่า เก็งกิ ที่ แปล ว่า ร่า เริง แจ่ม ใส
"สวัสดีจ้า,เก็นตะ" สวัสดี จา เก็นตะ
ลูกค้ามักจะทักทายมันสเมอ ลูกค้า มัก จะ ทักทาย มัน เสมอ
เก็นตะเป็นจุดสนใจของทุกคน เก็นตะ เป็น จุดสนใจ ของ ทุก คน
---
### 
Grade 1 Stories
---
ราชามีลา
ตามีลา ตา มี ลา
ลามานาตา ลา มา นา ตา
ราชามาหาลา ราชา มา หา ลา
ตาพาลามาหาราชา ตา พา ลา มา หา ราชา
|||
ราชามี___ ลา
ลามา___ นา
___มาหาลา ราชา
___พาลามาหาราชา ตา
---
ดูกีฬา
ชาลีพาตาชูมาดูกีฬา ชาลี พา ตาชู มา ดู กีฬา
ตาชูมีหูตาดี ตาชู มี หู ตา ดี
ดูดีดีมีรูงู ดู ดี ดี มี รู งู
ดูดีดีมีรูปู ดู ดี ดี มี รู ปู
ตาชูดูงู,ตาชูไม่ดูกีฬา ตาชู ดู งู ตาชู ไม่ ดู กีฬา
|||
ชาลีพา___มา ตาชู
ข้างทางมี___ รูปู
ตาชูดู___ งู
ตาชูไม่ดู___ กีฬา
---
ยาตาจือ
มือชาลีมีปูนา มือ ชาลี มี ปู นา
อืออือชาลีมือชา อือ อือ ชาลี มือ ชา
ตาจือมียาดีดี ตาจือ มี ยา ดี ดี
ตาจือทายามือชาลี ตาจือ ทา ยา มือ ชาลี
ยาตาจือลือชา ยา ตาจือ ลือ ชา
|||
มือชาลีมี___ ปูนา
ชาลีร้องไห้เพราะ___ มือชา
___มียาดี ตาจือ
ตาจือ___ให้ชาลี ทายา
---
มีอะไรในแห
คาวีและมาลีมีแพ คาวี และ มาลี มี แพ
คาวีและมาลีมีแห คาวี และ ทาลี มี แห
ดูซิในแหมีอะไร ดู ซิ ใน แห มี อะไร
มาลีนัวเราะหึหึ มาลี นัวเราะ หึ หึ
ในแหมีนาฬิกา ใน แห มี นาฬิกา
|||
คาวีและมาลีมี___ แพ
ดูซิใน___มีอะไร แห
มาลี___หึหึ นัวเราะ
มี___อยู่ในแห นาฬกา
---
ปราบโคดุ
ราชินีและมาหาฦๅษี ราชินี และ มา หา ฦๅษี
ราชินีว่าภูเขามีโคสีดำ ราชินี ว่า ภูเขา มี คโ สีดำ
โคสีดำดุมุทะลุ โค สีดำ ดุ มุ ทะ ลุ
ฦๅษีว่าคาถาฮะฮะฮิฮิ ฦๅษี ว่า คาถา ฮะ ฮะ ฮิ ฮิ
โคสีดำใจดีราชินีก็พอใจ โค สีดำ ใจดี ราชินี ก็ พอใจ
|||
ราชินีมาหา___ ฦๅษี
โคมีนิสัย___ มุทะลุ
ฦๅษีว่า___ฮะฮะฮิฮิ คาถา
โคสีดำก็___ ใจดี
---
เจ้าพายุ
ปิติมีม้าตัวโต๑ตัว ปิติ มี ม้า ตัว โต ๑ ตัว
ม้าปิติชื่อว่าเจ้าพายุ ม้า ปิติ ชื่อ ว่า เจ้า พายุ
ปิติเกาะคอเจ้าพายุ ปิติ เกาะ คอ เจ้า พายุ
เจ้าพายุพาปิติไปนาบัว เจ้า พายุ พา ปิติ ไป นาบัว
ปิติพอใจเอาหญ้าดีดีให้พายุ ปิติ พอใจ เอา หญ้า ดี ดี ให้ พายุ
|||
ปิติมีม้า___ ตัวโต
___ของปิติชื่อพายุ ม้า
พายุพาปิติไป___ นาบาว
ปิติเอา___ให้พายุ หญ้า
---
คุณป้า
ปาปาป้า ปา ปา ป้า
สระอาปาป้า สระ อา ปา ป้า
มีกบตัวใหญ่ มี กบ ตัว ใหญ่
ในกระเป๋าคณป้า ใน กระ เป๋า คุณ ป้า
---
ผีตัวดำ
มีผีในห้องนี้ มี ผี ใน ห้อง นี้
ดูดีดีผีตัวดำ ดู ดี ดี ผี ตัว ดำ
ผมยาวดูน่าขำ ผม ยาว ดู น่า ขำ
ผีตัวดำจำให้ดี ผี ตัว ดำ จำ ให้ ดี
`