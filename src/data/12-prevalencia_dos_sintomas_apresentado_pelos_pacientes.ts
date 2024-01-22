export const option12 = {
  title: {
    text: "Prevalência dos sintomas apresentados pelos paciente.",
    left: "left",
  },

  xAxis: {
    type: "category",
    data: [
      "Tosse",
      "Falta de ar",
      "Hiperemia Ocular",
      "Edema ocular",
      "Febre",
      "Sibilância",
      "Prurido nasal",
      "Coriza nasal",
      "Dor",
      "Espirro",
      "Exacerbação D.A.",
      "Nega",
    ],
    axisLabel: { interval: 0, rotate: 30 },
  },
  yAxis: {
    type: "value",
  },
  label: {
    show: true,
    fontSize: 14,
    fontWeight: "bold",
  },
  series: [
    {
      data: [21, 8, 1, 1, 3, 3, 1, 3, 3, 1, 1, 109],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      },
    },
  ],
};
