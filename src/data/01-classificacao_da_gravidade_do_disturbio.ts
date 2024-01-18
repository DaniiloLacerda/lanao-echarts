

export const option1 = {
  xAxis: {
    data: ["Pré-bd > 80% previsto", "Pré-bd 80% - 60% previsto", "Pré-bd < 60% previsto"],
  },
  yAxis: {
    type: "value",
  },
 title: {
    text: "Classificação da gravidade do distúrbio",
    subtext: "baseado no VEF1",
    left: "center",
  },
  series: [
    {
      name: "Quantidade",
      type: "bar",
      data: [147, 18,3],
      label: {
        show: true,
        formatter: (params: any) => params.value+" ("+ Math.fround((params.value/168) * 100).toFixed(2) + "%)",
        fontSize: 14,
        fontWeight: "bold",
      },
    },
  ],
};
