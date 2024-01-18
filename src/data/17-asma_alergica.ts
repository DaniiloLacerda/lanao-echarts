export const option17 = {
  xAxis: {
    data: ["Não alérgica", "Alérgica", "Eosinofilica"],
  },
  yAxis: {
    type: "value",
  },
  title: {
    text: "Prevalência de acordo com a classificação de asma",
    left: "center",
  },
  series: [
    {
      name: "Quantidade",
      type: "bar",
      data: [26, 56, 86],
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
