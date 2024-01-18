export const option4 = {
  title: {
    text: "Valores de referência Ige Total",
    left: "center",
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: { show: true },
    },
  },
  tooltip: {
    trigger: "item",
  },
  dataset: {
    source: [
      ["product", "value"],
      ["Ige > 100", 92],
      ["Ige < 100", 29],
      ["Sem informação", 50],
    ],
  },
  grid: { top: "55%" },
  series: [
    {
      name: "Access From",
      type: "pie",
      id: "pie",
      radius: "30%",
      center: ["50%", "25%"],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      label: {
        formatter: "{b}: {@value} ({d}%)",
        fontSize: 14,
        fontWeight: "bold",
      },
    },
  ],
};
