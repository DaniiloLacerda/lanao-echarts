export const option16 = {
  xAxis: {
    data: ["Sem medicação", "Corticoide", "Corticoide e LABA"],
  },
  yAxis: {
    type: "value",
  },
  title: {
    text: "Medicação Intercrítica",
    left: "center",
  },
  series: [
    {
      name: "Quantidade",
      type: "bar",
      data: [31, 43, 94],
      label: {
        show: true,
        formatter: (params: any) =>
          params.value +
          " (" +
          Math.fround((params.value / 168) * 100).toFixed(2) +
          "%)",
        fontSize: 14,
        fontWeight: "bold",
      },
    },
  ],
};
