// import jsPDF from 'jspdf'; // Import jsPDF

// const downloadCardInfo = () => {
//   if (principle) {
//     const doc = new jsPDF();

//     // Set PDF metadata and styles
//     doc.setFontSize(16);
//     doc.text('Card Information', 20, 20);

//     // Add content to the PDF
//     doc.setFontSize(12);
//     doc.text(`Name: ${principle.FirstName} ${principle.LastName}`, 20, 30);
//     doc.text(`Father's Name: ${principle.fathername}`, 20, 40);
//     doc.text(`Age: ${principle.age}`, 20, 50);
//     doc.text(`Experience: ${principle.Experience} Years`, 20, 60);
//     doc.text(`Qualification: ${principle.Qualification}`, 20, 70);
//     doc.text(`Gender: ${principle.gender}`, 20, 80);

//     // Save the PDF
//     doc.save(`${principle.FirstName}_${principle.LastName}_Info.pdf`);
//   }
// };
