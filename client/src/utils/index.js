import { surpriseMePrompts } from '../assets/constants';
import FileSaver from 'file-saver';
export function getRandomPrompts(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    return randomPrompt;
}


export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `donwload-${_id}.jpg`);
}