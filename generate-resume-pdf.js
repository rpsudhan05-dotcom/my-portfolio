import PDFDocument from 'pdfkit';
import fs from 'fs';

function generateResumePDF(outputPath) {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 38, bottom: 38, left: 46, right: 46 },
    info: {
      Title: 'Pandiya Sudhan R - Product Designer Resume',
      Author: 'Pandiya Sudhan R',
      Subject: 'AI Powered Product Designer / UI/UX Designer Resume',
      Keywords: 'Product Design, UI/UX, Design Systems, Fintech SaaS, Figma, AI Tools'
    }
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const primaryColor = '#171717';
  const secondaryColor = '#4B5563';
  const mutedColor = '#6B7280';
  const dividerColor = '#E5E7EB';
  const linkColor = '#2563EB';

  const leftMargin = 46;
  const rightMargin = doc.page.width - 46;
  const contentWidth = rightMargin - leftMargin;

  // Helper for drawing divider line
  function drawDivider(y) {
    doc.save()
       .strokeColor(dividerColor)
       .lineWidth(0.75)
       .moveTo(leftMargin, y)
       .lineTo(rightMargin, y)
       .stroke()
       .restore();
  }

  // Helper for section header
  function drawSectionHeader(title, y) {
    doc.font('Helvetica-Bold')
       .fontSize(9.5)
       .fillColor(secondaryColor)
       .text(title.split('').join(' '), leftMargin, y, {
         align: 'center',
         width: contentWidth,
         characterSpacing: 2
       });
    return y + 16;
  }

  let curY = 38;

  // 1. NAME
  doc.font('Helvetica-Bold')
     .fontSize(24)
     .fillColor(primaryColor)
     .text('P a n d i y a   S u d h a n   R', leftMargin, curY, {
       align: 'center',
       width: contentWidth
     });

  curY += 32;

  // 2. SUBTITLE
  doc.font('Helvetica-Bold')
     .fontSize(9)
     .fillColor(mutedColor)
     .text('AI POWERED PRODUCT DESIGNER   ·   UI/UX DESIGNER', leftMargin, curY, {
       align: 'center',
       width: contentWidth,
       characterSpacing: 1.2
     });

  curY += 18;

  // 3. CONTACT ROW
  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor(secondaryColor)
     .text('+91 81221 68467   •   rpsudhan05@gmail.com   •   linkedin.com/in/pandiyasudhanr   •   pandiyasudhan.pro', leftMargin, curY, {
       align: 'center',
       width: contentWidth
     });

  curY += 16;
  drawDivider(curY);
  curY += 10;

  // 4. SUMMARY
  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor('#262626')
     .text(
       'AI-powered Product Designer with 4 years of experience in UI/UX design and 2 years of experience in graphic design. Specialized in fintech SaaS, dashboards, mobile experiences, design systems, and UX strategy — combining product thinking, visual design, and front-end understanding to design scalable, developer-friendly digital products.',
       leftMargin,
       curY,
       {
         align: 'center',
         width: contentWidth,
         lineGap: 3
       }
     );

  curY += 40;
  drawDivider(curY);
  curY += 12;

  // 5. WORK EXPERIENCE
  curY = drawSectionHeader('W O R K   E X P E R I E N C E', curY);
  curY += 2;

  // Experience 1: Nomi
  doc.font('Helvetica-Bold')
     .fontSize(9)
     .fillColor(primaryColor)
     .text('AI-POWERED PRODUCT DESIGNER / UI-UX DESIGNER', leftMargin, curY, {
       continued: false,
       width: contentWidth - 110
     });

  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor(mutedColor)
     .text('Jul 2025 — Jun 2026', rightMargin - 110, curY, {
       align: 'right',
       width: 110
     });

  curY += 12;

  doc.font('Helvetica-Oblique')
     .fontSize(8.5)
     .fillColor(mutedColor)
     .text('Nomi — Cloud-Based Fintech SaaS · India, Remote', leftMargin, curY);

  curY += 12;

  const nomiBullets = [
    'Redesigned fintech SaaS dashboard workflows, simplifying complex financial data into clearer KPI visibility and decision-friendly product experiences.',
    'Ran UK-based user interviews via Microsoft Teams, Hotjar heatmaps, and time-on-task observations to identify and resolve usability gaps.',
    'Created user flows, wireframes, prototypes, and developer-ready handoffs in close collaboration with product and engineering teams.',
    'Built design-system foundations — color tokens, typography scale, spacing rules, components, and interaction states.'
  ];

  nomiBullets.forEach((bullet) => {
    doc.font('Helvetica')
       .fontSize(8.5)
       .fillColor('#262626')
       .text('•', leftMargin + 6, curY, { width: 10, continued: false });
    doc.text(bullet, leftMargin + 18, curY, {
      width: contentWidth - 18,
      lineGap: 2
    });
    curY += doc.heightOfString(bullet, { width: contentWidth - 18, lineGap: 2 }) + 3.5;
  });

  curY += 6;

  // Experience 2: Walinns
  doc.font('Helvetica-Bold')
     .fontSize(9)
     .fillColor(primaryColor)
     .text('UI/UX DESIGNER & GRAPHIC DESIGNER', leftMargin, curY, {
       continued: false,
       width: contentWidth - 110
     });

  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor(mutedColor)
     .text('Sep 2023 — Jun 2025', rightMargin - 110, curY, {
       align: 'right',
       width: 110
     });

  curY += 12;

  doc.font('Helvetica-Oblique')
     .fontSize(8.5)
     .fillColor(mutedColor)
     .text('Walinns Innovation · Coimbatore, Tamil Nadu', leftMargin, curY);

  curY += 12;

  const walinnsBullets = [
    'Designed responsive websites, product screens, and interfaces focused on usability, clarity, and conversion.',
    'Translated client requirements into structured user flows and information architecture.',
    'Produced wireframes, UI layouts, prototypes, and design handoffs in collaboration with internal teams and client stakeholders.',
    'Produced marketing creatives and brand visuals supporting product launches and campaigns.'
  ];

  walinnsBullets.forEach((bullet) => {
    doc.font('Helvetica')
       .fontSize(8.5)
       .fillColor('#262626')
       .text('•', leftMargin + 6, curY, { width: 10, continued: false });
    doc.text(bullet, leftMargin + 18, curY, {
      width: contentWidth - 18,
      lineGap: 2
    });
    curY += doc.heightOfString(bullet, { width: contentWidth - 18, lineGap: 2 }) + 3.5;
  });

  curY += 6;

  // Experience 3: Big Eye Studios
  doc.font('Helvetica-Bold')
     .fontSize(9)
     .fillColor(primaryColor)
     .text('UI/UX & GRAPHIC DESIGNER', leftMargin, curY, {
       continued: false,
       width: contentWidth - 110
     });

  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor(mutedColor)
     .text('Mar 2019 — Sep 2022', rightMargin - 110, curY, {
       align: 'right',
       width: 110
     });

  curY += 12;

  doc.font('Helvetica-Oblique')
     .fontSize(8.5)
     .fillColor(mutedColor)
     .text('Big Eye Studios · Coimbatore, Tamil Nadu', leftMargin, curY);

  curY += 12;

  const bigEyeBullets = [
    'Created social media creatives, marketing visuals, and brand communication assets for advertisement projects.'
  ];

  bigEyeBullets.forEach((bullet) => {
    doc.font('Helvetica')
       .fontSize(8.5)
       .fillColor('#262626')
       .text('•', leftMargin + 6, curY, { width: 10, continued: false });
    doc.text(bullet, leftMargin + 18, curY, {
      width: contentWidth - 18,
      lineGap: 2
    });
    curY += doc.heightOfString(bullet, { width: contentWidth - 18, lineGap: 2 }) + 3.5;
  });

  curY += 10;

  // 6. EDUCATION
  curY = drawSectionHeader('E D U C A T I O N', curY);
  curY += 2;

  doc.font('Helvetica-Bold')
     .fontSize(9)
     .fillColor(primaryColor)
     .text('B.Sc. Visual Communication', leftMargin, curY, {
       continued: false,
       width: contentWidth - 100
     });

  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor(mutedColor)
     .text('2014 — 2017', rightMargin - 100, curY, {
       align: 'right',
       width: 100
     });

  curY += 12;

  doc.font('Helvetica-Oblique')
     .fontSize(8.5)
     .fillColor(mutedColor)
     .text('GRD College of Arts & Science, Coimbatore', leftMargin, curY);

  curY += 18;

  // 7. SKILLS
  curY = drawSectionHeader('S K I L L S', curY);
  curY += 2;

  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor('#262626')
     .text(
       'Product Design   •   UI/UX Design   •   SaaS Dashboard Design   •   Design Systems   •   User Research   •   Usability Testing   •   Wireframing   •   Prototyping   •   Information Architecture   •   Figma   •   Hotjar   •   Adobe Illustrator   •   HTML   •   CSS   •   JavaScript   •   AI Tools',
       leftMargin,
       curY,
       {
         align: 'center',
         width: contentWidth,
         lineGap: 4
       }
     );

  curY += 26;

  // 8. LANGUAGES
  curY = drawSectionHeader('L A N G U A G E S', curY);
  curY += 2;

  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor('#262626')
     .text(
       'English — Professional Working Proficiency   •   Tamil — Native',
       leftMargin,
       curY,
       {
         align: 'center',
         width: contentWidth
       }
     );

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', () => resolve(true));
    stream.on('error', reject);
  });
}

generateResumePDF('./Pandiya_Sudhan_R_Product_Designer_Resume.pdf')
  .then(() => {
    console.log('Successfully generated Pandiya_Sudhan_R_Product_Designer_Resume.pdf');
  })
  .catch((err) => {
    console.error('Error generating PDF:', err);
    process.exit(1);
  });
