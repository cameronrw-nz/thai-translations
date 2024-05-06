export interface ILine {
    sentences: string[];
    words: string[]

}

export interface IStory {
    paragraphs: ILine[][]
    title?: string;
}


export function ProcessStories(): IStory[] {
    const stringStories = Stories.split("---");

    const stories: IStory[] = [];

    stringStories.forEach(storyString => {
        const story: IStory = { paragraphs: [] };

        const paragraphs = storyString.split("\n\n");
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
            story.paragraphs.push(paragraph)
        })

        if (story.title) {
            stories.push(story)
        }
    })

    return stories
}

export const Stories = `
---
แมวน้อยไร้ชื่อ
ฉันเป็นแมว,แมวที่ไม่มีชื่อ ฉัน เป็น แมว แมว ที่ ไม่ มี ชื่อ
ไม่มีใครเคยตั้งชื่อให้ฉันเลย ไม่ มี ใคร เคย ตั้ง ชื่อ ให้ ฉัน เลย
ตอนยังเล็ก,ฉันเป็นแค่,"เจ้าแมวน้อย" ตอน ยัง เล็ก ฉัน เป็น แค่ เจ้า แมว น้อย
พอโตขึ้นมาหน่อย,ก็เหลือแค่,"เจ้าแมว" พอ โต ขึ้น มา หน่อย ก็ เหลือ แค่ เจ้า แมว

แมวในเมืองนี้ทุกตัวต่างก็มีชื่อ แมว ใน เมือง นี้ ทุก ตัว ต่าง ด็ มี ชื่อ
แมวร้านรองเท้าชือ,ลีโอ แมว ร้าน รอง เท้า ชือ ลีโอ
ชื่อของฉันแปลว่าสิงโตนะรู้ไหม ชื่อ ของ ฉัน แปล ว่า สิงโต นะ รู้ ไหม
เจ้าลโอมักจะพูดอย่างภาคภูมิใจ เจ้า ลิโอ มัก จะ พูด อย่าง ภาคภูมิใจ

แมวร้านหนังสือชื่อ,เก็นตะ,หรือเจ้าแจ่มใส แมว ร้าน หนังสือ ชื่อ เก็นตะ หรือ เจ้า แจ่ม ใส
คำว่า"เก็น"มาจากคำว่า"เก็งกิ"ที่แปลว่าร่าเริงแจ่มใส คำ ว่า เก็น มา จาก คำ ว่า เก็งกิ ที่ แปล ว่า ร่า เริง แจ่ม ใส
"สวัสดีจ้า,เก็นตะ" สวัสดี จา เก็นตะ
ลูกค้ามักจะทักทายมันสเมอ ลูกค้า มัก จะ ทักทาย มัน เสมอ
เก็นตะเป็นจุดสนใจของทุกคน เก็นตะ เป็น จุดสนใจ ของ ทุก คน
`