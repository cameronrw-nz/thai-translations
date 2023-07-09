export interface ILine {
    sentences: string[];
    words: string[]

}

export interface IStory {
    lines: ILine[];
    title?: string;
}


export function ProcessStories(): IStory[] {
    const stringStories = Stories.split("---");

    const stories: IStory[] = [];

    stringStories.forEach(storyString => {
        const story: IStory = { lines: [] };
        const stringLines = storyString.split("\n");

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

                story.lines.push({
                    sentences,
                    words
                })
            }
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
`