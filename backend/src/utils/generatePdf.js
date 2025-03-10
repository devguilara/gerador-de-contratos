const PDFDocument = require('pdfkit');
const { Writable } = require('stream');

const generatePdf = (content) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();

    const chunks = [];
    const bufferStream = new Writable({
      write(chunk, encoding, callback) {
        chunks.push(chunk);
        callback();
      },
    });

    bufferStream.on('finish', () => {
      const pdfBuffer = Buffer.concat(chunks);
      resolve(pdfBuffer);
    });

    doc.pipe(bufferStream);

    doc.fontSize(12).text(content, {
      align: 'justify',
    });

    doc.end();
  });
};

module.exports = generatePdf;