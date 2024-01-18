export const option11 = {
  title: {
   text: "Prevalência das comorbidades apresentada pelos paciente no momento de realização do exame.",
   left: "left",
 },
 
 xAxis: {
   type: 'category',
   data: ['APLV', 'Urticária', 'Angioedema', 'Riníte alergica', 'Dermatite Atópica', 'Alergia alimentar', 'Conjuntitive alergira', 'Alergia a fármacos', 'Eczema', 'Sinusite', 'Lactente Sivilante'],
   axisLabel: { interval: 0, rotate: 30 }
 },
 yAxis: {
   type: 'value'
 },
 label: {
       show: true,
       fontSize: 14,
       fontWeight: "bold",
 },
 series: [
   {
     data: [6, 5, 1, 156, 41, 4, 10, 13, 1, 1, 6],
     type: 'bar',
     showBackground: true,
     backgroundStyle: {
       color: 'rgba(180, 180, 180, 0.2)'
     }
   }
 ]
};