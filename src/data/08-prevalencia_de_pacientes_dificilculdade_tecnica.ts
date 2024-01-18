export const option8 = {
  xAxis: {
    data: ["SIM", "NÃO"],
  },
  yAxis: {
    type: "value",
  },
  title: {
    text: "Prevalência do número de paciente que apresentaram dificuldades na técnica durante a realização do exame.",
  },
  series: [
    {
      name: "Quantidade",
      type: "bar",
      data: [14, 154],
      label: {
        show: true,
        formatter: (params: any) =>
          params.value + " (" + Math.round((params.value / 168) * 100) + "%)",
        fontSize: 14,
        fontWeight: "bold",
      },
    },
  ],
};
