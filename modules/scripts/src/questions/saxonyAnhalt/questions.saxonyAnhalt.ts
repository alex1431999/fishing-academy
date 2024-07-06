import { PdfReader } from 'pdfreader'
import path from 'path'

export class SaxonyAnhaltQuestionExtractor {
    public extract() {
        const pdfReader = new PdfReader(null)

        pdfReader.parseFileItems(this.inputPath, (err, item) => {
            console.log(err);
            console.log(item);
            
        })
    }

    private get inputPath(): string {
        return path.join(__dirname, '/input/questions.pdf')
    }
}

export const saxonyAnhaltQuestionExtractor = new SaxonyAnhaltQuestionExtractor()