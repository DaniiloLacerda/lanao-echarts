// >300 => 80
// < 300 => 57
// sem informação => 31

export const option9 = {
  xAxis: {
    data: ["Eosinófilos > 300", "Eosinófilos < 300", "Sem informação"],
  },
  yAxis: {
    type: "value",
  },
  title: {
    text: "Valor de referência de Eosinófilos",
    left: "left",
  },
  series: [
    {
      name: "Quantidade",
      type: "bar",
      data: [80, 57, 31],
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
