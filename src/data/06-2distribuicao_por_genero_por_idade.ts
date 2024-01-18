export const option6 = {
  title: {
   text: "Poporção de sexo de acordo com a idade",
    left: "center",
 },
 series: [
   {
     type: "pie",
     radius: ["20%", "10%"],
     center: ["25%", "30%"],
     data: [{ value: 96, name: "Masculino" }],
     label: {
       formatter: "{b}: {@value}",
       fontSize: 14,
       fontWeight: "bold",
     },
   },
   {
     type: "pie",
     radius: "20%",
     center: ["75%", "30%"],
    data: [
       {
         value: 25,
         name: "Maior que 12 anos",
       },
       {
         value: 71,
         name: "De 06 a 12 anos",
       }],
         label: {
       formatter: "{b}: {@value}",
       fontSize: 14,
       fontWeight: "bold",
     },
   },
   {
     type: "pie",
     radius: ["20%", "10%"],
     center: ["25%", "75%"],
     data: [
       {
         value: 72,
         name: "Feminino",
         itemStyle: {
           color: "#F260B5",
         },
       },
     ],
     label: {
       formatter: "{b}: {@value}",
       fontSize: 14,
       fontWeight: "bold",
     },
   },
   {
     type: "pie",
     radius: "20%",
     center: ["75%", "75%"],
       label: {
       formatter: "{b}: {@value}",
       fontSize: 14,
       fontWeight: "bold",
     },
      data: [
       {
         value: 15,
         name: "Maior que 12 anos",
       },
       {
         value: 57,
         name: "De 06 a 12 anos",
       },
     ],
   },
 ],
};
